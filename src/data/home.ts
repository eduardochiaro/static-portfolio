export const homeData = {
  hero: {
    name: 'Alex Coder',
    title: 'Full Stack Developer',
    slogan: 'Building scalable web applications with modern tools and technologies.',
  },
  bio: [
    "Hi, I'm Full Stack Developer who loves building things that work well and make life easier. I've spent years turning ideas into reliable, thoughtful software, always with a focus on clean code, clear goals, and real-world impact. I enjoy working on projects where I can simplify complexity and bring a calm, practical mindset to solving tough problems.",
    "I'm most at home working across the stack with tools like Node.js, TypeScript, React, and PHP, often in cloud environments like AWS. Beyond the code, I care about good communication, collaboration, and keeping things human—even in tech. Whether I'm refining a backend system or improving a user experience, I aim to build software that's not just functional, but genuinely useful.",
  ],
  projects: [
    {
      title: "It's Nothing",
      description: 'Pebble Watchface',
      imageUrl: 'https://cdn.eduardochiaro.com/NEyK9K09gttTsXtoq7N6_.png',
      buttonText: 'Get it on Pebble',
      buttonUrl: 'https://project-url.com',
      isDownload: false,
    },
    {
      title: 'Impact (v2.0.0)',
      description: 'Ghost blog theme using TailwindCSS',
      imageUrl: 'https://cdn.eduardochiaro.com/impact.png',
      buttonText: 'View on GitHub',
      buttonUrl: 'https://project-url.com',
      isDownload: false,
    },
    {
      title: 'CompactLine',
      description: 'Oh My Zsh theme',
      imageUrl: 'https://cdn.eduardochiaro.com/compactline.png',
      buttonText: 'View on GitHub',
      buttonUrl: '/path/to/resume.pdf',
      isDownload: true,
    },
  ],
  skills: [
    {
      name: 'React',
      level: 'Advanced',
      percentage: 85,
    },
    {
      name: 'Node.js',
      level: 'Intermediate',
      percentage: 70,
    },
    {
      name: 'Python',
      level: 'Advanced',
      percentage: 90,
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      percentage: 80,
    },
    {
      name: 'CSS',
      level: 'Intermediate',
      percentage: 75,
    },
    {
      name: 'HTML',
      level: 'Advanced',
      percentage: 95,
    },
  ],
  footer: {
    text: 'Made with ♥',
    links: [
      {
        text: 'me@alexcoder.com',
        url: 'mailto:me@alexcoder.com',
      },
      {
        text: 'github.com/alexcoder',
        url: 'https://github.com/alexcoder',
      },
    ],
  },
  github: [
    {
      name: 'API Gateway',
      link: 'https://github.com/randomuser/api-gateway',
      description: 'A high-performance Node.js API gateway with authentication, rate limiting, and request transformations.',
      tags: ['Node.js', 'Express', 'JWT'],
    },
    {
      name: 'GraphQL API',
      link: 'https://github.com/randomuser/graphql-api',
      description: 'A GraphQL API built with Apollo Server, providing a flexible and efficient data fetching layer.',
      tags: ['GraphQL', 'Apollo Server', 'Node.js'],
    },
    {
      name: 'Real-time Chat App',
      link: 'https://github.com/randomuser/real-time-chat',
      description: 'A real-time chat application using WebSockets for instant messaging and notifications.',
      tags: ['WebSockets', 'Node.js', 'React'],
    },
  ],
} as const;
