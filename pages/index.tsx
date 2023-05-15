import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { PropsWithChildren } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconChevronDown,
} from "@tabler/icons-react";
import DrawerLayout from "../components/DrawerLayout";
import { twMerge } from "tailwind-merge";
import { start } from "repl";

export default function Home() {
  return (
    <DrawerLayout>
      <Socials />

      <Hero />
      <Education />

      <Footer />
    </DrawerLayout>
  );
}

function Hero() {
  return (
    <div className="grid sm:grid-cols-[2fr_1fr] mt-14 gap-6 px-4 max-w-7xl mx-auto">
      <Card className="order-2 sm:order-1" variant="blur">
        <h1 className="text-5xl font-bold">Hello I am Deon Gracias</h1>
        <p className="py-6">
          Full-Stack Web Development and App Development. Strong engineering
          professional, pursuing Bachelor of Engineering focused in Computer
          Engineering from Fr. Conceicao Rodrigues College of Engineering.
        </p>
        <div className="flex gap-2">
          <button className="gap-1 border-none btn btn-primary bg-gradient-to-tr from-primary to-accent">
            Resume
          </button>
          <button className="gap-1 btn btn-ghost">
            More <IconChevronDown size={20} />
          </button>
        </div>
      </Card>

      <div className="grid order-1 py-20 shadow-xl sm:order-2 bg-size-200 bg-gradient-to-tr animate-gradient-xy-10 from-primary to-accent rounded-xl place-items-center sm:py-0">
        <Logo className="fill-primary-content" />
      </div>
    </div>
  );
}

interface CardType {
  variant?: "blur";
  className?: string;
}

function Card({ variant, className, children }: PropsWithChildren<CardType>) {
  return !variant && variant !== "blur" ? (
    <div
      className={twMerge(
        "p-2 rounded-xl bg-gradient-to-tr from-primary to-accent",
        className
      )}
    >
      <div className="px-8 py-14 backdrop-blur-3xl bg-base-100 rounded-xl">
        {children}
      </div>
    </div>
  ) : (
    <div className={twMerge("relative", className)}>
      <div className="absolute duration-[5s] rounded-lg opacity-75 animate-pulse -inset-1 bg-gradient-to-r from-primary to-accent blur"></div>
      <div className="px-8 py-14 backdrop-blur-3xl bg-base-100 rounded-xl">
        {children}
      </div>
    </div>
  );
}

function Socials() {
  const socials = [
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

  return (
    <div>
      <ul className="fixed right-0 -translate-y-1/2 shadow-2xl top-1/2 menu bg-base-100 rounded-l-box">
        {socials.map((social) => (
          <li key={social.name}>
            <a target="blank" href={social.href}>
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Education() {
  const educations = [
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

  return (
    <section className="w-full px-4 pt-24 pb-16 mx-auto max-w-7xl">
      <SectionHeading className="flex justify-center" title="Education" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {educations.map((education) => (
          <div className="shadow-md card" key={education.name}>
            <div className="card-body">
              <h2 className="card-title">{education.name}</h2>
              <p>
                {education.degree} in {education.field} -&nbsp;
                <b>{education.grade}</b>
              </p>
              <div className="card-actions">
                <p className="text-sm">
                  {education.start} - {education.end}
                </p>
                {education.pursuing && (
                  <span className="badge badge-primary">Pursuing</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h1
      className={twMerge(
        "text-2xl mb-8 w-fit font-bold uppercase bg-gradient-to-r from-primary to-accent bg-[length:100%_9px] bg-no-repeat bg-bottom",
        className
      )}
    >
      {title}
    </h1>
  );
}
