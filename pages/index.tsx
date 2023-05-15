import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { PropsWithChildren } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconChevronRight,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <Header />

      <div className="grid sm:grid-cols-[2fr_1fr] mt-14 gap-6 px-4 max-w-7xl mx-auto">
        <Card className="order-2 sm:order-1" variant="blur">
          <h1 className="text-5xl font-bold">Hello I am Deon Gracias</h1>
          <p className="py-6">
            Full-Stack Web Development and App Development. Strong engineering
            professional, pursuing Bachelor of Engineering focused in Computer
            Engineering from Fr. Conceicao Rodrigues College of Engineering.
          </p>
          <button className="gap-1 btn btn-primary">
            Resume <IconChevronRight size={20} />
          </button>
        </Card>

        <div className="grid order-1 py-20 shadow-xl sm:order-2 bg-size-200 bg-gradient-to-tr animate-gradient-xy-10 from-primary to-accent rounded-xl place-items-center sm:py-0">
          <Logo className="fill-primary-content" />
        </div>
      </div>

      <Socials />

      <Footer />
    </>
  );
}

interface CardType {
  variant?: "blur";
  className?: string;
}

function Card({ variant, className, children }: PropsWithChildren<CardType>) {
  return !variant && variant !== "blur" ? (
    <div
      className={`${className} p-2 rounded-xl bg-gradient-to-tr from-primary to-accent`}
    >
      <div className="px-8 py-14 backdrop-blur-3xl bg-base-100 rounded-xl">
        {children}
      </div>
    </div>
  ) : (
    <div className={`relative ${className}`}>
      <div className="absolute rounded-lg opacity-75 -inset-1 bg-gradient-to-r from-primary to-accent blur"></div>
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
