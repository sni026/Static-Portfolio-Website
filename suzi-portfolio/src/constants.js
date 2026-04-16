import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'
import emailIcon from './assets/email.png'

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

export const NAME = 'Suzi Ni';
export const SUBTITLE = 'Graduate Developer';
export const BIO = `I speak both languages: business and code. 
With a background in ERP consulting and full-stack development across React, Node.js, and AWS, I build software that solves the right problem. Currently finishing my Master's in IT at the University of Auckland and ready for what's next. 
Let's build something meaningful.`;
export const LOCATION = 'Based in Auckland, NZ';
export const ABOUT_ME = `My path into development started with a question I couldn't stop asking: what's actually happening behind the system?
As an ERP consultant, I spent years bridging business and technology, but every time I walked out of a meeting with developers, I left wanting to understand what they were actually doing. So I went back to university, pursued my MIT, and started developing. I fell in love with it. Not just the coding itself, but the whole nature of it — there's always something new to learn, always a harder problem waiting. That never gets old for me.
The more I got into it, the more I realized it wasn't a big leap from consulting at all. What I loved about that job was seeing technology actually solve a business problem. Turns out that's exactly what I love about building software too. Same instinct, different seat.
I'm a developer at heart, though what really pulls me is what's happening under the hood — understanding how systems are structured, why decisions were made, and how everything fits together. That's where I feel most at home.
What's different about me is that I've been on both sides of the table. I know how businesses think, where communication breaks down, and what it actually takes to build something that solves the right problem, not just a problem.`;
export const EXPERIENCE_SUBTITLE = `From configuring ERP systems for manufacturing clients to building full-stack web features and shaping Shopify storefronts — a through line of turning complex requirements into clean, working software.`;
export const EXPERIENCE = [
  {
    company: 'Datacom',
    role: 'Software Development Intern',
    period: 'Feb 2026 — Apr 2026',
    description:
    `Built full-stack features for a web portal including notification systems, admin tools, and automated feedback workflows. Worked in team across the full development lifecycle, from design documentation in Confluence to testing. Collaborated closely with team members to troubleshoot bugs, refine implementations, and improve code reusability.`,
    tags: ['React', 'Ruby on Rails', 'PostgreSQL', 'RESTful APIs', 'Sidekiq', 'Agile', 'Confluence', 'Jira', 'Full-Stack Development', 'Testing']  
  },
  {
    company: 'Infor',
    role: 'Associate ERP Consultant',
    period: 'Sept 2021 — Nov 2023',
    description:
    `Worked with manufacturing clients to gather requirements and configure ERP finance and supply chain modules, bridging the gap between stakeholders and development teams. Translated business needs into functional specs, produced structured documentation, and led UAT activities — from writing test cases to coordinating validation and resolving issues with stakeholders.`,
    tags: ['ERP', 'Business Analysis', 'Requirements Gathering', 'Functional Specifications', 'UAT', 'Test Case Development', 'Stakeholder Communication', 'Cross-team Collaboration']
  },
  {
    company: 'NZ Honey Group',
    role: "Marketing and Sales Assistant",
    period: 'May 2024 —  Present',
    description:
      `Customized Shopify theme templates using HTML and CSS to build product and promotional pages. Collaborated closely with marketing teams to align design decisions with brand standards, translating creative briefs into functional interfaces. Maintained product data accuracy across listings, descriptions, and media assets within the Shopify admin system.`,
    tags: ['HTML', 'CSS', 'Shopify', 'UI/UX', 'Cross-team Collaboration']  
  },
]