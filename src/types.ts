
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  type: 'DevOps' | 'MLOps' | 'Fullstack';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certificate {
  name: string;
}
