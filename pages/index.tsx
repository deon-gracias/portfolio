import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { PropsWithChildren } from "react";
import {
  IconCertificate,
  IconChevronDown,
  IconExternalLink,
  IconFileCv,
  IconLink,
} from "@tabler/icons-react";
import DrawerLayout from "../components/DrawerLayout";
import { twMerge } from "tailwind-merge";
import {
  educations,
  experiences,
  projects,
  resume,
  skills,
  socials,
} from "../data/portfolio";
import { IconWorldShare } from "@tabler/icons-react";
import Link from "next/link";
import { skill_badges_mono } from "../data/skill-badges";
import CursorObserver from "../components/CursorObserver";
import { useScrollContainer } from "react-indiana-drag-scroll";

export default function Home() {
  return (
    <DrawerLayout>
      <Socials />

      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />

      <Footer />
    </DrawerLayout>
  );
}

function Hero() {
  return (
    <div
      id="home"
      className="grid md:grid-cols-[2fr_1fr] mt-14 gap-6 px-4 max-w-7xl mx-auto"
    >
      <Card variant="glow" className="order-2 md:order-1">
        <h1 className="text-5xl font-bold">Hello I am Deon Gracias</h1>
        <h2 className="pt-1 text-xl font-bold">
          Full-Stack Web and App Developer.
        </h2>
        <p className="pt-3 pb-6">
          Strong engineering professional, pursuing Bachelor of Engineering
          focused in Computer Engineering from Fr. Conceicao Rodrigues College
          of Engineering.
        </p>
        <div className="flex gap-2">
          <CursorObserver state="download">
            <a
              target="blank"
              href={resume}
              className="gap-1 border-none btn btn-primary"
            >
              <IconFileCv /> Resume
            </a>
          </CursorObserver>
          <CursorObserver state="action">
            <a href="#skills" className="gap-1 btn btn-ghost">
              More <IconChevronDown size={20} />
            </a>
          </CursorObserver>
        </div>
      </Card>

      <div className="grid order-1 py-20 shadow-xl md:order-2 bg-size-200 bg-gradient-to-tr animate-gradient-xy-8 from-primary to-secondary card-body card place-items-center md:py-0">
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
        "p-1 bg-gradient-to-tr from-primary to-secondary card",
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
    <div className={twMerge("card", className)}>
      <div className="card-body">{children}</div>
    </div>
  );
}

function Socials() {
  return (
    <ul className="fixed bg-base-200 border-primary left-0 z-50 -translate-y-1/2 shadow-xl top-1/2 menu rounded-r-box">
      {socials.map((social) => (
        <li
          key={social.name}
          className="hover:bg-primary hover:text-primary-content"
        >
          <CursorObserver state="link">
            <a target="blank" href={social.href}>
              {social.icon}
            </a>
          </CursorObserver>
        </li>
      ))}
    </ul>
  );
}

function Skills() {
  const scrollContainer = useScrollContainer();

  return (
    <section id="skills" className="w-full px-4 pt-24 pb-16 mx-auto max-w-7xl">
      <SectionHeading className="flex justify-center" title="Skills" />

      <div
        ref={scrollContainer.ref}
        className="flex mt-24 mb-24 pb-4 overflow-x-auto overflow-y-visible"
      >
        {skills.map((skill) => (
          <Card
            key={skill.title}
            variant="border"
            className="mr-6 w-72 h-96 flex-grow-0 flex-shrink-0"
          >
            {skill.icon}
            <h2 className="card-title">{skill.title}</h2>
            <div className="mt-5 card-actions">
              {skill.items.map((item) => (
                <div
                  className="overflow-hidden duration-200 border rounded-full hover:border-primary"
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

function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-4 pt-24 pb-16 mx-auto max-w-7xl scroll-p-32"
    >
      <SectionHeading className="flex justify-center" title="Projects" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Object.entries(projects)
          .slice(0, 4)
          .map(([id, project]) => (
            <div
              className="duration-200 shadow-md card hover:shadow-xl"
              key={`${project.title}`}
            >
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="flex gap-1 mb-2 flex-wrap">
                  {project.technologies.map((item) => (
                    <div
                      className="overflow-hidden duration-200 border rounded-full hover:border-primary"
                      key={item}
                    >
                      <img
                        className="w-full h-full"
                        src={skill_badges_mono[item]}
                        alt={item}
                      />
                    </div>
                  ))}
                </div>

                {/* <div className="card-actions justify-end">
                  <CursorObserver state={"link"}>
                    <Link href={`/projects/${id}`}>
                      <button className="btn btn-primary gap-2">
                        <IconExternalLink />
                        View
                      </button>
                    </Link>
                  </CursorObserver>
                </div> */}
              </div>
            </div>
          ))}
      </div>

      <CursorObserver state={"action"}>
        <Link href="/projects">
          <button className="btn btn-primary mt-4 w-full">View More</button>
        </Link>
      </CursorObserver>
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
            className="duration-200 card-compact shadow-md card hover:shadow-xl"
            key={`${experience.company}-${experience.post}`}
          >
            <div className="card-body">
              <h2 className="card-title">{experience.post}</h2>
              <h3 className="flex items-center gap-1">
                {experience.company}
                <CursorObserver state={"action"}>
                  <a
                    className="text-secondary"
                    target="blank"
                    href={experience.website}
                  >
                    <IconWorldShare size={20} />
                  </a>
                </CursorObserver>
              </h3>
              <h4 className="text-sm italic">{experience.type}</h4>
              <p className="text-sm">
                {experience.start} - {experience.end}
              </p>
              <div className="justify-end card-actions">
                <CursorObserver state={"link"}>
                  <a target="blank" href={experience.letter}>
                    <button className="btn btn-circle btn-primary">
                      <IconCertificate />
                    </button>
                  </a>
                </CursorObserver>
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

function Education() {
  return (
    <section id="education" className="w-full px-4 py-16 mx-auto max-w-7xl">
      <SectionHeading className="flex justify-center" title="Education" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {educations.map((education) => (
          <div
            className="duration-200 shadow-md card hover:shadow-xl"
            key={education.name}
          >
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
        "text-2xl mb-8 w-fit font-bold uppercase bg-gradient-to-r from-primary to-secondary bg-[length:100%_7px] bg-no-repeat bg-bottom",
        className
      )}
    >
      {title}
    </h1>
  );
}
