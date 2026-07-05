export interface Project {
  id: number;
  title: string;
  desc: string;
  demo: string;
  repo: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}
