import {
  EDUCATION,
  EMAIL_ADDRESS,
  LINKEDIN_URL,
  LOCATION,
  RESUME_SKILLS,
  RESUME_SUMMARY,
  WORK_EXPERIENCES,
} from '../data/general'

const RESUME_FILE_NAME = 'Charles Randicha Gunawan Santoso Resume.pdf'
const MARGIN_X = 46
const MARGIN_TOP = 52
const MARGIN_BOTTOM = 40
const PAGE_WIDTH = 612
const PAGE_HEIGHT = 792
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2
const BODY_SIZE = 9.5
const BODY_LINE = 14
const BLOCK_GAP = BODY_LINE
const HEADER_GAP = 46
const HEADING_SIZE = 12

export type ResumeFontFiles = {
  regular: string
  bold: string
  italic: string
}

export type ResumeData = {
  name: string
  title: string
  location: string
  contacts: string[]
  summary: string
  experiences: typeof WORK_EXPERIENCES
  education: typeof EDUCATION
  skills: typeof RESUME_SKILLS
}

let cachedFontPromise: Promise<ResumeFontFiles> | null = null

export async function downloadResume() {
  const [{ jsPDF }, fonts] = await Promise.all([
    import('jspdf'),
    loadResumeFonts().catch(() => undefined),
  ])
  createResumeDoc(jsPDF, getResumeData(), fonts).save(RESUME_FILE_NAME)
}

export function getResumeData(): ResumeData {
  return {
    name: 'Charles Randicha Gunawan Santoso',
    title: WORK_EXPERIENCES[0]?.title ?? 'Frontend Engineer',
    location: LOCATION,
    contacts: [
      EMAIL_ADDRESS,
      LINKEDIN_URL.replace(/\/$/, ''),
    ],
    summary: RESUME_SUMMARY,
    experiences: WORK_EXPERIENCES,
    education: EDUCATION,
    skills: RESUME_SKILLS,
  }
}

export function toShortMonth(value: string) {
  if (value === 'Present') return value
  const monthAbbrev: Record<string, string> = {
    January: 'Jan',
    February: 'Feb',
    March: 'Mar',
    April: 'Apr',
    May: 'May',
    June: 'Jun',
    July: 'Jul',
    August: 'Aug',
    September: 'Sep',
    Sept: 'Sep',
    October: 'Oct',
    November: 'Nov',
    December: 'Dec',
    Aug: 'Aug',
    Jun: 'Jun',
    Jul: 'Jul',
  }
  const parts = value.split(' ')
  const month = parts[0] ?? value
  const shortMonth = monthAbbrev[month] ?? month.slice(0, 3)
  if (parts.length <= 1) return shortMonth
  return `${shortMonth} ${parts.slice(1).join(' ')}`
}

type JsPDFConstructor = typeof import('jspdf').jsPDF

export type ResumeTextRecord = { content: string; y: number; page: number }

