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
      'Collaborated cross-functionally with various teams to enhance the pricing strategy for products on Tiket.com.',
      'Facilitated streamlined pricing management for the product manager and market manager through the utilization of an intuitive pricing dashboard.',
      'Enhanced code readability by crafting well-documented, meticulously tested, and strongly typed code for improved maintainability and understanding.',
    ],
    logo: 'images/company/100/tiketcom.png',
  },
  {
    company: 'GovTech Edu',
    title: 'Senior Frontend Engineer',
    from: 'Aug 2021',
    to: 'May 2023',
    description: [
      'Worked with multiple squad to build feature that help teachers & educators in Indonesia in every aspect',
      'Contributing in building company-wide Frontend Component Library',
      'Published multiple packages that helped fellow frontend engineers to develop their application',
      'Ensuring fast user experience on every platform using PWA caching mechanism',
      'Ensuring type-safe code with typescript',
      'Applying Test Driven Development principle on every work',
      'Maintaining code quality with both unit',
    ],
    logo: 'images/company/100/govtech.png',
  },
  {
    company: 'Bukalapak',
    title: 'Middle Frontend Engineer',
    from: 'July 2018',
    to: 'July 2021',
    description: [
      'Working closely with Product and Design team to deliver high quality, reliable, performant, and maintainable user interfaces.',
      'Helped Bukalapak’s users to manage their goods by building and',
      'maintaining Bukalapak’s Seller Center Website',
      'Created many complex feature that simplify users experience (e.g. Product Variant Combination)',
      'Contributed in building tribe-wide Frontend Component Library',
      'Writing unit test and integration test for frontend application',
      'Become a speaker for internal Javascript community meetup',
      'Ensuring code compatibility across wide array of supported browsers.',
      'Mentoring & giving advices to fellow frontend engineers',
    ],
    logo: 'images/company/100/bukalapak.png',
  },
  {
    company: 'Gradin',
    title: 'Fullstack Web Developer',
    from: 'Sept 2017',
    to: 'Jun 2018',
    description: [
      'Built multiple web & desktop apps (fullstack)',
      'Meet with clients and provide appropriate solutions for their needs',
      'Helped management tracking employee work by building time tracking apps',
      'Helped employee and management tracking every deadline by building internal calendar apps which support Asana integration',
      'Maintaining internal hosting server',
      'Mentoring & giving advices to fellow engineers',
    ],
    logo: 'images/company/100/gradin.png',
  },
  {
    company: 'CV Bintang Semesta Pangan',
    title: 'Mobile App Developer (Thesis Project)',
    from: 'Jan 2016',
    to: 'Jan 2017',
    description: [
      'Built a warehouse management system apps with the capability to calculate available inventory space, best product placement location based on product dimension and amount',
    ],
    logo: 'images/company/100/no-logo.png',
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
