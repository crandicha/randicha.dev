export const WORK_EXPERIENCES: {
  company: string
  title: string
  from: string
  to: string
  description: string[]
  logo: string
}[] = [
  {
    company: 'Tiket.com',
    title: 'Senior Frontend Engineer',
    from: 'June 2023',
    to: 'Present',
    description: [
      'Collaborated with Tiket.com 7+ vertical teams to enhance pricing strategy on Tiket.com.',
      'Developed an intuitive pricing dashboard for streamlined pricing management.',
      'Drive innovation and continuous improvement initiatives, leveraging emerging technologies and industry best practices.',
      'Crafted modularized, tested, and strongly typed code for improved maintainability.',
    ],
    logo: 'images/company/100/tiketcom.png',
  },
  {
    company: 'GovTech Edu',
    title: 'Senior Frontend Engineer',
    from: 'Aug 2021',
    to: 'May 2023',
    description: [
      'Collaborated with multiple squads to develop features enhancing the educational experience for teachers in Indonesia.',
      'Contributed to the development and maintenance of Design System Component Library and general utilities packages used by 40+ frontend engineers, streamlining development processes.',
      'Ensured optimal user experience across platforms through PWA caching and maintained code quality with rigorous testing.',
      'Led the migration of legacy Svelte service to NextJs services, implementing load balancing handling for seammless user experience.',
      'Become a speaker at internal frontend meetups.',
    ],
    logo: 'images/company/100/govtech.png',
  },
  {
    company: 'Bukalapak',
    title: 'Middle Frontend Engineer',
    from: 'July 2018',
    to: 'July 2021',
    description: [
      "Collaborated with Product and Design teams to create user-friendly interfaces for Bukalapak's Seller Center Website.",
      'Contributed to the development and maintenance of a Design System Component Library utilized by 100+ frontend engineers, supporting consistent and efficient UI implementation.',
      'Become a speaker for internal frontend meetup.',
      'Mentored and provided guidance to fellow frontend engineers to enhance their skills and knowledge.',
    ],
    logo: 'images/company/100/bukalapak.png',
  },
  {
    company: 'Gradin',
    title: 'Fullstack Web Developer',
    from: 'Sept 2017',
    to: 'Jun 2018',
    description: [
      'Built multiple web & desktop apps based on 15+ unique clients needs.',
      'Helped management tracking employee work by building time tracking apps',
      'Helped employee and management tracking every deadline by building internal calendar apps which support Asana integration',
      'Managing & Maintaining internal hosting server',
      'Mentoring & giving advices to fellow engineers',
    ],
    logo: 'images/company/100/gradin.png',
  },
]

export const YEARS_OF_EXPERIENCE = Math.floor(
  (new Date().getTime() - new Date('2017-09-01').getTime()) /
    (1000 * 60 * 60 * 24 * 30 * 12)
)

export const EMAIL_ADDRESS = 'charles.randicha@gmail.com'
export const GITHUB_URL = 'https://github.com/crandicha'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/charlesrandicha/'
export const PHONE_NUMBER = '6285163742321'
