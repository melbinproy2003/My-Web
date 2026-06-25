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
    id: 2,
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
    id: 3,
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
    id: 4,
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
