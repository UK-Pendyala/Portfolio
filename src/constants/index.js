import {
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

  gta,
  gta2,
  gtaen,
  gpa,
  it,
  sd,
  intern,
  aws,
  aws2,
  psql,
  python,
  Angular,
  Java,
  project01,
  chatbook,
  protomix
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
    icon: mobile,
  },
  {
    title: "System Design & CI/CD",
    icon: backend,
  },
  {
    title: "Machine Learning & AI Developer",
    icon: creator,
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
    name: "AWS",
    icon: aws2,
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
    name: "PL/SQL",
    icon: psql,
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
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Angular",
    icon: Angular,
  },
  {
    name: "Java",
    icon: Java,
  },
];

const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company_name: "Oregon State University - Part time",
    icon: gtaen,
    iconBg: "#E6DEDD",
    date: "January 2025 - Present",
    points: [
      "Assisting students with Kotlin concepts and Android development queries.",
      "Conducting office hours to provide guidance on coursework and projects.",
      "Assessing assignments and providing constructive feedback.",
      "Writing detailed notes to help students understand key topics.",
    ],
  },
  {
    title: "Graduate Project Assistant / Scrum Master",
    company_name: "Oregon State University - Part time",
    icon: gpa,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Migrated the SpeedScore app to React and Redux, improving scalability and UI responsiveness.",
      "Developed optimized Express.js APIs with <1s response time, supporting ~5000 users",
      "Served as Scrum Master, leading a team of 5 developers and facilitating agile workflows.",
      "Worked on AWS technologies such as EC2, S3 and CI/CD pipelines for deployment.",
    ],
  },
  {
    title: "Graduate School IT programmer",
    company_name: "Oregon State University - Part time",
    icon: it,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Developed and enhanced the Graduate School website using Salesforce Lightning and Aura components for better user experience.",
      "Built and optimized the Program of Study form, integrating CSS, Apex, and JavaScript to improve functionality and data handling.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Teletext Holidays - Full time",
    icon: sd,
    iconBg: "#E6DEDD",
    date: "May 2022 - September 2023",
    points: [
      "Worked on major airline integrations with Iberia Airways and Amadeus, streamlining passenger journey management for the Oneworld Alliance",
      "Developed mission-critical APIs using Node.js, Express.js, PostgreSQL, and DynamoDB, ",
      "Engineered a scalable backend system that can process 10,000+ passenger records daily",
      "Leveraged AWS services such as Elastic Beanstalk (EB), Lambda, API Gateway, Cloud Watch with CI/CD and Cloud Formation for scalable deployment and managing economics at scale",
    ],
  },
  {
    title: "Intern Software Engineer",
    company_name: "Virtusa",
    icon: intern,
    iconBg: "#E6DEDD",
    date: "July 2021 - Mar 2022",
    points: [
      "Developed an E-commerce platform using Angular, Spring Boot, and MySQL, focusing on performance and scalability",
      "Collaborated with a cross-functional team to enhance backend services and UI components, improving user experience. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Umakanth quickly became proficient in Salesforce development and contributed valuable insights to our projects. His dedication, problem-solving skills, and collaborative spirit made him an invaluable team member.",
    name: "John McQueen",
    designation: "Assistant Director for IT Operations",
    company: "Oregon State University",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Umakanth showcased strong adaptability and dedication while working on a complex airline project. His ability to understand intricate industry details, contribute valuable insights, and collaborate effectively made him a dependable and respected team member.",
    name: "james Lever",
    designation: "Chief Technology Officer",
    company: "ZEN3 UK Limited",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Umakanth proved to be a skilled and reliable Node.js developer, handling complex tasks with efficiency. His expertise in full-stack development, spanning Node.js, Java, and React.js, along with his strong grasp of system design, made him a valuable asset to the team.",
    name: "Narendra Uppaluri",
    designation: "Technical Architect",
    company: "ZEN3 UK Limited",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SpeedScore",
    description:
      "A MERN-based web platform designed for speedgolf enthusiasts to track rounds, analyze performance, and explore golf courses. Features interactive course maps and seamless authentication.",
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
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: project01,
    source_code_link: "https://speedscore.org/",
  },
  {
    name: "Chat Book",
    description:
      "A social media web app where users can create accounts, connect with others, and share posts. Features real-time interactions, allowing users to like and comment on posts.",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "AJAX",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: chatbook,
    source_code_link: "https://github.com/umakanth-pendyala/CHAT-BOOK",
  },
  {
    name: "Amazon Clone",
    description:
      "A simple e-commerce platform where users can create accounts, browse products, add items to the cart, and manage their cart efficiently.",
    tags: [
      {
        name: "EJS",
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
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: protomix,
    source_code_link: "https://github.com/umakanth-pendyala/ONLINE-SHOPPING",
  },
];

export { services, technologies, experiences, testimonials, projects };
