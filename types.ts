
export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  location: string;
  category: string;
  link: string;
  content?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  link?: string;
}

export interface AboutPoint {
  id: number;
  content: string;
}
