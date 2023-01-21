// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "FULL STACK DEVELOPER",
    firstName: "TECH",
    LastName: "SINU",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "15+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Problem Solving",
        para: "Problem-solving is the process of identifying, analyzing, and resolving a problem. ",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is an open-source, cross-platform, back-end technology that allows developers to run JavaScript on the server-side",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Adobe Photoshop is a widely-used, professional-grade image editing software that allows users to manipulate, enhance, and create digital images.",
        logo: ps,
      },
      {
        name: "React js",
        para: "Easy to learn: Python's simple and readable syntax makes it an excellent choice for beginners and those new to programming.",
        logo: reactjs,
      },
      {
        name: "Competitive Programming",
        para: "Competitive programming is the practice of solving algorithmic problems under a time constraint, often in a competitive environment such as a coding contest.",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Python is a powerful and versatile programming language ",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "At the core of web development is the ability to create and design user-friendly and visually appealing websites that are optimized for both desktop and mobile devices. This requires a solid understanding of web design principles, including layout, typography, and color theory, as well as a good eye for detail and an understanding of how to create engaging user experiences.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "UI/UX design is the process of designing and developing the user interface and user experience of a website or application. It involves a combination of design, research, and development skills to create interfaces that are both visually appealing and easy to use. UI (User Interface) design is the process of designing the layout, navigation, and overall look and feel of a website or application. This includes everything from the color scheme and typography to the placement of buttons and other interactive elements. ",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "Photoshop is a powerful image editing software that allows users to manipulate and enhance digital images in a variety of ways. Some of the key features and capabilities of Photoshop includeLayer-based editing: Allows users to make changes to specific parts of an image without affecting the rest of the image.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: " If you're looking for a full stack developer who can deliver high-quality software solutions on time and on budget, then I am the right person for the job. I am confident that I can make a valuable contribution to your team and help you achieve your business goals",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "karanrana3095@gmail.com",
        icon: GrMail,
        link: "mailto:karanrana3095@gmail.com",
      },
      {
        text: "+91 9798316854",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "TechSinu",
        icon: BsInstagram,
        link: "https://www.instagram.com/techsinu/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
