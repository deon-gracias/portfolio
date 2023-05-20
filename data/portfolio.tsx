import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDatabase,
  IconDeviceMobile,
  IconMail,
  IconPackages,
  IconRobot,
  IconServer,
  IconSourceCode,
  IconWorld,
  TablerIconsProps,
} from "@tabler/icons-react";
import { skill_badges_mono } from "../data/skill-badges";

export const resume =
  "https://docs.google.com/document/d/184re9dYZInpsnHHPa46KyRY59j6CfteJaUY3oU1bomQ/export?format=pdf";

export const educations = [
  {
    name: "Fr. Conceicao Rodrigues College of Engineering",
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    start: "September 2021",
    end: "May 2024",
    pursuing: true,
    grade: "9.2 CGPA",
  },
  {
    name: "Thakur Polytechnic",
    degree: "Diploma",
    field: "Information Technology",
    start: "August 2019",
    end: "August 2021",
    grade: "97 %",
  },
];

export const socials = [
  {
    name: "Email",
    href: "mailto:deongracias1@gmail.com",
    icon: <IconMail />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/deongracias",
    icon: <IconBrandLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/deon-gracias",
    icon: <IconBrandGithub />,
  },
];

export const skills = [
  {
    title: "Languages",
    icon: <IconSourceCode size={40} />,
    items: [
      { name: "C", image: skill_badges_mono.c },
      { name: "C++", image: skill_badges_mono.cplusplus },
      { name: "Java", image: skill_badges_mono.java },
      { name: "JavaScript", image: skill_badges_mono.javascript },
      { name: "TypeScript", image: skill_badges_mono.typescript },
      { name: "Python", image: skill_badges_mono.python },
      { name: "Go", image: skill_badges_mono.go },
      { name: "Dart", image: skill_badges_mono.dart },
    ],
  },
  {
    title: "Machine Learning & Data Science",
    icon: <IconRobot size={40} />,
    items: [
      { name: "Tensorflow", image: skill_badges_mono.tensorflow },
      { name: "Scikit Learn", image: skill_badges_mono.scikitlearn },
      { name: "Pandas", image: skill_badges_mono.pandas },
      { name: "NumPy", image: skill_badges_mono.numpy },
      { name: "Matplotlib", image: skill_badges_mono.matplotlib },
      { name: "PowerBi", image: skill_badges_mono.powerbi },
    ],
  },
  {
    title: "Web Development",
    icon: <IconWorld size={40} />,
    items: [
      { name: "Next.js", image: skill_badges_mono.nextjs },
      { name: "React.js", image: skill_badges_mono.reactjs },
      { name: "Node.js", image: skill_badges_mono.nodejs },
      { name: "Flask", image: skill_badges_mono.flask },
      { name: "Django", image: skill_badges_mono.django },
      { name: "PHP", image: skill_badges_mono.php },
      { name: "Firebase", image: skill_badges_mono.firebase },
      { name: "Figma", image: skill_badges_mono.figma },
    ],
  },
  {
    title: "Mobile Development",
    icon: <IconDeviceMobile size={40} />,
    items: [
      { name: "Flutter", image: skill_badges_mono.flutter },
      { name: "Android Studio", image: skill_badges_mono.androidstudio },
      { name: "Firebase", image: skill_badges_mono.firebase },
    ],
  },
  {
    title: "Blockchain",
    icon: <IconPackages size={40} />,
    items: [
      { name: "Next.js", image: skill_badges_mono.nextjs },
      { name: "Soldity", image: skill_badges_mono.solidity },
      { name: "Ethers.js", image: skill_badges_mono.ethersjs },
      { name: "IPFS", image: skill_badges_mono.ipfs },
    ],
  },
  {
    title: "Development, Deployment & Testing",
    icon: <IconServer size={40} />,
    items: [
      { name: "Linux", image: skill_badges_mono.linux },
      { name: "Vim", image: skill_badges_mono.vim },
      { name: "Git", image: skill_badges_mono.git },
      { name: "Docker", image: skill_badges_mono.docker },
    ],
  },
  {
    title: "Database",
    icon: <IconDatabase size={40} />,
    items: [
      { name: "MongoDB", image: skill_badges_mono.mongodb },
      { name: "MySQL", image: skill_badges_mono.mysql },
      { name: "PostgreSQL", image: skill_badges_mono.postgresql },
      { name: "Firebase", image: skill_badges_mono.firebase },
    ],
  },
];

export const experiences = [
  {
    company: "Skinzy Software Solutions",
    website: "https://skinzy.in/",
    post: "Mobile Developer",
    type: "Internship",
    start: "December 2022",
    end: "March 2023",
    letter:
      "https://drive.google.com/file/d/10WHIq1OnUl244AFBnENK9wsl5oCDd9YL/view?usp=sharing",
    skills: [
      "Flutter",
      "Android",
      "iOS",
      "Firebase",
      "REST APIs",
      "UI/UX",
      "Python",
      "Django",
    ],
  },
  {
    company: "Static Int. Educare",
    website: "http://staticinteducare.in/upskilling.html",
    post: "Mentor",
    type: "Part Time",
    start: "July 2022",
    end: "November 2022",
    letter:
      "https://drive.google.com/file/d/1cBWE5BZ1Kq7XbPw9_NxefVjEgYs2BWlD/view?usp=sharing",
    skills: [
      "Mentoring",
      "Management",
      "Python",
      "Communication",
      "Flutter",
      "Public Speaking",
    ],
  },
  {
    company: "Static Int. Educare",
    website: "http://staticinteducare.in/upskilling.html",
    post: "Web Developer",
    type: "Internship",
    start: "August 2020",
    end: "July 2022",
    letter:
      "https://drive.google.com/file/d/1O3Pay-NU7KHbWIMjHW3bdneHvNBccIFC/view?usp=sharing",
    skills: [
      "MySQL",
      "Leadership",
      "Management",
      "Web Development",
      "JavaScript",
      "React.js",
      "Git",
      "PHP",
    ],
  },
  {
    company: "Static Int. Educare",
    website: "http://staticinteducare.in/upskilling.html",
    post: "Intern",
    type: "Internship",
    start: "June 2020",
    end: "July 2020",
    letter:
      "https://drive.google.com/file/d/1qKj6Nts2pf0kNoup2ntkLKOxUCnYKXuW/view?usp=sharing",
    skills: ["Solidity", "Flutter", "Dart"],
  },
];

interface ProjectType {
  [key: string]: {
    title: string;
    description: string;
    technologies: string[];
    links: { name: string; href: string; icon: TablerIconsProps }[];
  };
}

export const projects: ProjectType = {
  "agriculture-iot": {
    title: "Agriculture IoT",
    description: "",
    technologies: ["nextjs", "reactjs", "nodejs", "firebase", "flask"],
    links: [
      {
        name: "Deployed Website",
        href: "https://crop-recommendation-frontend.vercel.app/",
        icon: <IconBrandGithub />,
      },
      {
        name: "Frontend",
        href: "https://github.com/deon-gracias/agri-iot-frontend",
        icon: <IconBrandGithub />,
      },
    ],
  },
  "tree-transparency": {
    title: "Tree Transparency",
    description: "",
    technologies: ["nextjs", "flutter", "firebase", "solidity", "ipfs"],
    links: [
      {
        name: "Deployed Website",
        href: "https://crop-recommendation-frontend.vercel.app/",
        icon: <IconBrandGithub />,
      },
      {
        name: "Frontend",
        href: "https://github.com/deon-gracias/agri-iot-frontend",
        icon: <IconBrandGithub />,
      },
    ],
  },
};
