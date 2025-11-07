export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Hack the Vault',
    issuer: 'Hackathon/Competition',
    date: '2024',
    description: 'Successfully participated and demonstrated problem-solving skills in the Hack the Vault competition.',
    img: '/assets/Certificates/Hack the vault certificate.jpg',
    pdf: '/assets/Certificates/Hack the vault certificate.jpg',
  },
  {
    id: 2,
    title: 'Internshala Student Partner',
    issuer: 'Internshala',
    date: '2024',
    description: 'Served as an Internshala Student Partner, promoting internship opportunities and career development among students.',
    img: '/assets/Certificates/internshala student partner.jpg',
    pdf: '/assets/Certificates/internshala student partner.jpg',
  },
  {
    id: 3,
    title: 'Zero to One Certificate',
    issuer: 'Training Program',
    date: '2024',
    description: 'Completed comprehensive training program covering essential skills for building products from scratch.',
    img: '/assets/Certificates/zero to one certificate.jpg',
    pdf: '/assets/Certificates/zero to one certificate.jpg',
  },
  {
    id: 4,
    title: 'Zinnovio 3.0',
    issuer: 'Innovation Event',
    date: '2024',
    description: 'Participated in Zinnovio 3.0 innovation and technology event, showcasing creative solutions and technical expertise.',
    img: '/assets/Certificates/zinnovio 3.0 certificate.jpg',
    pdf: '/assets/Certificates/zinnovio 3.0 certificate.jpg',
  },
];

export const myProjects = [
  {
    title: 'RemedyEase - Healthcare Management Platform',
    desc: 'RemedyEase is a comprehensive healthcare management platform that connects patients with healthcare providers. It streamlines appointment booking, medical records management, and telemedicine consultations, making healthcare more accessible and efficient.',
    subdesc:
      'Built with React.js, Node.js, Express.js, and MongoDB, RemedyEase provides a seamless experience for both patients and healthcare providers with real-time updates and secure data management.',
    href: 'https://youtu.be/U8LPEvGrxqo',
    texture: '/textures/project/RemedyEase - Google Chrome 2025-11-06 12-52-22.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/node.js',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Express',
        path: '/assets/express.png',
      },
    ],
  },
  {
    title: 'MyPath - Competitive Exam Preparation Platform',
    desc: 'MyPath is an educational platform designed to help students from 8th grade to graduates prepare for competitive and olympiad exams. It offers comprehensive study materials, practice tests, and performance analytics to track progress.',
    subdesc:
      'Built with modern web technologies, MyPath provides an interactive learning experience with personalized study plans, mock tests, and detailed performance insights to help students excel in their exams.',
    href: 'https://youtu.be/ZD5CecxSj4o',
    texture: '/textures/project/frontend - Google Chrome 2025-11-07 21-56-49.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/node.js',
      },
    ],
  },
  {
    title: 'Teacher Management System',
    desc: 'A comprehensive Teacher Management System designed to streamline administrative tasks, manage student records, track attendance, handle assignments, and facilitate communication between teachers, students, and parents.',
    subdesc:
      'Built with a focus on efficiency and user experience, this system helps educational institutions manage their teaching staff, student data, grades, and scheduling with ease, enhancing overall productivity.',
    href: 'https://youtu.be/5AKnv7CXboI',
    texture: '/textures/project/SIH Teacher - Google Chrome 2025-11-07 21-52-43.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/node.js',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Express',
        path: '/assets/express.png',
      },
    ],
  },
  {
    title: '3D Portfolio - Interactive Personal Website',
    desc: 'A stunning 3D interactive portfolio website built with Three.js and React. Features immersive 3D animations, smooth transitions, and an engaging user experience that showcases projects and skills in a unique and memorable way.',
    subdesc:
      'Created with React Three Fiber, GSAP animations, and Tailwind CSS, this portfolio demonstrates advanced web development skills with 3D graphics, responsive design, and modern UI/UX principles.',
    href: 'https://youtu.be/V4kf6bcu0sE',
    texture: '/textures/project/RamitGoyal.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Figma',
        path: '/assets/figma.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/node.js',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Internshala',
    pos: 'Student Partner',
    duration: '2024',
    title: "Served as an Internshala Student Partner, promoting internship opportunities and career development among students. Successfully organized campus events and helped fellow students find valuable internship opportunities.",
    icon: '/assets/interns.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Hackathons',
    pos: 'Finalist & Winner',
    duration: '2023 - 2024',
    title: "Participated in 4+ hackathon finals, showcasing innovative solutions and technical expertise. Demonstrated strong problem-solving skills and ability to work under pressure in competitive environments.",
    icon: '/assets/hackathon.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Java Coding Challenge',
    pos: 'Winner',
    duration: '2024',
    title: "Won 2nd place in a competitive Java coding challenge, demonstrating strong programming fundamentals, algorithmic thinking, and efficient problem-solving abilities in Java.",
    icon: '/assets/award.avif',
    animation: 'salute',
  },
];

export const techStack = [
  {
    id: 1,
    name: 'React',
    path: '/assets/react.svg',
  },
  {
    id: 2,
    name: 'Node.js',
    path: '/assets/node.js',
  },
  {
    id: 3,
    name: 'Tailwind',
    path: '/assets/tailwindcss.png',
  },
  {
    id: 4,
    name: 'Express',
    path: '/assets/express.png',
  },
  {
    id: 5,
    name: 'MongoDB',
    path: '/assets/mongodb.png',
  },
  {
    id: 6,
    name: 'Figma',
    path: '/assets/figma.png',
  },
];

export const programmingLanguages = [
  {
    id: 1,
    name: 'C',
    path: '/assets/c.png',
  },
  {
    id: 2,
    name: 'C++',
    path: '/assets/c++.png',
  },
  {
    id: 3,
    name: 'Python',
    path: '/assets/python.png',
  },
  {
    id: 4,
    name: 'JavaScript',
    path: '/assets/javascript.webp',
  },
];

export const tools = [
  {
    id: 1,
    name: 'Git',
    path: '/assets/git.png',
  },
  {
    id: 2,
    name: 'GitHub',
    path: '/assets/github.svg',
  },
  {
    id: 3,
    name: 'VS Code',
    path: '/assets/vscode.png',
  },
  {
    id: 4,
    name: 'Docker',
    path: '/assets/docker.png',
  },
];
