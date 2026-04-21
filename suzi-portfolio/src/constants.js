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
export const SUBTITLE = 'Graduate Developer';
export const BIO = `I speak both languages: business and code.
With a background in ERP consulting and full-stack development across React, Node.js, and AWS, I build software that solves the right problem. Currently finishing my Master's in IT at the University of Auckland and ready for what's next.
Let's build something meaningful.`;
export const LOCATION = 'Based in Auckland, NZ';

// About
export const ABOUT_ME = `My path into development started with a question: [what's actually happening behind the system?]
As an ERP consultant, I spent time bridging business and technology, but every time I walked out of a meeting with developers, I left wanting to understand what they were doing. So I went back to university, pursued my MIT, and started developing. I love it, not just the coding, but the nature of it. [There's always something new to learn, always a challenge waiting.]
The more I got into it, the more I realised it wasn't so different from consulting. [Seeing technology solve a real problem, that's what excited me then, and it's what drives me now.]`;

export const ABOUT_ME_2 = `What's different about me is that I've been on both sides of the table. [I understand how businesses think, why requirements were raised, how systems are structured, and how everything fits together.]
I bring that [perspective] to my development work, and makes me a better developer.`;

// Experience
export const EXPERIENCE_SUBTITLE = `From configuring ERP systems for manufacturing clients to building full-stack web features and shaping Shopify storefronts — a through line of turning complex requirements into clean, working software.`;
export const EXPERIENCE = [
  {
    company: 'Datacom',
    role: 'Software Development Intern',
    period: 'Feb 2026 — Apr 2026',
    description:
    `Built full-stack features for a web portal including notification systems, admin tools, and automated feedback workflows. 
    Worked in team across the full development lifecycle, from design documentation in Confluence to testing. 
    Collaborated closely with team members to troubleshoot bugs, refine implementations, and improve code reusability.`,
    tags: ['React', 'Ruby on Rails', 'PostgreSQL', 'RESTful APIs', 'Agile/Scrum', 'Confluence', 'Jira', 'Full-Stack Development', 'Testing', 'Documentation',]  
  },
  {
    company: 'Infor',
    role: 'Associate ERP Consultant',
    period: 'Sept 2021 — Nov 2023',
    description:
    `Worked with manufacturing clients to gather requirements and configure ERP finance and supply chain modules.
    Bridged the gap between stakeholders and development teams. 
    Translated business needs into functional specs, produced structured documentation. 
    Led UAT activities from writing test cases to coordinating validation and resolving issues with stakeholders.`,
    tags: ['ERP', 'Business Analysis', 'Requirements Gathering', 'Functional Specifications', 'UAT', 'Test Case Development', 'Stakeholder Communication', 'Team Collaboration']
  },
  {
    company: 'NZ Honey Group',
    role: "Marketing and Sales Assistant",
    period: 'May 2024 —  Present',
    description:
      `Customized Shopify theme templates using HTML and CSS to build product and promotional pages. 
      Collaborated closely with marketing teams to align design decisions with brand standards, translating creative briefs into functional interfaces. 
      Maintained product data accuracy across listings, descriptions, and media assets within the Shopify admin system.`,
    tags: ['UI/UX','Shopify','Cross-platform Integration']  
  },
]

// Skills
export const SKILLS = [
  { category: 'Languages',       items: ['JavaScript', 'TypeScript', 'Ruby', 'Java', 'Python'] },
  { category: 'Frontend',        items: ['React', 'React Native','Svelte', 'Tailwind CSS', 'MUI', 'Shopify'] },
  { category: 'Backend',         items: ['Node.js', 'Ruby on Rails', 'RESTful APIs'] },
  { category: 'Databases',       items: ['PostgreSQL', 'MongoDB'] },
  { category: 'Cloud & Infra',   items: ['AWS'] },
  { category: 'AI & Automation', items: ['LLM Integration', 'Agentic AI', 'AWS Bedrock'] },
  { category: 'Tools',           items: ['Agile/Scrum', 'Jira', 'Confluence'] },
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
    title: 'Insurance Claims Automation ',
    tags: ['AWS Native', 'Confidence Scoring Agent', 'LLM Evaluation', 'Agentic AI'],
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