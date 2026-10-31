import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { jsPDF } from 'jspdf'
import {
  EDUCATION,
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  PHONE_NUMBER,
  RESUME_SKILLS,
  WORK_EXPERIENCES,
} from '../data/general'
import {
  createResumeDoc,
  getResumeData,
  toShortMonth,
  type ResumeData,
  type ResumeFontFiles,
  type ResumeTextRecord,
} from './resume'

const MARGIN_TOP = 52

function resumePdfText(doc: ReturnType<typeof createResumeDoc>) {
  const buffer = doc.output('arraybuffer') as ArrayBuffer
  return Buffer.from(buffer).toString('latin1')
}

function loadFontsFromDisk(): ResumeFontFiles {
  const fontsDir = path.join(process.cwd(), 'public/fonts')
  return {
    regular: fs.readFileSync(path.join(fontsDir, 'OpenSans-Regular.ttf')).toString(
      'base64'
    ),
    bold: fs.readFileSync(path.join(fontsDir, 'OpenSans-Bold.ttf')).toString(
      'base64'
    ),
    italic: fs.readFileSync(path.join(fontsDir, 'OpenSans-Italic.ttf')).toString(
      'base64'
    ),
  }
}

function buildLayoutTrace(data: ResumeData) {
  const calls: ResumeTextRecord[] = []
  createResumeDoc(jsPDF, data, undefined, calls)
  return calls
}

function indexOfContent(calls: ResumeTextRecord[], match: string) {
  return calls.findIndex((call) => call.content === match)
}

describe('resume layout spacing', () => {
  it('spaces the header like the reference', () => {
    const data = getResumeData()
    const calls = buildLayoutTrace(data)
    const nameIndex = indexOfContent(calls, data.name)
    const titleIndex = indexOfContent(calls, data.title)
    const summaryHeadingIndex = indexOfContent(calls, 'Professional Summary')
    const contactIndex = calls.findIndex((call) =>
      call.content.includes(EMAIL_ADDRESS)
    )

    expect(nameIndex).toBeGreaterThan(-1)
    expect(titleIndex).toBeGreaterThan(nameIndex)
    expect(contactIndex).toBeGreaterThan(-1)
    expect(summaryHeadingIndex).toBeGreaterThan(contactIndex)

    const nameToTitle = calls[titleIndex].y - calls[nameIndex].y
    const contactToSummary =
      calls[summaryHeadingIndex].y - calls[contactIndex].y

    expect(nameToTitle).toBeGreaterThanOrEqual(18)
    expect(nameToTitle).toBeLessThanOrEqual(20)
    expect(contactToSummary).toBeGreaterThanOrEqual(60)
  })

  it('adds a blank line after each section heading', () => {
    const calls = buildLayoutTrace(getResumeData())
    const headings = [
      'Professional Summary',
      'Work Experiences',
      'Education',
      'Skills',
    ]

    headings.forEach((heading) => {
      const headingIndex = indexOfContent(calls, heading)
      expect(headingIndex).toBeGreaterThan(-1)
      const next = calls[headingIndex + 1]
      expect(next).toBeDefined()
      expect(next.y - calls[headingIndex].y).toBeGreaterThanOrEqual(27)
      expect(next.y - calls[headingIndex].y).toBeLessThanOrEqual(29)
    })
  })

  it('adds a blank line between jobs', () => {
    const data = getResumeData()
    const calls = buildLayoutTrace(data)
    const secondTitle = data.experiences[1].title
    const firstTitleIndex = indexOfContent(calls, data.experiences[0].title)
    const secondIndex = calls.findIndex(
      (call, index) => index > firstTitleIndex && call.content === secondTitle
    )
    const previous = calls[secondIndex - 1]

    expect(secondIndex).toBeGreaterThan(0)
    expect(calls[secondIndex].y - previous.y).toBeGreaterThanOrEqual(27)
    expect(calls[secondIndex].y - previous.y).toBeLessThanOrEqual(29)
  })

  it('starts new pages at the top margin without a leading gap', () => {
    const calls = buildLayoutTrace(getResumeData())
    const pageTwoCalls = calls.filter((call) => call.page === 2)
    expect(pageTwoCalls.length).toBeGreaterThan(0)
    expect(Math.min(...pageTwoCalls.map((call) => call.y))).toBe(MARGIN_TOP)
  })

  it('keeps job title and company on the same page when possible', () => {
    const data = getResumeData()
    const calls = buildLayoutTrace(data)
    const workHeadingIndex = indexOfContent(calls, 'Work Experiences')
    let searchFrom = workHeadingIndex + 1
    data.experiences.forEach((job) => {
      const titleIndex = calls.findIndex(
        (call, index) => index >= searchFrom && call.content === job.title
      )
      const companyLine = `${job.resumeCompany ?? job.company} | ${job.location}`
      const companyIndex = calls.findIndex(
        (call, index) => index > titleIndex && call.content === companyLine
      )
      expect(titleIndex).toBeGreaterThan(-1)
      expect(companyIndex).toBeGreaterThan(titleIndex)
      expect(calls[companyIndex].page).toBe(calls[titleIndex].page)
      expect(calls[companyIndex].y - calls[titleIndex].y).toBe(14)
      searchFrom = companyIndex + 1
    })
  })
})

