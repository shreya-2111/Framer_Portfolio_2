export const personalInfo = {
  name: 'Alex Rivera',
  title: 'Full-Stack Developer',
  tagline: 'I craft immersive digital experiences',
  bio: "I'm a passionate full-stack developer with 5+ years of experience building high-performance web applications. I specialize in React, Node.js, and creative 3D web experiences that push the boundaries of what's possible in the browser.",
  email: 'alex@example.com',
  location: 'San Francisco, CA',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  resumeUrl: '#',
}

export const skills = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Three.js / WebGL', level: 80, category: 'Creative' },
  { name: 'GSAP / Animations', level: 85, category: 'Creative' },
  { name: 'Node.js / Express', level: 88, category: 'Backend' },
  { name: 'PostgreSQL / MongoDB', level: 82, category: 'Backend' },
  { name: 'Docker / AWS', level: 75, category: 'DevOps' },
  { name: 'Figma / UI Design', level: 78, category: 'Design' },
]

export const projects = [
  {
    id: 1,
    title: 'Nebula Dashboard',
    description: 'A real-time analytics platform with 3D data visualizations, WebSocket updates, and AI-powered insights for enterprise teams.',
    tags: ['React', 'Three.js', 'Node.js', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Phantom Commerce',
    description: 'A headless e-commerce solution with immersive product previews, AR try-on features, and blazing-fast checkout flows.',
    tags: ['Next.js', 'Shopify', 'Three.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Orbit Social',
    description: 'A social platform for developers with real-time collaboration, code sharing, and integrated AI code review.',
    tags: ['React', 'GraphQL', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Pulse Finance',
    description: 'Personal finance tracker with ML-powered spending predictions, beautiful charts, and bank-grade security.',
    tags: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    github: '#',
    live: '#',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Vercel',
    period: '2023 — Present',
    description: 'Leading the development of Next.js-based enterprise products. Architected a component library used by 200+ internal teams. Improved Core Web Vitals scores by 40% across flagship products.',
    tech: ['React', 'TypeScript', 'Next.js', 'Rust'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Stripe',
    period: '2021 — 2023',
    description: 'Built and maintained payment infrastructure dashboards serving millions of merchants. Developed real-time fraud detection UI with WebSocket integration.',
    tech: ['React', 'Node.js', 'Go', 'PostgreSQL'],
  },
  {
    role: 'Frontend Developer',
    company: 'Figma',
    period: '2019 — 2021',
    description: 'Contributed to the canvas rendering engine and plugin ecosystem. Implemented WebGL-based performance optimizations that reduced render time by 60%.',
    tech: ['TypeScript', 'WebGL', 'Rust', 'React'],
  },
]
