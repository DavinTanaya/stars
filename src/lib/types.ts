export interface ProjectMetrics {
  [key: string]: string;
}

export interface ProjectDetails {
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  metrics: ProjectMetrics;
}

export interface Project {
  id: string;
  title: string;
  desc: string;
  image: string;
  details: ProjectDetails;
}