import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'
import emailIcon from './assets/email.png'
import insuranceAutomationImage from './assets/insurance/hero.png'
import spawtifyImage from './assets/spawtify/hero.jpg'
import jokeImage from './assets/joke-app/hero.png'

// Contact
export const CONTACT_ITEMS = [
  {
    id: 'email',
    icon: emailIcon,
    label: 'siyini.suzi@outlook.com',
    href: `mailto:siyini.suzi@outlook.com`,
  },
  {
    id: 'linkedin',
    icon: linkedinIcon,
    label: 'linkedin.com/in/suzisyn',
    href: 'https://linkedin.com/in/suzisyn',
  },
  {
    id: 'github',
    icon: githubIcon,
    label: 'github.com/sni026',
    href: 'https://github.com/sni026',
  },
]

// Hero
export const NAME = 'Suzi Ni';
export const SUBTITLE = 'Software Developer';
export const BIO = `I speak both languages: business and code.
I build full-stack web applications, APIs, cloud solutions, and business systems using React, C#/.NET, Node.js, PostgreSQL, and AWS. Backed by more than two years in business analysis, I turn complex requirements into practical, scalable software.
Let's build something meaningful.`;
export const LOCATION = 'Based in Auckland, NZ';

// About
export const ABOUT_ME = `My path into development started with a question: [what's actually happening behind the system?]
As an ERP Business Analyst, I bridged business and technology, but every conversation with developers made me want to understand how the systems themselves were built. So I returned to university, completed a Master of Information Technology, and started building software of my own. [There's always something new to learn and another worthwhile problem to solve.]
The deeper I got into development, the more I saw its connection to consulting. [Seeing technology solve a real problem excited me then, and it still drives me now.]`;

export const ABOUT_ME_2 = `What's different about me is that I've been on both sides of the table. [I understand how businesses think, why requirements were raised, how systems are structured, and how everything fits together.]
Today, I combine that perspective with hands-on experience across frontend, backend, cloud, databases, integrations, and workflow automation. [I can move from understanding the business need to designing and delivering a solution], while collaborating effectively with both technical and non-technical teams.`;

// Experience
export const EXPERIENCE_SUBTITLE = `From business analysis and full-stack development to cloud integrations and business system automation — a consistent focus on turning complex requirements into reliable, useful software.`;
export const EXPERIENCE = [
  {
    company: 'Amplifly Studio',
    role: 'Business Systems Developer',
    period: 'Apr 2026 — Present',
    description:
    `Design business systems that support property sales, construction, warranty, maintenance, and homeowner service workflows.
    Build relational Airtable architectures, Softr customer portals, REST API integrations, webhooks, and custom JavaScript automations.
    Develop multi-step workflows with Make.com and Airtable Automations to streamline reporting, notifications, approvals, and day-to-day operations.`,
    tags: ['Business Systems', 'Airtable', 'Softr', 'Make.com', 'JavaScript', 'RESTful APIs', 'Webhooks', 'Workflow Automation']
  },
  {
    company: 'Datacom',
    role: 'Web Development Intern',
    period: 'Feb 2026 — Apr 2026',
    description:
    `Developed backend services and RESTful APIs using Ruby on Rails, PostgreSQL, and Sidekiq for CRUD operations and asynchronous jobs.
    Built responsive React interfaces with JavaScript and MUI, including admin pages, notification banners, and customer feedback features.
    Collaborated across the Agile development lifecycle through planning, code reviews, automated testing, documentation, and UAT.`,
    tags: ['React', 'Ruby on Rails', 'PostgreSQL', 'Sidekiq', 'RESTful APIs', 'MUI', 'Agile/Scrum', 'Testing']
  },
  {
    company: 'Happy Valley Honey',
    role: 'Shopify Developer',
    period: 'Jul 2025 — Apr 2026',
    description:
    `Developed reusable Shopify theme components, product pages, and collection pages using Liquid, JavaScript, HTML, and CSS.
    Integrated third-party services for payments, marketing, inventory management, and operational workflows.
    Improved page speed and mobile usability through responsive design, code optimisation, and efficient asset loading.`,
    tags: ['Shopify', 'Liquid', 'JavaScript', 'HTML', 'CSS', 'API Integration', 'Responsive Design', 'Performance']
  },
  {
    company: 'Infor',
    role: 'Associate Business Analyst',
    period: 'Sept 2021 — Nov 2023',
    description:
    `Partnered with finance, procurement, and supply chain stakeholders to define requirements for ERP implementation and enhancement projects.
    Translated business needs into functional specifications, process flows, data mappings, configurations, and UAT materials.
    Led workshops, solution demonstrations, testing, defect resolution, training, go-live, and post-implementation support.`,
    tags: ['ERP', 'Business Analysis', 'Requirements Gathering', 'Functional Specifications', 'Process Mapping', 'UAT', 'Stakeholder Management']
  },
]

// Skills
export const SKILLS = [
  { category: 'Languages',       items: ['Java', 'C#', 'JavaScript', 'TypeScript', 'Python'] },
  { category: 'Frontend',        items: ['React', 'React Native', 'Next.js', 'Svelte', 'MUI', 'Shopify'] },
  { category: 'Backend & APIs',  items: ['Node.js', 'Ruby on Rails', 'ASP.NET Core MVC', 'RESTful APIs', 'Microservices'] },
  { category: 'Databases',       items: ['PostgreSQL', 'SQL Server', 'MongoDB'] },
  { category: 'Cloud & DevOps',  items: ['AWS Lambda', 'EC2', 'S3', 'AWS Bedrock', 'Docker', 'Git', 'CI/CD'] },
  { category: 'Automation',      items: ['Airtable', 'Softr', 'Make.com', 'Webhooks', 'Workflow Automation'] },
  { category: 'Ways of Working', items: ['Agile/Scrum', 'Business Analysis', 'UAT', 'Jira', 'Confluence'] },
]

// Projects
export const PROJECTS = [
  {
    id: 'spawtify-web-app',
    title: 'Pet Spotting Web Application',
    tags: ['Full MERN Stack','Geolocation', 'Interactive Maps'],
    image: spawtifyImage,
    imageRatio: '16/10',
    href: '#',
  },
  {
    id: 'insurance-automation',
    title: 'Cloud-Native Insurance Claims Automation',
    tags: ['AWS', 'React', 'Node.js', 'MongoDB', 'Agentic AI'],
    image: insuranceAutomationImage,
    imageRatio: '3/4',
    href: '#',
  },
  {
    id: 'dad-joke-app',
    title: 'Dad Joke Mobile App',
    tags: ['React Native', 'Mobile Development', 'Gesture & Animation UX'],
    image: jokeImage,
    imageRatio: '4/3',
    href: '#',
  },
]
