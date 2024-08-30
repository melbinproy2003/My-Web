import img1 from './Images/E-Hospitality.png';
import img2 from './Images/Book-Hub.webp';
import img3 from './Images/Tourist-destinations.jpeg';
import img4 from './Images/ED-Book.jpeg';
import img5 from './Images/Baby-Care.png';
import img6 from './Images/python internship.png';
import img7 from './Images/clound computing.png';
import img8 from './Images/python programming.png';
import img9 from './Images/jsp+android.png';

// listing my skills here
const skills = [
    'html', 'css', 'javascript', 'mysql', 'php', 'laravel', 'python', 'django', 'androidstudio', 'react', 'azure',
];

// Listing my career goals here
const timelineData = [
    {
      year: "05/2024",
      title: "Bachelor of Computer Applications",
      description: "Completed my degree from MG-University.",
    },
    {
      year: "04/2024",
      title: "Python Full Stack Developer Intern",
      description: "Completed 3 month Internship from Inmakes Infotech.",
    },
    {
      year: "04/2024",
      title: "JSP + Android",
      description: "Completed a project using JSP + Android.",
    },
    {
      year: "05/2023",
      title: "Python Programming",
      description: "Completed course from GITH GLOBAL INDIA TECHNO HUB.",
    },
    {
      year: "04/2022",
      title: "CLOUD COMPUTING & CYBER SECURITY",
      description: "Completed course from GITH GLOBAL INDIA TECHNO HUB.",
    },
    {
      year: "03/2021",
      title: "HIGHER SECONDARY EDUCATION",
      description: "Completed my secondary education from EBENEZER HIGHER SECONDARY SCHOOL.",
    },
  ];

// Listing my Projects here
const projects = [
    {
        title: 'E-Hospitality',
        sub: 'Python Django',
        description: 'E-Hospitality is a comprehensive healthcare management system developed using Python and Django. It streamlines various administrative, clinical, and patient-related tasks to enhance the efficiency and effectiveness of healthcare services.',
        image: img1,
        link: 'https://github.com/melbinproy2003/E-Hospitality',
    },
    {
        title: 'Book-Hub',
        sub: 'python Django, React.js',
        description: 'Book Hub is a web application designed to facilitate efficient and organized library operations. The project utilizes Python Django for the backend and React.js for the frontend.',
        image: img2,
        link: 'https://github.com/melbinproy2003/Book-Hub',
    },
    {
        title: 'Tourist Destinations',
        sub: 'python Django, REST framework',
        description: 'A web application that helps users discover popular tourist destinations.',
        image: img3,
        link: 'https://github.com/melbinproy2003/Tourist-destinations',
    },
    {
        title: 'ED Book',
        sub: 'JSP + Android',
        description: 'ED-Book is a web application designed to facilitate transparent communication within educational institutions and their communities. It provides real-time updates and notifications, centralizing information to enrich the educational experience and foster a more connected learning environment.',
        image: img4,
        link: 'https://github.com/melbinproy2003/ED-Book',
    },
    {
        title: 'Baby Care',
        sub: 'PHP',
        description: 'Baby Care is a web application is designed to help parents manage and monitor baby care routines efficiently. The project leverages technologies like PHP, HTML, CSS, and MySQL to provide a comprehensive and user-friendly platform.',
        image: img5,
        link: 'https://github.com/melbinproy2003/Baby-care',
    },
];

// Listing my Achievements here
const achievements = [
    { img: img6, details: 'Completed 3 month Internship from INMAKES INFOTECH.' },
    { img: img7, details: 'Completed Cloud computing and Cyber Security course from GLOBAL INDIA TECHNO HUB' },
    { img: img8, details: 'Completed Python Programming course from GLOBAL INDIA TECHNO HUB' },
    { img: img9, details: 'Completed JSP + ANDROID course from PROGRESSIVE SOFTWARE SOLUTIONS AND TRAINING' },
  ];

export { skills, timelineData, projects, achievements };
