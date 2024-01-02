import {
    mern,
    rct,
    js,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
 
    {
      title: "Backend Developer",
      icon: backend,
    },
 
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "git",
      icon: git,
    },
   
 
  ];
  
  const experiences = [
    {
      title: "Javascript Developer",
      company_name: "",
      icon: js,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Collaborated on a task manager project, employing HTML, CSS, and JavaScript.",
        "Implemented secure user authentication using Passport.js for login and registration.",
        "Developed CRUD functionalities for tasks, ensuring real-time updates with MongoDB.",
        "Ensured a responsive design for seamless user experience using Tailwind CSS.",
        "Utilized Express.js for server-side development, optimizing API endpoints.",
        "Integrated third-party APIs for additional features and data enrichment.",
        "Employed Git for version control, facilitating collaboration within the development team.",
        "Implemented task filtering and sorting options for enhanced user organization.",
        "Conducted code reviews, participated in team discussions, and applied agile methodologies.",
        "Gained proficiency in Tailwind CSS for efficient and scalable styling in web applications.",
      ],
    },
    {
      title: "React Developer",
      company_name: "",
      icon: rct,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Collaborated on a React-based task manager project, utilizing HTML, CSS, and JavaScript.",
        "Implemented secure user authentication with React Router for seamless login and registration.",
        "Developed efficient CRUD functionalities for tasks, ensuring real-time updates with React Hooks.",
        "Ensured a responsive and visually appealing design using styled-components in React.",
        "Utilized React Router for navigation and optimized components for a smooth user experience.",
        "Integrated third-party APIs with React's useEffect to enhance application functionality.",
        "Managed state effectively with React Context API for centralized data handling.",
        "Contributed to Git repositories for version control, ensuring a collaborative development process.",
        "Implemented task filtering and sorting features in React to enhance user task organization.",
        "Engaged in code reviews, actively participated in team discussions, and applied agile methodologies.",
      ],
      
    },
    {
      title: "Mern Stack Developer",
      company_name: "Shopify",
      icon: mern,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
          "Collaborated on a MERN stack project, building a feature-rich web application from scratch.",
          "Implemented secure user authentication using Passport.js and JSON Web Tokens (JWT).",
          "Developed RESTful APIs with Express.js, optimizing routes and middleware for efficiency.",
          "Created dynamic and responsive user interfaces with React and integrated Redux for state management.",
          "Utilized MongoDB for data storage, implementing CRUD operations for seamless data manipulation.",
          "Built scalable backend services with Node.js, ensuring high performance and responsiveness.",
          "Integrated third-party APIs and libraries to enhance application functionality and user experience.",
          "Applied Git for version control, actively participating in branching, merging, and code reviews.",
          "Implemented real-time features using Socket.io to enable live communication within the application.",
          "Contributed to an agile development environment, participating in sprints, stand-ups, and retrospectives.",
        
        
      ],
    },
 
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };