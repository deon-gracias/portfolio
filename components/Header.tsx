import { IconMenu2 } from "@tabler/icons-react";

const navList = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-center py-5 duration-100 px-9 bg-opacity-90 backdrop-blur-3xl navbar">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-1">
          <a className="text-xl normal-case btn btn-ghost">Deon Gracias</a>
        </div>

        <ul className="flex-0 menu menu-horizontal rounded-box">
          {navList.map((item) => (
            <li key={item.name}>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
