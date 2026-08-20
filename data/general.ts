export const WORK_EXPERIENCES: {
  company: string
  title: string
  from: string
  to: string
  description: string[]
  logo: string
}[] = [
  {
    company: 'CSG',
    title: 'Lead Frontend Engineer',
    from: 'November 2025',
    to: 'Present',
    description: [
      'Led frontend technical design and development for Quote and Order team',
      'Bridged engineering, product, and design by managing backlogs, aligning technical execution with product goals, and providing critical UX/UI feedback during design reviews to optimize user flows.',
      'Drove frontend modernization initiatives (AngularJs to Angular) to reduce technical debt, strengthen platform scalability, and establish a more sustainable foundation for future product development.'
    ],
    logo: 'images/company/100/csg.png'
  },
  {
    company: 'Tiket.com',
    title: 'Senior Frontend Engineer',
    from: 'June 2023',
    to: 'November 2025',
    description: [
      'Designed and led the development of an intuitive pricing dashboard, enabling streamlined pricing management.',
      'Spearheaded frontend and application initiatives across 7+ vertical teams to optimize pricing strategies at tiket.com, including the Nudges System and Dynamic Banner.',
      'Architected and maintained a component library used across all tiket.com vertical teams, ensuring consistent UI/UX, reducing duplication, and streamlining development. Implemented automated workflows for component creation, alpha releases, and stable releases.',
      'Established modular, strongly typed, and well-tested frontend architectures, reducing feature iteration time by 40%.',
      'Provided mentorship and technical guidance to frontend engineers, fostering skill development and knowledge sharing.',
    ],
    logo: 'images/company/100/tiketcom.png',
  },
  {
    company: 'INA Digital Edu',
    title: 'Senior Frontend Engineer',
    from: 'Aug 2021',
    to: 'May 2023',
    description: [
      'Helped in designing and developing the Design System Component Library and general utilities packages used by 40+ frontend engineers, streamlining development processes. Resulting in 30% productivity increase of all frontend engineers.',
      'Architected PWA caching strategies to improve cross-platform performance, reducing subsequent load times by 50%.',
      'Led the migration of a legacy Svelte service to Next.js, implementing load balancing for seamless user experience. Resulting in 30% productivity increase of other frontend developers that contribute to the service.',
      'Served as a speaker at internal frontend meetups, sharing expertise on best practices and new technologies.',
      'Mentored and provided guidance to fellow frontend engineers to enhance their skills and knowledge.',
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
      'Served as a speaker at internal frontend meetups, sharing insights and best practices.',
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
      'Designed and built multiple web and desktop applications tailored to the needs of 15+ clients.',
      'Developed a time-tracking application to help management monitor employee productivity.',
      'Built an internal calendar system integrated with Asana, improving deadline tracking for employees and management.',
      'Managed and maintained internal hosting servers, ensuring system reliability and security.',
      'Provided mentorship and technical support to fellow engineers, fostering a collaborative development environment.',
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