describe('createResumeDoc', () => {
  it('includes every company label, location, email, and LinkedIn without trailing slash', () => {
    const data = getResumeData()
    const text = resumePdfText(createResumeDoc(jsPDF, data))

    WORK_EXPERIENCES.forEach((job) => {
      expect(text).toContain(job.resumeCompany ?? job.company)
      expect(text).toContain(job.location)
    })
    expect(text).toContain(LOCATION)
    expect(text).toContain(EMAIL_ADDRESS)
    expect(text).toContain(LINKEDIN_URL.replace(/\/$/, ''))
  })

  it('lists sections in reference order', () => {
    const text = resumePdfText(createResumeDoc(jsPDF, getResumeData()))
    const summary = text.indexOf('Professional Summary')
    const work = text.indexOf('Work Experiences')
    const education = text.indexOf('Education')
    const skills = text.indexOf('Skills')
    expect(summary).toBeGreaterThan(-1)
    expect(work).toBeGreaterThan(summary)
    expect(education).toBeGreaterThan(work)
    expect(skills).toBeGreaterThan(education)
  })

  it('does not include phone, GitHub, or site URL', () => {
    const text = resumePdfText(createResumeDoc(jsPDF, getResumeData()))
    expect(text).not.toContain(PHONE_NUMBER)
    expect(text).not.toContain(GITHUB_URL)
    expect(text).not.toContain('randicha.dev')
  })

  it('includes education and skill labels', () => {
    const text = resumePdfText(createResumeDoc(jsPDF, getResumeData()))
    expect(text).toContain(EDUCATION[0].school)
    RESUME_SKILLS.forEach(({ label }) => {
      expect(text).toContain(label)
    })
  })

  it('uses US Letter size and spans two pages', () => {
    const doc = createResumeDoc(jsPDF, getResumeData())
    expect(doc.internal.pageSize.getWidth()).toBeCloseTo(612, 0)
    expect(doc.getNumberOfPages()).toBe(2)
  })

  it('abbreviates months for PDF dates', () => {
    expect(toShortMonth('November 2025')).toBe('Nov 2025')
    expect(toShortMonth('Sept 2017')).toBe('Sep 2017')
    expect(toShortMonth('Jun 2018')).toBe('Jun 2018')
    expect(toShortMonth('Present')).toBe('Present')
  })

  it('embeds Open Sans when font files are provided', () => {
    const fonts = loadFontsFromDisk()
    const text = resumePdfText(createResumeDoc(jsPDF, getResumeData(), fonts))
    expect(text).toContain('OpenSans')
  })

  it('adds pages when content is very long', () => {
    const base = getResumeData()
    const longBullet =
      'Led cross-functional initiatives with measurable impact on delivery velocity and quality across multiple product surfaces. '
    const data: ResumeData = {
      ...base,
      experiences: [
        {
          ...base.experiences[0],
          description: Array.from({ length: 80 }, () => longBullet),
        },
        ...base.experiences.slice(1),
      ],
    }
    const doc = createResumeDoc(jsPDF, data)
    expect(doc.getNumberOfPages()).toBeGreaterThan(1)
  })

  it('skips education and skills when empty', () => {
    const base = getResumeData()
    const data: ResumeData = {
      ...base,
      education: [],
      skills: [],
    }
    const text = resumePdfText(createResumeDoc(jsPDF, data))
    expect(text).not.toContain('Education')
    expect(text).not.toContain('Skills')
  })

  it('renders a job with an empty description list', () => {
    const base = getResumeData()
    const data: ResumeData = {
      ...base,
      experiences: [{ ...base.experiences[0], description: [] }],
    }
    const text = resumePdfText(createResumeDoc(jsPDF, data))
    expect(text).toContain(base.experiences[0].title)
  })

  it('uses company name when resumeCompany is omitted', () => {
    const base = getResumeData()
    const data: ResumeData = {
      ...base,
      experiences: [
        {
          ...base.experiences[0],
          resumeCompany: undefined,
          company: 'CSG',
        },
      ],
    }
    const text = resumePdfText(createResumeDoc(jsPDF, data))
    expect(text).toContain('CSG | Englewood, CO')
  })

  it('fits the pricing dashboard bullet on one line', () => {
    const bullet =
      'Designed and led the development of an intuitive pricing dashboard, enabling streamlined pricing management.'
    const calls = buildLayoutTrace(getResumeData())
    const match = calls.find((call) => call.content.includes('pricing dashboard'))
    expect(match?.content.startsWith('• ')).toBe(true)
    expect(match?.content).toBe(`• ${bullet}`)
  })
})

describe('toShortMonth', () => {
  it('leaves June unchanged', () => {
    expect(toShortMonth('June 2023')).toBe('Jun 2023')
  })
})
