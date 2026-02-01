
import { NavItem, Project, Service, AboutPoint } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT ME', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'SERVICES', href: '#services' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Genomic Data Insights',
    description: 'A comprehensive analysis of transcriptomic variations in rare autoimmune disorders.',
    image: 'https://picsum.photos/seed/bio1/1200/800',
    location: 'Stanford Medicine - California',
    category: 'Bioinformatics Research',
    link: '#',
  },
  {
    title: 'Clinical Trial Narrative',
    description: 'Expert medical writing for a Phase III Oncology drug submission (FDA/EMA).',
    image: 'https://picsum.photos/seed/med1/1200/800',
    location: 'Global Pharma - London',
    category: 'Regulatory Writing',
    link: '#',
  },
  {
    title: 'Microbiome Mapping',
    description: 'Visualizing temporal changes in gut microflora during probiotic intervention.',
    image: 'https://picsum.photos/seed/bio2/1200/800',
    location: 'Zurich Biotech - Switzerland',
    category: 'Data Visualization',
    link: '#',
  },
  {
    title: 'Public Health Review',
    description: 'A systematic review on the efficacy of telemedicine in rural endocrine care.',
    image: 'https://picsum.photos/seed/med2/1200/800',
    location: 'WHO Initiative - Geneva',
    category: 'Medical Review',
    link: '#',
  },
];

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Medical Writing',
    description: 'High-quality manuscripts, clinical study reports (CSRs), and regulatory dossiers tailored for high-impact journals and health authorities.',
  },
  {
    id: '02',
    title: 'Bioinformatics Analysis',
    description: 'Pipeline development for NGS data processing, protein modeling, and statistical validation of biological datasets.',
  },
  {
    id: '03',
    title: 'Expert Consultation',
    description: 'Strategic advisory for digital health startups looking to bridge the gap between complex science and commercial communication.',
  },
];

export const ABOUT_POINTS: AboutPoint[] = [
  { id: 1, content: 'Over 8 years of specialized experience as a Medical Writer and Bioinformatics Analyst, bridging the gap between clinical data and clear communication.' },
  { id: 2, content: 'Authored over 40 peer-reviewed publications and clinical reports for leading healthcare institutions and pharmaceutical giants.' },
  { id: 3, content: 'Technical expertise in R, Python, and SQL for biological data mining, coupled with an MD/PhD background for scientific depth.' },
  { id: 4, content: 'Certified specialist in AMA and ICMJE reporting standards, ensuring regulatory compliance and ethical integrity in all documentation.' },
  { id: 5, content: 'Led data visualization projects for complex genomic datasets, making high-dimensional data accessible to multi-disciplinary teams.' },
  { id: 6, content: 'Expertise in translating technical bioinformatics findings into patient-centric narratives for medical affairs departments.' },
];
