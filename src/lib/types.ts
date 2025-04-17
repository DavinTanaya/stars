export interface ProjectDetails {
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  desc: string;
  image: string;
  details: ProjectDetails;
}