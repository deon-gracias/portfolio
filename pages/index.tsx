import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { PropsWithChildren } from "react";
import {
  IconCertificate,
  IconChevronDown,
  IconFileCv,
} from "@tabler/icons-react";
import DrawerLayout from "../components/DrawerLayout";
import { twMerge } from "tailwind-merge";
import {
  educations,
  experiences,
  resume,
  skills,
  socials,
} from "../data/portfolio";
import { IconWorldShare } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <DrawerLayout>
      <Socials />

      <Hero />
      <Skills />
      <Experience />
      <Education />

      <Footer />
    </DrawerLayout>
  );
}

function Hero() {
  return (
    <div className="grid sm:grid-cols-[2fr_1fr] mt-14 gap-6 px-4 max-w-7xl mx-auto">
      <Card variant="glow" className="order-2 sm:order-1">
        <h1 className="text-5xl font-bold">Hello I am Deon Gracias</h1>
        <p className="py-6">
          Full-Stack Web Development and App Development. Strong engineering
          professional, pursuing Bachelor of Engineering focused in Computer
          Engineering from Fr. Conceicao Rodrigues College of Engineering.
        </p>
        <div className="flex gap-2">
          <a
          target="blank"
            href={resume}
            className="gap-1 border-none btn btn-primary bg-gradient-to-tr animate-gradient-xy-10 from-primary to-secondary"
          >
            <IconFileCv /> Resume
          </a>
          <a href="#skills" className="gap-1 btn btn-ghost">
            More <IconChevronDown size={20} />
          </a>
        </div>
      </Card>

      <div className="grid order-1 py-20 shadow-xl sm:order-2 bg-size-200 bg-gradient-to-tr animate-gradient-xy-10 from-primary to-secondary card-body card place-items-center sm:py-0">
        <Logo className="fill-primary-content" />
      </div>
    </div>
  );
}

interface CardType {
  variant?: "border" | "glow";
  className?: string;
}

function Card({ variant, className, children }: PropsWithChildren<CardType>) {
  return variant === "border" ? (
    <div
      className={twMerge(
        "p-2 bg-gradient-to-tr from-primary to-secondary card",
        className
      )}
    >
      <div className="card-body bg-base-100 card">{children}</div>
    </div>
  ) : variant === "glow" ? (
    <div className={twMerge("relative", className)}>
      <div className="absolute duration-[5000ms] rounded-lg opacity-75 animate-pulse -inset-1 bg-gradient-to-r from-primary to-secondary blur"></div>
      <div className="h-full px-8 py-14 backdrop-blur-3xl bg-base-100 card-body card">
        {children}
      </div>
    </div>
  ) : (
    <div className={twMerge(`card`, className)}>
      <div className="card-body">{children}</div>
    </div>
  );
}

function Socials() {
  return (
    <ul className="fixed right-0 z-50 -translate-y-1/2 shadow-2xl top-1/2 menu bg-base-100 rounded-l-box">
      {socials.map((social) => (
        <li key={social.name}>
          <a
            target="blank"
            href={social.href}
            className="hover:bg-primary hover:text-primary-content"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Skills() {
  return (
    <section id="skills" className="w-full px-4 pt-24 pb-16 mx-auto max-w-7xl">
      <SectionHeading className="flex justify-center" title="Skills" />

      <div className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <Card key={skill.title} variant="border" className="bg-gradient-to-b">
            {skill.icon}
            <h2 className="card-title">{skill.title}</h2>
            <div className="mt-5 card-actions">
              {skill.items.map((item) => (
                <div
                  className="overflow-hidden border rounded-full"
                  key={item.image}
                >
                  <img
                    className="w-full h-full"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="w-full px-4 py-16 mx-auto max-w-7xl">
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

function Experience() {
  return (
    <section id="experience" className="w-full px-4 py-16 mx-auto max-w-7xl">
      <SectionHeading className="flex justify-center" title="experience" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {experiences.map((experience) => (
          <div
            className="shadow-md card"
            key={`${experience.company}-${experience.post}`}
          >
            <div className="card-body">
              <h2 className="card-title">{experience.post}</h2>
              <h3 className="flex items-center gap-1">
                {experience.company}
                <a
                  className="text-secondary"
                  target="blank"
                  href={experience.website}
                >
                  <IconWorldShare size={20} />
                </a>
              </h3>
              <h4 className="text-sm italic">{experience.type}</h4>
              <p className="text-sm">
                {experience.start} - {experience.end}
              </p>
              <div className="justify-end card-actions">
                <Link
                  target="blank"
                  className="btn btn-circle btn-primary"
                  href={experience.letter}
                >
                  <IconCertificate />
                </Link>
                {/* {experience.ongoing && (
                  <span className="badge badge-primary">Ongoing</span>
                )} */}
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
        "text-2xl mb-8 w-fit font-bold uppercase bg-gradient-to-r from-primary to-secondary bg-[length:100%_9px] bg-no-repeat bg-bottom",
        className
      )}
    >
      {title}
    </h1>
  );
}
