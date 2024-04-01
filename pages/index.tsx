/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import {
  IconCertificate,
  IconChevronDown,
  IconChevronRight,
  IconExternalLink,
  IconFileCv,
  IconFileDescription,
  IconReport,
  IconWorldShare,
} from "@tabler/icons-react";
import { motion, useAnimation } from "framer-motion";
import moment from "moment";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import CursorObserver from "../components/CursorObserver";
import DrawerLayout from "../components/DrawerLayout";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import {
  certifications,
  educations,
  experiences,
  pos,
  projects,
  publications,
  resume,
  skills,
  socials,
} from "../data/portfolio";
import { skill_badges_mono } from "../data/skill-badges";

export default function Home() {
  return (
    <DrawerLayout>
      <Socials />

      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <PositionOfResponsibility />
      <Certifications />
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
      <motion.div
        key="hero__body"
        initial={{ x: -300, opacity: 0.5 }}
        exit={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
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
      </motion.div>

      <motion.div
        key="hero__image"
        initial={{ x: 300, opacity: 0.5 }}
        exit={{ x: 300, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full grid order-1 py-20 shadow-xl md:order-2 bg-size-200 bg-gradient-to-tr animate-gradient-xy-8 from-primary to-secondary card-body card place-items-center md:py-0">
          <Logo className="fill-primary-content" />
        </div>
      </motion.div>
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
    <ul className="fixed bg-base-200/50 border-primary right-0 z-50 -translate-y-1/2 shadow-xl top-3/4 menu rounded-l-box backdrop-blur-sm">
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
  return (
    <section id="skills" className="w-full pt-24 pb-16 mx-auto">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading className="ml-4 flex justify-center" title="Skills" />
      </div>

      <Splide
        options={{
          gap: 10,
          type: "loop",
          drag: "free",
          focus: "center",
          autoWidth: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
        hasTrack={false}
      >
        <SplideTrack>
          {skills.map((skill, index) => (
            <SplideSlide className="h-[350px] w-80" key={skill.title}>
              <Card
                variant="border"
                className="w-full h-full flex-grow-0 flex-shrink-0"
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
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows">
          <CursorObserver state={"action"}>
            <button className="splide__arrow splide__arrow--prev">
              <IconChevronRight />
            </button>
          </CursorObserver>
          <CursorObserver state={"action"}>
            <button className="splide__arrow splide__arrow--next">
              <IconChevronRight />
            </button>
          </CursorObserver>
        </div>
      </Splide>
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 auto-rows-fr">
        {Object.entries(projects)
          .slice(0, 4)
          .map(([id, project]) => (
            <motion.div key={`${project.title}-${id}`}>
              <div className="duration-200 h-full shadow-md card hover:shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="flex gap-1 my-2 flex-wrap">
                    {project.technologies.map((item) => (
                      <div
                        className="overflow-hidden duration-200 border rounded-full hover:border-primary"
                        key={item}
                      >
                        <img
                          loading="lazy"
                          className="w-full h-full"
                          src={skill_badges_mono[item]}
                          alt={item}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="card-actions justify-end">
                    <CursorObserver state={"link"}>
                      <Link passHref href={`/projects/${id}`}>
                        <a target="blank" className="btn btn-primary gap-2">
                          <IconExternalLink />
                          View
                        </a>
                      </Link>
                    </CursorObserver>
                  </div>
                </div>
              </div>
            </motion.div>
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

function Publications() {
  return (
    <section id="experience" className="w-full px-4 py-16 mx-auto max-w-7xl">
      <SectionHeading className="flex justify-center" title="publications" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Object.entries(publications).map(([key, publication]) => (
          <div
            className="duration-200 card-compact shadow-md card hover:shadow-xl"
            key={`${key}`}
          >
            <div className="card-body">
              {/* <img
                className="rounded-full w-20 h-20 mb-2"
                src={experience.image}
                alt={experience.company}
              /> */}
              <h2 className="card-title">{publication.title}</h2>
              <h4 className="text-sm italic">{publication.journal}</h4>
              <p className="text-sm">{publication.paper}</p>
              <div className="justify-end card-actions">
                <CursorObserver state={"link"}>
                  <a target="blank" href={publication.link.href}>
                    <button className="btn btn-circle btn-primary">
                      <IconFileDescription />
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
              {/* <img
                className="rounded-full w-20 h-20 mb-2"
                src={experience.image}
                alt={experience.company}
              /> */}
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

function PositionOfResponsibility() {
  return (
    <section id="pos" className="w-full px-4 py-16 mx-auto max-w-7xl">
      <SectionHeading
        className="flex justify-center"
        title="Position of Responsibility"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {pos.map((pos) => (
          <div
            className="duration-200 card-compact shadow-md card hover:shadow-xl"
            key={`${pos.organization}-${pos.title}`}
          >
            <div className="card-body">
              <img
                className="rounded-full w-20 h-20 mb-2"
                src={pos.image}
                alt={pos.title}
              />
              <h2 className="card-title">{pos.title}</h2>
              <h3 className="flex items-center gap-1">
                {pos.organization}
                <CursorObserver state={"action"}>
                  <a
                    className="text-secondary"
                    target="blank"
                    href={pos.organizationUrl}
                  >
                    <IconWorldShare size={20} />
                  </a>
                </CursorObserver>
              </h3>
              {pos.end ? (
                <p className="text-sm">
                  {pos.start} - {pos.end}
                </p>
              ) : (
                <p className="text-sm">
                  {pos.start}
                  <span className="badge badge-primary ml-4">Active</span>
                </p>
              )}
              <div className="justify-end card-actions">
                <CursorObserver state={"link"}>
                  <a target="blank" href={pos.certificateUrl}>
                    <button className="btn btn-circle btn-primary">
                      <IconCertificate />
                    </button>
                  </a>
                </CursorObserver>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section
      id="certifications"
      className="w-full px-4 py-16 mx-auto max-w-7xl"
    >
      <SectionHeading className="flex justify-center" title="certifications" />

      <div className="grid bg-base-200 gap-0.5 p-0.5 md:grid-cols-2">
        {certifications.map((certification) => (
          <CursorObserver state="link" key={certification.credentialUrl}>
            <a
              target="blank"
              href={certification.credentialUrl}
              className="duration-200 group flex items-center bg-base-100 h-full w-full justify-between p-4 hover:bg-primary hover:text-primary-content hover:shadow-2xl hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="bg-base-100 w-12 rounded-full outline outline-1 outline-offset-2 outline-base-content/40 group-hover:outline-primary-content">
                    <img
                      loading="eager"
                      src={certification.image}
                      alt={certification.title}
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-4">
                  <h2 className="font-bold text-lg">{certification.title}</h2>
                  <p>{certification.organization}</p>
                  <p className="text-sm opacity-70">
                    {moment(certification.issued).format("MMMM D, YYYY")}
                  </p>
                </div>
              </div>
            </a>
          </CursorObserver>
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
