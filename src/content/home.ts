export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#cta' }
];

export const heroContent = {
  eyebrow: 'Digital Product Agency',
  heading: 'We design and build websites that convert.',
  body: 'Velcod helps ambitious teams ship fast, polished web experiences through strategy, design, and engineering in one streamlined workflow.',
  primaryCta: 'Start a project',
  secondaryCta: 'View our work',
  metrics: [
    { label: 'Projects shipped', value: '120+' },
    { label: 'Avg. conversion lift', value: '32%' },
    { label: 'Client satisfaction', value: '98%' }
  ]
};

export const servicesContent = {
  heading: 'Services built for modern teams',
  body: 'From idea validation to launch-day support, our specialists plug into your workflow and accelerate outcomes.',
  items: [
    {
      title: 'Brand & UX Design',
      description: 'Interface systems, responsive prototypes, and conversion-first visual language.'
    },
    {
      title: 'Web Development',
      description: 'High-performance React builds with SEO, accessibility, and analytics baked in.'
    },
    {
      title: 'Growth Optimization',
      description: 'A/B testing, funnel instrumentation, and data-informed iteration cycles.'
    }
  ]
};

export const processContent = {
  heading: 'A clear process from kickoff to growth',
  body: 'We keep momentum high with weekly deliverables and transparent communication.',
  steps: [
    { title: 'Discover', text: 'Stakeholder interviews, audits, and roadmap alignment.' },
    { title: 'Design', text: 'Wireframes and polished UI crafted around real user journeys.' },
    { title: 'Develop', text: 'Component-driven implementation with fast QA feedback loops.' },
    { title: 'Launch', text: 'Performance checks, deployment, and post-launch support.' }
  ]
};

export const portfolioContent = {
  heading: 'Selected case studies',
  body: 'A snapshot of recent partnerships across SaaS, ecommerce, and B2B services.',
  projects: [
    { name: 'Northline SaaS', result: '+45% demo signups', image: '/images/portfolio-northline.svg' },
    { name: 'Luma Commerce', result: '+28% revenue per session', image: '/images/portfolio-luma.svg' },
    { name: 'Atlas Health', result: '2x faster lead qualification', image: '/images/portfolio-atlas.svg' }
  ]
};

export const testimonialsContent = {
  heading: 'Trusted by scaling teams',
  body: 'Clients value our speed, collaborative communication, and measurable outcomes.',
  items: [
    {
      quote: 'Velcod transformed our outdated site into a growth engine in under eight weeks.',
      author: 'Maya Chen',
      role: 'CMO, Northline'
    },
    {
      quote: 'Their process was incredibly structured while still leaving room for creativity.',
      author: 'Ravi Patel',
      role: 'Founder, Luma Commerce'
    }
  ]
};

export const ctaContent = {
  heading: 'Ready to launch your next high-performing website?',
  body: 'Tell us your goals and timeline—we will propose a practical plan within two business days.',
  primaryCta: 'Book a strategy call',
  secondaryCta: 'Email our team'
};

export const footerContent = {
  brand: 'Velcod',
  blurb: 'Designing and shipping digital experiences that help teams grow with confidence.',
  copyright: `© ${new Date().getFullYear()} Velcod. All rights reserved.`
};
