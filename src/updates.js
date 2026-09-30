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
    subtitle: 'Omnichannel Auto Detailing, Field Fleet & Workforce Operations Platform',
    description:
      'An enterprise multi-tenant fleet care and detailing platform featuring PostGIS geofenced attendance, offline-first mobile job cards with photo auditing, cash custody tracking, and statutory payroll.',
    tech: ['Flutter', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Redis', 'Celery', 'AWS S3', 'Firebase', 'Docker'],
    badge: 'Professional Project • Confidential',
    isConfidential: true,
    category: 'professional',
    role: 'Mobile & Full Stack Software Developer',
    projectType: 'Enterprise / Professional Production Project',
    overview:
      'A production-grade, multi-tenant automotive detailing and fleet care operations management ecosystem. Connects customer digital bookings with field technician apps, featuring geodesic PostGIS geofenced attendance, hardware device-binding, offline SQLite job execution with media spooling, mandatory visual pre-wash damage auditing, cash handover custody verification, and an Indian statutory payroll engine.',
    contributions: [
      'Engineered geodesic geofenced attendance verification using PostGIS spatial algorithms to eliminate proxy clock-ins',
      'Developed offline-first mobile field architecture with local SQLite queue and AWS S3 media spooling for basement dead zones',
      'Implemented mandatory pre-wash visual condition auditing and supervisory QA gates to prevent vehicle damage disputes',
      'Architected verifiable cash handover chain-of-custody tracking with discrepancy detection between technicians and supervisors',
      'Built multi-tier milestone and volume commission engine tracking daily and monthly technician incentive earnings',
      'Engineered hardware device-binding security with administrative approval workflows to prevent credential sharing',
      'Developed statutory payroll engine calculating EPF, ESI, PT, LWF, and dual-regime income tax TDS with salary advance EMI recovery',
      'Integrated multi-channel communications leveraging WhatsApp Business Cloud API, DLT-compliant AWS SNS, and Firebase push notifications',
      'Built double-entry financial ledger accounting supporting cash, UPI, card, and split-payment reconciliations',
      'Developed unified web admin console and customer booking portal using React, TypeScript, and Tailwind CSS',
      'Configured asynchronous Celery and Redis task workers for payroll runs, report generation, and background sync reconciliation',
      'Designed high-performance asynchronous REST APIs with FastAPI, asyncpg connection pooling, and role-based access control',
    ],
    technicalHighlights: [
      'PostGIS geodesic geofenced attendance & proximity validation',
      'Offline-first mobile subsystem with SQLite & S3 media spooling',
      'Verifiable cash handover chain of custody & ledger reconciliation',
      'Hardware device-binding security & admin approval workflow',
      'Automated Indian statutory payroll & dual-regime tax calculations',
      'FastAPI async backend with Celery queues & multi-role RBAC',
    ],
  },
  {
    id: 'prof-3',
    title: 'E-Commerce & Product Management Platform',
    subtitle: 'Specialized Enterprise E-Commerce, 3D Visualizer & ERP Platform',
    description:
      'A full-stack enterprise e-commerce and ERP platform engineered for specialized home improvement retail, featuring 3D WebGL room planning, AI floor segmentation, atomic stock reservation, and distance-based freight logistics.',
    tech: ['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'Three.js', 'Redis', 'Celery', 'MeiliSearch', 'Stripe', 'Docker'],
    badge: 'Professional Project • Confidential',
    isConfidential: true,
    category: 'professional',
    role: 'Full Stack Software Developer',
    projectType: 'Enterprise / Professional Production Project',
    overview:
      'A specialized, production-ready enterprise digital commerce and ERP system designed for complex dimension-based retail. Combines a Next.js storefront and FastAPI backend with interactive 3D WebGL room planning, serverless GPU floor segmentation, 25+ tool-calling conversational AI, MeiliSearch catalog search, atomic inventory reservation, distance-matrix heavy freight logistics, and complete supplier purchase order workflows.',
    contributions: [
      'Developed specialized dimension-to-pack calculation engine automating room area, wastage overhead, and accessory matching',
      'Integrated interactive 3D WebGL room planner using Three.js and serverless GPU semantic floor segmentation pipeline',
      'Engineered atomic zero-oversell stock reservation system leveraging Redis distributed locks and PostgreSQL transactions',
      'Implemented multi-tier freight logistics engine with Google Maps Distance Matrix API for road mileage shipping calculations',
      'Architected high-performance product catalog with MeiliSearch for sub-millisecond typo-tolerant faceted filtering',
      'Integrated conversational AI assistant with 25+ autonomous operational tools for live stock checks, quotes, and order tracking',
      'Developed end-to-end checkout with Stripe Elements, Apple/Google Pay, and idempotent webhook payment processing',
      'Built trade contractor quote and free physical sample ordering workflows with lightweight fulfillment tracking',
      'Developed photographic return dispute system allowing customers to submit visual evidence for admin refund reviews',
      'Created admin ERP portal for multi-warehouse stock management, supplier PO generation, and Excel/PDF export',
      'Built omnichannel social campaign publishing module integrating Meta Graph API for Facebook and Instagram',
      'Configured asynchronous Celery and Redis workers for background PDF invoice rendering, emails, and reporting',
    ],
    technicalHighlights: [
      'Interactive 3D WebGL room planner & serverless GPU floor visualizer',
      'Automated dimension-to-pack math & accessory recommendation engine',
      'Atomic zero-oversell stock reservation with Redis & PostgreSQL',
      'Sub-millisecond faceted catalog search powered by MeiliSearch',
      'Distance matrix freight logistics & heavy pallet delivery engine',
      'FastAPI async microservice backend with Celery background workers',
    ],
  },
  {
    id: 'prof-4',
    title: 'GendocX',
    subtitle: 'Autonomous AI Document Intelligence & Knowledge Graph Platform',
    description:
      'An enterprise-grade autonomous AI document intelligence and operations platform featuring hybrid vector retrieval, Apache AGE knowledge graphs, Collabora Online editing, and sandboxed document generation.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Apache AGE', 'Qdrant', 'Collabora Online', 'Celery', 'Redis', 'LiveKit', 'Docker'],
    badge: 'Professional Project • Confidential',
    isConfidential: true,
    category: 'professional',
    role: 'Full Stack & AI Software Developer',
    projectType: 'Enterprise / Professional Production Project',
    overview:
      'An enterprise AI document intelligence, knowledge graph, and operations platform that transforms unstructured business documents into structured knowledge. Features hybrid semantic search, persistent graph-based obligation tracking, real-time WebRTC voice interaction, sandboxed programmatic document generation, and in-browser collaborative editing via WOPI.',
    contributions: [
      'Engineered layout-aware document ingestion pipelines with OCR, Docling parsers, and SimHash deduplication',
      'Integrated Apache AGE on PostgreSQL to construct knowledge graphs mapping contracts, entities, and obligations',
      'Built hybrid search combining Qdrant dense vectors, sparse keyword indexing, RRF, and cross-encoder re-ranking',
      'Implemented custom FastAPI WOPI protocol to integrate Collabora Online for in-browser Office document editing',
      'Developed sandboxed Python document generation engine with autonomous LLM self-repair and visual QA verification',
      'Integrated real-time WebRTC voice assistant leveraging LiveKit, Deepgram STT/TTS, and tool-calling agent pipelines',
      'Built automated meeting intelligence bots for call recording, transcription, action-item extraction, and follow-ups',
      'Developed visual DAG workflow engine with natural language workflow synthesis and human-in-the-loop approvals',
      'Built multi-tenant cloud connectors for Google Workspace, Microsoft 365, Slack, Jira, and external databases',
      'Designed FastMCP server exposing organizational search and document retrieval to external AI assistants',
      'Architected asynchronous background task processing using Celery and Redis across dedicated worker queues',
      'Implemented multi-tenant JWT security, role-based access control (RBAC), and Fernet-encrypted credential storage',
    ],
    technicalHighlights: [
      'Hybrid Qdrant vector search & Apache AGE knowledge graph',
      'Collabora Online in-browser editing via custom WOPI implementation',
      'Sandboxed Python document generation with autonomous self-repair',
      'Real-time WebRTC voice agent with LiveKit & Deepgram STT/TTS',
      'Distributed Celery task queues for ingestion & workflow DAGs',
      'FastAPI async backend with PostgreSQL, Redis & MinIO S3 storage',
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
