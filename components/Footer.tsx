import { socials } from "../data/portfolio";
import CursorObserver from "./CursorObserver";

export default function Footer() {
  return (
    <footer className="p-10 footer text-base-content bg-base-200">
      <div className="flex flex-col items-center w-full">
        <div className="flex">
          {socials.map((social) => (
            <CursorObserver key={social.href} state={"action"}>
              <a
                className="flex items-center gap-1 px-3 hover:text-primary"
                href={social.href}
                key={social.href}
              >
                {social.icon}
              </a>
            </CursorObserver>
          ))}
        </div>

        <div className="text-xl">Deon Gracias</div>

        <div>&copy; {new Date().getFullYear()} All Rights Reserved</div>
      </div>
    </footer>
  );
}
