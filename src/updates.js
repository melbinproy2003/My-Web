import img1 from './Images/E-Hospitality.png';
import img2 from './Images/Book-Hub.webp';
import img3 from './Images/Tourist-destinations.jpeg';
import img4 from './Images/ED-Book.jpeg';
import img5 from './Images/Baby-Care.png';

export const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'React', icon: 'react' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'Django', icon: 'django' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'PHP', icon: 'php' },
      { name: 'Laravel', icon: 'laravel' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    skills: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'React Native', icon: 'react' },
      { name: 'Android Studio', icon: 'androidstudio' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & ML',
    skills: [
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'LangChain', icon: 'langchain' },
      { name: 'OpenAI API', icon: 'openai' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Azure', icon: 'azure' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: 'Master of Computer Applications (MCA) – Cybersecurity',
    company: 'Amity University',
    duration: '2026 – Present (Expected 2028)',
    type: 'Education',
    current: true,
    points: [
      'Specializing in Cybersecurity, network defense, application security, and ethical hacking principles',
      'Studying cloud security, cryptography, and secure software development lifecycles',
      'Pursuing advanced postgraduate degree alongside professional AI engineering work',
    ],
  },
  {
    id: 2,
    role: 'Junior AI Engineer',
    company: 'Phi-Intelligence',
    duration: 'Dec 2025 – Present',
    type: 'Full Time',
    current: true,
    points: [
      'Developing AI-powered client mobile applications',
      'Integrating LLM capabilities into cross-platform mobile apps using LangChain and OpenAI',
      'Collaborating with clients to design and deliver intelligent AI-driven solutions',
    ],
  },
  {
    id: 3,
    role: 'Junior Software Developer',
    company: 'Triangle Software Solutions',
    duration: 'Apr 2025 – Nov 2025',
    type: 'Full Time',
    current: false,
    points: [
      'Built and maintained full-stack web and mobile applications',
      'Worked across frontend and backend development using modern frameworks',
      'Delivered client-facing software solutions in an agile team environment',
    ],
  },
  {
    id: 4,
    role: 'Python Full Stack Developer Intern',
    company: 'Inmakes Infotech',
    duration: 'Jan 2024 – Apr 2024',
    type: 'Internship',
    current: false,
    points: [
      'Completed intensive 3-month Python full stack development internship',
      'Built web applications using Python, Django, and React',
      'Gained hands-on experience in REST API development and database management',
    ],
  },
  {
    id: 5,
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'MG University',
    duration: '2021 – 2024',
    type: 'Education',
    current: false,
    points: [
      'Graduated with a strong foundation in computer science and software development',
      'Focused on data structures, algorithms, and web development',
      'Completed practical projects across Python, Java, and web technologies',
    ],
  },
];

