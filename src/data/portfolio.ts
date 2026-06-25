import type { PortfolioData } from "@/types/portfolio";

/**
 * Single source of truth for all portfolio content.
 * Search for "EDIT:" to find fields you may want to update later.
 */
export const portfolio: PortfolioData = {
  seo: {
    siteTitle: "Sanjay Sathyarapu — Full Stack Software Engineer",
    siteDescription:
      "Full Stack Software Engineer with 4+ years building production systems at Goldman Sachs, Tech Mahindra, and Hexaware. Spring Boot, AWS, Kubernetes, and LangChain RAG pipelines.",
    siteUrl: "https://portfolio-sanjaysathyarapu.vercel.app",
    ogImage: "/og-image.svg",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    name: "Sanjay Sathyarapu",
    title: "Full Stack Developer",
    roles: [
      "Full Stack Developer",
      "Software Engineer",
      "AI Engineer",
      "Backend Engineer",
    ],
    pitch:
      "I build software that works in the real world — backend systems, cloud infrastructure, and lately AI that helps people find what they need faster. I care about writing clear code and shipping things that are actually useful.",
    availability: "Open to new opportunities",
    cvPath: "/Sanjay-Sathyarapu.pdf",
    social: [
      { label: "GitHub", href: "https://github.com/sanjaysathyarapu" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sanjay-sathyarapu/",
      },
    ],
  },

  about: {
    bio: "Full Stack Software Engineer with 4+ years of experience building and shipping production systems at Goldman Sachs, Tech Mahindra, and Hexaware. I work mostly with Spring Boot, AWS, and Kubernetes to build microservices that handle production traffic. Recently I've been diving into LangChain and RAG pipelines to help traders search through market data. Based in California, I care about clean code, system performance, and building stuff people want to use.",
    stats: [
      { label: "Years experience", value: "4+" },
      { label: "Companies", value: "3" },
      { label: "Full-stack + AI systems", value: "RAG · LLM · Cloud" },
    ],
  },

  projects: [
    {
      title: "ClearCall",
      description:
        "AI-powered voice complaint system with speech-to-text transcription and automated response generation. Built a full-stack platform with JWT authentication, AWS S3 file storage, and a responsive React dashboard for processing customer voice submissions.",
      techStack: [
        "React",
        "TypeScript",
        "Flask",
        "MySQL",
        "AWS S3",
        "OpenAI",
        "Tailwind CSS",
      ],
      codeUrl: "https://github.com/RavirajWadnerkar/ClearCall",
    },
    {
      title: "LieSense Checker",
      description:
        "Web application for license validation and verification workflows. Built with JavaScript to streamline compliance checks and provide a clear interface for reviewing license status and related metadata.",
      techStack: ["JavaScript", "HTML", "CSS"],
      codeUrl: "https://github.com/sanjaysathyarapu/LieSenseChecker",
    },
    {
      title: "LangChain RAG Trading Search",
      description:
        "Integrated LangChain RAG pipelines with OpenAI embeddings into trading APIs using PostgreSQL with pgvector for vector storage. Delivered 85% relevance semantic search over 10TB+ of market data for internal trading teams.",
      techStack: [
        "LangChain",
        "OpenAI",
        "PostgreSQL",
        "pgvector",
        "Spring Boot",
        "AWS",
      ],
      note: "Enterprise project — not publicly available",
    },
    {
      title: "Real-time LLM Chat Interface",
      description:
        "Built real-time LLM chat interfaces with the Vercel AI SDK and tRPC for global trading teams. Handles 2–3K concurrent sessions at sub-300ms streaming latency alongside a Next.js 15 dashboard that improved load speed by 30%.",
      techStack: [
        "Next.js 15",
        "TypeScript",
        "Vercel AI SDK",
        "tRPC",
        "AWS EKS",
      ],
      note: "Enterprise project — not publicly available",
    },
  ],

  skills: [
    {
      category: "Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "Java (8–21)",
        "Python",
        "Go",
        "SQL",
        "PL/SQL",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js 15",
        "Angular",
        "Vue.js",
        "Tailwind CSS",
        "Vercel AI SDK",
        "tRPC",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Spring Boot",
        "Spring Cloud",
        "Node.js",
        "Express",
        "FastAPI",
        "REST APIs",
        "GraphQL",
        "CQRS",
      ],
    },
    {
      category: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Oracle",
        "MongoDB",
        "Redis",
        "Snowflake",
      ],
    },
    {
      category: "Cloud / DevOps",
      skills: [
        "AWS (EC2, S3, Lambda, EKS)",
        "Azure AKS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Istio",
        "ArgoCD",
        "GitHub Actions",
        "Jenkins",
      ],
    },
  ],

  experience: [
    {
      title: "Full Stack Developer",
      company: "Goldman Sachs",
      dates: "Aug 2025 — Present",
      bullets: [
        "Engineered Spring Boot 3.x microservices processing 150K+ daily transactions, reducing API latency by 20–25% through caching and query optimization.",
        "Integrated LangChain RAG pipelines with OpenAI embeddings and pgvector, delivering 85% relevance semantic search over 10TB+ market data.",
        "Rebuilt trading dashboard with Next.js 15 and TypeScript, improving load speed by 30% for global teams.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Tech Mahindra",
      dates: "Jan 2021 — Jul 2023",
      bullets: [
        "Built Node.js/Express APIs serving 500K+ users, doubling throughput to 1,000 RPS with 99.9% uptime using PostgreSQL.",
        "Structured Terraform IaC across Azure AKS, reducing cloud spend by 20–25% ($80–100K savings) for 30+ microservices.",
        "Led 8-person Agile@Scale squads, delivering 25% more features per sprint and reducing defects by 40%.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Hexaware Technologies",
      dates: "Jan 2019 — Dec 2019",
      bullets: [
        "Developed Java Spring Boot REST APIs handling 100–150K daily requests with 99.9% uptime across Oracle and SQL Server databases.",
        "Automated CI/CD pipelines with Jenkins and Maven, reducing deployment cycles from 1 week to 2–3 days across 5–6 microservices.",
        "Built responsive Angular dashboards, improving user satisfaction scores by 20% for 2–3K internal users.",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Science in Software Engineering",
      school: "San Jose State University",
      location: "San Jose, CA",
      dates: "May 2025",
    },
  ],

  contact: {
    email: "sanjay@jobsmails.com",
    phone: "+1 (669) 588-7976",
    heading: "Always happy to connect",
    subheading: "Drop me a line - I reply quickly",
    social: [
      { label: "GitHub", href: "https://github.com/sanjaysathyarapu" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sanjay-sathyarapu/",
      },
    ],
    footerText: "© {year} Sanjay Sathyarapu. Built with Next.js.",
  },
};