export function createResumeDoc(
  JsPDF: JsPDFConstructor,
  data: ResumeData,
  fonts?: ResumeFontFiles,
  textTrace?: ResumeTextRecord[]
) {
  const doc = new JsPDF({
    unit: 'pt',
    format: 'letter',
    compress: false,
  })

  if (textTrace) {
    const drawText = doc.text.bind(doc)
    doc.text = function traceText(
      text: string | string[],
      x: number,
      yPos: number,
      options?: unknown
    ) {
      const page = doc.getCurrentPageInfo().pageNumber
      const chunks = Array.isArray(text) ? text : [text]
      chunks.forEach((chunk) => {
        textTrace.push({ content: String(chunk), y: yPos, page })
      })
      return drawText(text, x, yPos, options)
    }
  }

  if (fonts) {
    doc.addFileToVFS('OpenSans-Regular.ttf', fonts.regular)
    doc.addFont('OpenSans-Regular.ttf', 'OpenSans', 'normal')
    doc.addFileToVFS('OpenSans-Bold.ttf', fonts.bold)
    doc.addFont('OpenSans-Bold.ttf', 'OpenSans', 'bold')
    doc.addFileToVFS('OpenSans-Italic.ttf', fonts.italic)
    doc.addFont('OpenSans-Italic.ttf', 'OpenSans', 'italic')
  }

  const fontFamily = fonts ? 'OpenSans' : 'helvetica'
  let y = MARGIN_TOP
  const bottomY = PAGE_HEIGHT - MARGIN_BOTTOM

  const setFont = (
    style: 'normal' | 'bold' | 'italic',
    fontSize: number
  ) => {
    doc.setFont(fontFamily, style)
    doc.setFontSize(fontSize)
  }

  const ensureSpace = (needed: number) => {
    if (y + needed > bottomY) {
      doc.addPage()
      y = MARGIN_TOP
    }
  }

  const addGap = (amount: number) => {
    if (y === MARGIN_TOP) return
    if (y + amount > bottomY) {
      doc.addPage()
      y = MARGIN_TOP
      return
    }
    y += amount
  }

  const writeCentered = (
    text: string,
    fontSize: number,
    style: 'normal' | 'bold' | 'italic',
    step: number
  ) => {
    setFont(style, fontSize)
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH) as string[]
    lines.forEach((line) => {
      ensureSpace(step)
      doc.text(line, PAGE_WIDTH / 2, y, { align: 'center' })
      y += step
    })
  }

  const writeWrapped = (
    text: string,
    fontSize: number = BODY_SIZE,
    style: 'normal' | 'bold' | 'italic' = 'normal'
  ) => {
    setFont(style, fontSize)
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH) as string[]
    lines.forEach((line) => {
      ensureSpace(BODY_LINE)
      doc.text(line, MARGIN_X, y)
      y += BODY_LINE
    })
  }

  const writeSectionHeading = (title: string, isFirst: boolean) => {
    if (isFirst) {
      addGap(HEADER_GAP)
    } else {
      addGap(BLOCK_GAP)
    }
    setFont('bold', HEADING_SIZE)
    ensureSpace(BODY_LINE)
    doc.text(title, MARGIN_X, y)
    y += BODY_LINE
    addGap(BLOCK_GAP)
  }

  const writeLabelValue = (boldText: string, regularText: string) => {
    setFont('bold', BODY_SIZE)
    const boldWidth = doc.getTextWidth(boldText)
    setFont('normal', BODY_SIZE)
    const regularPart = regularText.startsWith(' ')
      ? regularText
      : ` ${regularText}`
    const regularWidth = doc.getTextWidth(regularPart)

    if (boldWidth + regularWidth <= CONTENT_WIDTH) {
      ensureSpace(BODY_LINE)
      setFont('bold', BODY_SIZE)
      doc.text(boldText, MARGIN_X, y)
      setFont('normal', BODY_SIZE)
      doc.text(regularPart, MARGIN_X + boldWidth, y)
      y += BODY_LINE
      return
    }

    ensureSpace(BODY_LINE)
    setFont('bold', BODY_SIZE)
    doc.text(boldText, MARGIN_X, y)
    y += BODY_LINE
    writeWrapped(regularPart.trimStart())
  }

  const writeBullet = (text: string) => {
    setFont('normal', BODY_SIZE)
    const lines = doc.splitTextToSize(`• ${text}`, CONTENT_WIDTH) as string[]
    lines.forEach((line) => {
      ensureSpace(BODY_LINE)
      doc.text(line, MARGIN_X, y)
      y += BODY_LINE
    })
  }

  writeCentered(data.name, 20, 'bold', 19)
  writeCentered(data.title, 12, 'normal', 15)
  writeCentered(data.location, 10, 'italic', 14)
  writeCentered(data.contacts.join(' | '), 10, 'italic', 14)

  writeSectionHeading('Professional Summary', true)
  writeWrapped(data.summary)

  writeSectionHeading('Work Experiences', false)
  data.experiences.forEach((job, index) => {
    ensureSpace(2 * BODY_LINE)
    const dateRange = `${toShortMonth(job.from)} - ${toShortMonth(job.to)}`
    writeLabelValue(job.title, dateRange)
    const companyLine = `${job.resumeCompany ?? job.company} | ${job.location}`
    writeWrapped(companyLine, BODY_SIZE, 'italic')
    job.description?.forEach((bullet) => writeBullet(bullet))
    if (index < data.experiences.length - 1) {
      addGap(BLOCK_GAP)
    }
  })

  if (data.education.length > 0) {
    writeSectionHeading('Education', false)
    data.education.forEach((entry) => {
      writeLabelValue(entry.school, `- ${entry.degree}`)
    })
  }

  const skillGroups = data.skills.filter((group) => group.items.length > 0)
  if (skillGroups.length > 0) {
    writeSectionHeading('Skills', false)
    skillGroups.forEach((group) => {
      writeLabelValue(`${group.label}:`, group.items.join(', '))
    })
  }

  return doc
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer)
  const chunkSize = 32768
  let binary = ''
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize))
  }
  return btoa(binary)
}

async function fetchFontBase64(path: string) {
  const response = await fetch(path)
  if (!response.ok) {
    throw new Error(`Failed to load font: ${path}`)
  }
  const buffer = await response.arrayBuffer()
  return arrayBufferToBase64(buffer)
}

export function loadResumeFonts() {
  if (!cachedFontPromise) {
    cachedFontPromise = Promise.all([
      fetchFontBase64('/fonts/OpenSans-Regular.ttf'),
      fetchFontBase64('/fonts/OpenSans-Bold.ttf'),
      fetchFontBase64('/fonts/OpenSans-Italic.ttf'),
    ]).then(([regular, bold, italic]) => ({ regular, bold, italic }))
  }
  return cachedFontPromise
}
