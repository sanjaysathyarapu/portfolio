export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  codeUrl?: string;
  /** Shown when no public links are available (e.g. enterprise work). */
  note?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  dates: string;
}

export interface SeoConfig {
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  ogImage: string;
}

export interface PortfolioData {
  seo: SeoConfig;
  nav: NavLink[];
  hero: {
    name: string;
    title: string;
    pitch: string;
    availability: string;
    cvPath: string;
    social: SocialLink[];
  };
  about: {
    bio: string;
    stats: Stat[];
  };
  projects: Project[];
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  contact: {
    email: string;
    phone: string;
    heading: string;
    subheading: string;
    social: SocialLink[];
    footerText: string;
  };
}