export const professionalProjects = [
  {
    id: 'prof-1',
    title: 'Multi-Tenant HR & Payroll Management Platform',
    subtitle: 'Enterprise HR, Workforce & Payroll Management System',
    description:
      'A multi-tenant enterprise management platform designed to manage HR operations, employees, attendance, shifts, payroll, finance, geofencing, permissions, and organization-level data across multiple companies.',
    tech: ['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Redis', 'Celery', 'Docker', 'AWS'],
    badge: 'Professional Project • Confidential',
    isConfidential: true,
    category: 'professional',
    role: 'Software Developer',
    projectType: 'Enterprise / Professional Production Project',
    overview:
      'A multi-tenant enterprise management platform designed to manage HR operations, employees, attendance, shifts, payroll, finance, geofencing, permissions, and organization-level data across multiple companies.',
    contributions: [
      'Developed and maintained multi-tenant architecture with tenant-based data isolation',
      'Worked on employee and HR management modules',
      'Implemented attendance check-in, checkout, break-in and break-out workflows',
      'Developed shift, branch, department and designation management',
      'Worked on payroll generation and salary calculation workflows',
      'Implemented employee finance features including bonuses, fines, advances and increments',
      'Worked on geofence-based functionality using PostGIS',
      'Implemented role-based access control and custom role hierarchy',
      'Worked on authentication and SSO integrations',
      'Developed and integrated REST APIs',
      'Fixed frontend, backend and database issues in production',
      'Worked on admin dashboards and management workflows',
      'Worked with Docker and cloud deployment infrastructure',
    ],
    technicalHighlights: [
      'Multi-tenant schema & tenant-based data isolation',
      'Geofencing & location verification via PostGIS',
      'Asynchronous task processing with Redis & Celery',
      'Payroll generation & complex finance calculation workflows',
      'Role-based access control & custom role hierarchy',
    ],
  },
  {
    id: 'prof-2',
    title: 'Car Wash Management Platform',
    subtitle: 'Workforce, Job & Service Management Platform',
    description:
      'A production platform for managing car wash operations, workers, jobs, teams, supervisors, service workflows, location tracking, notifications, payroll and administrative operations.',
    tech: ['React Native', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'PostGIS', 'Firebase', 'Docker', 'AWS'],
    badge: 'Professional Project • Confidential',
    isConfidential: true,
    category: 'professional',
    role: 'Software Developer (Mobile & Backend Integration)',
    projectType: 'Enterprise / Professional Production Project',
    overview:
      'A production platform for managing car wash operations, workers, jobs, teams, supervisors, service workflows, location tracking, notifications, payroll and administrative operations.',
    contributions: [
      'Developed mobile application functionality for workers',
      'Implemented job creation and assignment workflows',
      'Worked on worker, supervisor, manager and admin roles',
      'Implemented location tracking and geofencing',
      'Worked on background location tracking',
      'Implemented job/service management workflows',
      'Worked on team and shift assignment',
      'Integrated push notifications',
      'Worked on payroll and finance modules',
      'Developed and maintained admin dashboard functionality',
      'Integrated frontend applications with FastAPI APIs',
      'Debugged Android production and build issues',
      'Worked on AWS/cloud deployment and production issues',
    ],
    technicalHighlights: [
      'Background location tracking & PostGIS geofencing',
      'Worker mobile application in React Native & TypeScript',
      'Firebase Cloud Messaging push notification system',
      'Team & shift assignment workflows with worker roles',
      'AWS cloud deployment & production issue resolution',
    ],
  },
  {
    id: 'prof-3',
    title: 'E-Commerce & Product Management Platform',
    subtitle: 'Product, Variant, Inventory & Commerce Management System',
    description:
      'A production e-commerce platform with advanced product management, product variants, inventory, pricing, quotation/sample workflows and administrative operations.',
    tech: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Docker', 'AWS'],
    badge: 'Professional Project • Confidential',
    isConfidential: true,
    category: 'professional',
    role: 'Software Developer (Full Stack)',
    projectType: 'Enterprise / Professional Production Project',
    overview:
      'A production e-commerce platform with advanced product management, product variants, inventory, pricing, quotation/sample workflows and administrative operations.',
    contributions: [
      'Developed product management workflows',
      'Implemented product variant management',
      'Worked on SKU and product image management',
      'Implemented inventory and stock-related workflows',
      'Worked on product pricing and tax functionality',
      'Developed quote and sample request workflows',
      'Worked on product detail and product showcasing UI',
      'Improved admin panel usability',
      'Fixed product and variant business logic issues',
      'Integrated APIs between frontend and backend',
      'Worked on payment and POS-related functionality',
      'Improved responsive UI and user experience',
    ],
    technicalHighlights: [
      'Advanced product variant & SKU management engine',
      'Inventory & stock-related real-time tracking workflows',
      'Quote and sample request lifecycle management',
      'Integrated payment & POS-related functionality',
      'FastAPI REST API integration with React/Next.js UI',
    ],
  },
  {
    id: 'prof-4',
    title: 'GendocX',
    subtitle: 'Collaborative Document Management Platform',
    description:
      'A web-based document management and collaboration platform designed to help users create, edit, manage, and collaborate on business documents through a centralized workspace.',
    tech: ['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'Collabora Online', 'Docker', 'AWS'],
    badge: 'Professional Project • Confidential',
    isConfidential: true,
    category: 'professional',
    role: 'Software Developer',
    projectType: 'Enterprise / Professional Production Project',
    overview:
      'A web-based document management and collaboration platform designed to help users create, edit, manage, and collaborate on business documents through a centralized workspace.',
    contributions: [
      'Worked on document creation and management workflows',
      'Implemented and improved document editing functionality',
      'Integrated Collabora Online for document editing',
      'Worked on document collaboration and sharing workflows',
      'Developed and integrated REST APIs',
      'Worked on frontend and backend feature implementation',
      'Improved document-related UI and user experience',
      'Debugged and resolved integration and production issues',
      'Worked on authentication and user access workflows',
      'Improved existing modules and business logic',
      'Worked with containerized services and deployment environments',
    ],
    technicalHighlights: [
      'Collabora Online document editing integration',
      'Document collaboration & sharing workflows',
      'REST API development with FastAPI & Next.js/React',
      'User authentication & role access controls',
      'Containerized deployment with Docker & AWS',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-Hospitality',
    description:
      'A comprehensive healthcare management system built with Python Django. Streamlines patient management, appointment scheduling, and medical records.',
    tech: ['Python', 'Django', 'MySQL', 'HTML', 'CSS'],
    image: img1,
    github: 'https://github.com/melbinproy2003/E-Hospitality',
    live: null,
  },
  {
    id: 2,
    title: 'Book-Hub',
    description:
      'A full-stack library management system combining a Django backend with a React frontend. Features book cataloging, user management, and borrowing tracking.',
    tech: ['Django', 'React', 'MySQL', 'REST API'],
    image: img2,
    github: 'https://github.com/melbinproy2003/Book-Hub',
    live: null,
  },
  {
    id: 3,
    title: 'Tourist Destinations',
    description:
      'A Django REST API-powered application for discovering and exploring tourist destinations, with location-based search and detailed destination info.',
    tech: ['Django', 'REST API', 'Python', 'MySQL'],
    image: img3,
    github: 'https://github.com/melbinproy2003/Tourist-destinations',
    live: null,
  },
  {
    id: 4,
    title: 'ED Book',
    description:
      'An educational communication platform bridging a JSP web backend with an Android mobile frontend, enabling students and educators to collaborate in real time.',
    tech: ['JSP', 'Android Studio', 'Java', 'MySQL'],
    image: img4,
    github: 'https://github.com/melbinproy2003/ED-Book',
    live: null,
  },
  {
    id: 5,
    title: 'Baby Care',
    description:
      'A PHP-based baby care management system for tracking infant health, feeding schedules, and growth milestones.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: img5,
    github: 'https://github.com/melbinproy2003/Baby-care',
    live: null,
  },
];

export const personalProjects = projects;
