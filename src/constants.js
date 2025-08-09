// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/imp.png';

import newtonschoolLogo from './assets/company_logo/codeTech.png';

// Education Section Logo's
import rvmLogo from './assets/education_logo/rvm_logo.png';
import gtuLogo from './assets/education_logo/gtu_logo.png';
import pnLogo from './assets/education_logo/jp_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import userSystem from './assets/work_logo/userSystem.jpg';
import todo from './assets/work_logo/task_rem.png';
import food from './assets/work_logo/food.png';
import travel from './assets/work_logo/trvaling.png';
import wather from './assets/work_logo/wather.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Improwised Technologies",
      date: "September 2024 - March 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
   
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "CodeTech It Solution Pvt. Ltd",
      date: "March 2024 - August 2024",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
   
    {
      id: 1,
      img: gtuLogo,
      school: "Gujarat Technological University (GTU)",
      date: "Sept 2021 - Aug 2025",
      grade: "75.6%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Tech) from Gujarat Technological University . Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at GTU  allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 2,
      img: pnLogo,
      school: "PN Collage Parsa Saran ",
      date: "Apr 2018 - March 2020",
      grade: "58.8%",
      desc: "I completed my class 12 education from PN Collage Parsa Saran, under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: rvmLogo,
      school: "Rajendra Vidaya Mandir Maker Saran",
      date: "Apr 2017 - March 2018",
      grade: "60.3%",
      desc: "I completed my class 10 education from Rajendra Vidaya Mandir Maker Saran,, under the BSEB board, where I studied Science with .",
      degree: "BSEB,PATNA(X)- Science ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "UserManegmentSystem",
      description:
        "The User Management System is a secure and scalable web application designed to handle user-related operations such as registration, login, role-based access control, profile management, and password recovery. Built with modern backend and frontend technologies, it ensures efficient data handling, authentication, and user interaction.",
      image: userSystem,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/RaushanKumar606/UserManegmentSystem",
      webapp: "",
    },
    {
      id: 2,
      title: "TravelEase Stays",
      description:
        "A smart home booking platform designed for travelers, offering seamless and tech-savvy accommodation experiences.",
  image: travel,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "Telwind CSS", "JavaScript"],
      github: "https://github.com/RaushanKumar606/VentureVibes",
      webapp: "https://stately-sfogliatella-0dd300.netlify.app/",
    },
    {
      id: 3,
      title: "Weather Cast",
      description:
        "A web application that provides real-time weather updates using APIs, showcasing current conditions, forecasts, and more",
       image: wather,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/RaushanKumar606/Weather_App",
      webapp: "https://tiny-rugelach-d27a0d.netlify.app/",
    },

    {
      id: 4,
      title: "Enjoy Delicious Food",
      description:"A project designed to provide users with access to a wide variety of restaurant menus, reviews, and online reservation features.",
        image: food,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/RaushanKumar606/Delish_Dine",
      webapp: "https://666d34c70c30bb9b5823694f--fancy-clafoutis-c8e33b.netlify.app/",
    },
   {
      id: 5,
      title: "Todo App",
      description:"A project designed to provide users with access to a simple and intuitive app to add, update, and delete tasks. Helps users manage daily activities and stay organized..",
        image: todo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/RaushanKumar606/Todo-App",
      webapp: "https://todo-app-lbu5-1amij24pq-raushans-projects-db12c48d.vercel.app/",
    },
   
  ];  
