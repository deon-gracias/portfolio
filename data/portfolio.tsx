import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDatabase,
  IconDeviceMobile,
  IconMail,
  IconPackages,
  IconReport,
  IconRobot,
  IconServer,
  IconSourceCode,
  IconWorld,
  TablerIconsProps,
} from "@tabler/icons-react";
import { skill_badges_mono } from "../data/skill-badges";
import Link from "next/link";

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
      { name: "Scikit", image: skill_badges_mono.scikit },
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
      { name: "Pocketbase", image: skill_badges_mono.pocketbase },
    ],
  },
];

export const experiences = [
  {
    company: "Skinzy Software Solutions",
    image:
      "https://media.licdn.com/dms/image/C4D0BAQFwq94aaHO6Mw/company-logo_200_200/0/1657880937495?e=1695254400&v=beta&t=uc1-RlDWy8O5JaJtK5zsws3yJvgW3kJWvdlDn2hy_YE",
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
    image:
      "https://skinzy.in/static/media/logo-transparent-background.8d754bd6e489edf2f14d.png",
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

export const pos = [
  {
    image:
      "https://api.badgr.io/public/assertions/J3AEpEaPQya53AU6avQaBg/image",
    title: "Postman Student Lead",
    organization: "Postman",
    organizationUrl: "https://www.postman.com/",
    certificateUrl:
      "https://badgr.com/public/assertions/J3AEpEaPQya53AU6avQaBg?identity__email=deongracias1@gmail.com",
    start: "July 2023",
  },
  {
    image: "https://avatars.githubusercontent.com/u/111590759?s=200&v=4",
    title: "GDSC Co Lead",
    organization: "Google Developer Students Club CRCE",
    organizationUrl: "https://crce-gdsc.github.io/",
    certificateUrl:
      "https://drive.google.com/file/d/1p5Rzu9vDGMBmKNdpFuBg5QYrnFtwY236/view?usp=drive_link",
    start: "July 2022",
    end: "July 2023",
  },
];

export const certifications = [
  {
    image:
      "https://yt3.googleusercontent.com/ytc/AGIKgqNbvzXnkrX4r3t8S2BcmDbHHJIWycRczP41tHBazA=s900-c-k-c0x00ffffff-no-rj",
    title: "Technology Virtual Experience Program",
    organization: "Deloitte",
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte%20Australia/YPWCiGNTkr6QxcpEu_Deloitte%20Australia_87eiBXZRmKn5Ahky9_1677270694510_completion_certificate.pdf",
    issued: new Date("2023-02-24"),
  },
  {
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png",
    title: "Intermediate Machine Learning",
    organization: "Kaggle",
    credentialUrl:
      "https://www.kaggle.com/learn/certification/deongracias/intermediate-machine-learning",
    issued: new Date("2023-02-23"),
  },
  {
    image:
      "https://api.badgr.io/public/assertions/J3AEpEaPQya53AU6avQaBg/image",
    title: "Postman Student Leader",
    organization: "Postman",
    credentialUrl:
      "https://badgr.com/public/assertions/J3AEpEaPQya53AU6avQaBg?identity__email=deongracias1@gmail.com",
    issued: new Date("2023-06-19"),
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png?20230305195327",
    title: "Google Analytics for Beginners",
    organization: "Google",
    credentialUrl:
      "https://analytics.google.com/analytics/academy/certificate/-33pTmteReGnyMYkcZ9Y7A",
    issued: new Date("2021-04-23"),
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png?20200508182226",
    title: "SQL Advanced Certificate",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/acba46d823f9",
    issued: new Date("2022-06-21"),
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png?20200508182226",
    title: "REST API Intermediate Certificate",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/6b2a5d63d1d4",
    issued: new Date("2022-06-21"),
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png?20200508182226",
    title: "JavaScript Intermediate Certificate",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/c263cb0f03cc",
    issued: new Date("2022-05-6"),
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png?20200508182226",
    title: "Problem Solving Intermediate",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/74d34f0f3994",
    issued: new Date("2021-09-21"),
  },
];

interface ProjectType {
  [key: string]: {
    title: string;
    tags?: string[];
    description: JSX.Element;
    technologies: string[];
    links: { name: string; href: string; icon: TablerIconsProps }[];
  };
}

export const projects: ProjectType = {
  "tree-transparency": {
    title: "Tree Transparency",
    tags: ["web-dev", "ml", "iot", "data-analysis"],
    description: (
      <>
        Empowering Environmental Conservation through Blockchain and Citizen
        Engagement
      </>
    ),
    technologies: [
      "nextjs",
      "firebase",
      "solidity",
      "ethersjs",
      "ipfs",
      "flask",
      "arduino",
      "opencv",
    ],
    links: [],
  },
  "agriculture-iot": {
    title: "Agriculture IoT",
    tags: ["web-dev", "ml", "iot", "data-analysis"],
    description: <>Smart Farming for Increased Efficiency and Profitability.</>,
    technologies: [
      "nextjs",
      "nodejs",
      "firebase",
      "flask",
      "arduino",
      "tensorflow",
      "scikit",
    ],
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
  "infra-lab-crce": {
    title: "Infra Lab CRCE",
    tags: ["web-dev", "freelancing"],
    description: (
      <>
        Exploring Infrastructure in Fr. Conceicao Rodrigues College of
        Engineering.
      </>
    ),
    technologies: ["nextjs", "pocketbase"],
    links: [
      {
        name: "Deployed Website",
        href: "http://infra.fragnel.edu.in:3000/",
        icon: <IconBrandGithub />,
      },
    ],
  },
  "hotel-bookings-analysis": {
    title: "Hotel Bookings Analysis",
    tags: ["data-analysis"],
    description: (
      <>Data-driven Growth, Trends, and Optimization with SQL and Power BI.</>
    ),
    technologies: ["powerbi", "sqlserver"],
    links: [
      {
        name: "Github",
        href: "https://github.com/deon-gracias/hotel-bookings-power-bi",
        icon: <IconBrandGithub />,
      },
    ],
  },
  "tic-tac-toe": {
    title: "Tic Tac Toe",
    tags: ["web-dev"],
    description: <>Minmax with Alpha Beta Pruning algorithm</>,
    technologies: ["reactjs"],
    links: [
      {
        name: "Github",
        href: "",
        icon: <IconBrandGithub />,
      },
    ],
  },
  "static-int-educare-website": {
    title: "Static Int Educare Website",
    tags: ["web-dev", "internship", "html", "css", "php"],
    description: <>Fixing the skill gap</>,
    technologies: ["html", "css", "php"],
    links: [],
  },
  // "ieee-conference": {
  //   title: "IEEE Conference CRCE 2024",
  //   tags: ["web-dev", "freelance"],
  //   description: <>Website for IEEE Conference organized in CRCE</>,
  //   technologies: ["nextjs", "pocketbase"],
  //   links: [],
  // },
  // "sb-financial": {
  //   title: "Alpha Beta Pruning Minmax Tic Tac Toe",
  //   tags: ["web-dev", "freelance"],
  //   description: <></>,
  //   technologies: ["nextjs", "reactjs"],
  //   links: [
  //     {
  //       name: "Github",
  //       href: "",
  //       icon: <IconBrandGithub />,
  //     },
  //   ],
  // },
  // "inventory-management": {
  //   title: "College Inventory Management",
  //   description: <></>,
  //   technologies: ["nextjs", "pocketbase"],
  //   links: [],
  // },
  // "course-scheduling-electron": {
  //   title: "Course Scheduling System",
  //   description: <></>,
  //   technologies: ["electron", "reactjs"],
  //   links: [
  //     {
  //       name: "Github",
  //       href: "",
  //       icon: <IconBrandGithub />,
  //     },
  //   ],
  // },
};

interface PublicationType {
  [key: string]: {
    title: string;
    paper: JSX.Element;
    citation: JSX.Element;
    link: { href: string; icon: TablerIconsProps };
  };
}

export const publications: PublicationType = {
  "tree-transparency": {
    title:
      "A Comprehensive System for Sustainable Tree Plantation and Growth Monitoring using Blockchain, AI, and IoT",
    paper: (
      <Link href="https://ijisae.org/index.php/IJISAE">
        IJISAE (Q3 Scopus Indexed)
      </Link>
    ),
    citation: (
      <>
        Monali Shetty, Deon Gracias, Ryan Valiaparambil, Hisbaan Sayed, Vijay
        Prajapati, Mahek Intwala, Prachi Patil, “A Comprehensive System for
        Sustainable Tree Plantation and Growth Monitoring using Blockchain, AI,
        and IoT”, Int J Intell Syst Appl Eng, vol. 12, no. 21s, pp. 955–961,
        Mar. 2024.
      </>
    ),
    link: {
      href: "https://ijisae.org/index.php/IJISAE/article/view/5494",
      icon: <IconReport />,
    },
  },
  edutube: {
    title: "Edutube: Enhancing Credibility & User Experience Online",
    paper: <Link href="https://www.ijfmr.com/">IJFMR</Link>,
    citation: (
      <>
        R. Bothra, D. Gracias, V. Prajapati, and S. N. Deshmukh, “EduTube :
        Enhancing Credibility and user experience in Online learning,”
        International Journal for Multidisciplinary Research, vol. 5, no. 5,
        Oct. 2023, doi: 10.36948/ijfmr.2023.v05i05.7145.
      </>
    ),
    link: {
      href: "https://ijisae.org/index.php/IJISAE/article/view/5494",
      icon: <IconReport />,
    },
  },
  "underwater-communication": {
    title: "Underwater Wireless Communication using Acoustic & Optical Waves",
    paper: <Link href="https://www.ijircce.com/">IJIRCCE</Link>,
    citation: (
      <>
        V. More, D. Gracias, N. Arya, H. Wakode, A. Singh, and C. Chavan,
        "Underwater Wireless Communication using Acoustic & Optical waves," Int.
        J. Innov. Res. Comput. Commun. Eng., pp. 6739, Jun. 2021. DOI:
        10.15680/IJIRCCE.2021.0906119.
      </>
    ),
    link: {
      href: "http://ijircce.com/admin/main/storage/app/pdf/8a9tEgATQ9Pb7zJFPy7MXmavwNoVuVglniuDHrRJ.pdf",
      icon: <IconReport />,
    },
  },
};
