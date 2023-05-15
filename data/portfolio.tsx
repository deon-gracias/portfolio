import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDatabase,
  IconDeviceMobile,
  IconPackages,
  IconRobot,
  IconServer,
  IconSourceCode,
  IconWorld,
} from "@tabler/icons-react";
import skill_badges from "../data/skill-badges";

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
      { name: "C", image: skill_badges.c },
      { name: "C++", image: skill_badges.cplusplus },
      { name: "Java", image: skill_badges.java },
      { name: "JavaScript", image: skill_badges.javascript },
      { name: "TypeScript", image: skill_badges.typescript },
    ],
  },
  {
    title: "Machine Learning & Data Science",
    icon: <IconRobot size={40} />,
    items: [
      { name: "Tensorflow", image: skill_badges.tensorflow },
      { name: "Scikit Learn", image: skill_badges.scikitlearn },
      { name: "Pandas", image: skill_badges.pandas },
      { name: "NumPy", image: skill_badges.numpy },
      { name: "Matplotlib", image: skill_badges.matplotlib },
      { name: "PowerBi", image: skill_badges.powerbi },
    ],
  },
  {
    title: "Web Development",
    icon: <IconWorld size={40} />,
    items: [
      { name: "Next.js", image: skill_badges.nextjs },
      { name: "React.js", image: skill_badges.reactjs },
      { name: "Node.js", image: skill_badges.nodejs },
      { name: "Flask", image: skill_badges.flask },
      { name: "Django", image: skill_badges.django },
      { name: "PHP", image: skill_badges.php },
      { name: "Firebase", image: skill_badges.firebase },
      { name: "Figma", image: skill_badges.figma },
    ],
  },
  {
    title: "Blockchain",
    icon: <IconPackages size={40} />,
    items: [
      { name: "Next.js", image: skill_badges.nextjs },
      { name: "Soldity", image: skill_badges.solidity },
      { name: "Ethers.js", image: skill_badges.ethersjs },
    ],
  },
  {
    title: "Mobile Development",
    icon: <IconDeviceMobile size={40} />,
    items: [
      { name: "Flutter", image: skill_badges.flutter },
      { name: "Android Studio", image: skill_badges.androidstudio },
      { name: "Firebase", image: skill_badges.firebase },
    ],
  },
  {
    title: "Development, Deployment & Testing",
    icon: <IconServer size={40} />,
    items: [
      { name: "Linux", image: skill_badges.linux },
      { name: "Vim", image: skill_badges.vim },
      { name: "Git", image: skill_badges.git },
      { name: "Docker", image: skill_badges.docker },
    ],
  },
  {
    title: "Database",
    icon: <IconDatabase size={40} />,
    items: [
      { name: "MongoDB", image: skill_badges.mongodb },
      { name: "MySQL", image: skill_badges.mysql },
      { name: "PostgreSQL", image: skill_badges.postgresql },
      { name: "Firebase", image: skill_badges.firebase },
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
    website: "http://staticinteducare.in/upskilling",
    post: "Mentor",
    type: "Part Time",
    start: "July 2022",
    end: "November 2022",
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
    website: "http://staticinteducare.in/upskilling",
    post: "Web Developer",
    type: "Internship",
    start: "August 2020",
    end: "July 2022",
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
    website: "http://staticinteducare.in/upskilling",
    post: "Intern",
    type: "Internship",
    start: "June 2020",
    end: "July 2020",
    skills: [
      "Solidity",
      "Flutter",
      "Dart",
      ""
    ],
  },
];
