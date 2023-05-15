import { IconMenu2 } from "@tabler/icons-react";
import Logo from "./Logo";

interface HeaderType {
  items: { name: string; href: string }[];
}

export default function Header({ items }: HeaderType) {
  return (
    <div className="sticky top-0 z-50 flex justify-center px-2 py-5 duration-100 bg-opacity-90 backdrop-blur-3xl navbar">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex flex-1">
          <a className="text-xl normal-case border-none rounded-full btn bg-gradient-to-tr from-primary to-accent">
            Deon Gracias
          </a>
        </div>

        <div className="flex-none lg:hidden">
          <label htmlFor="site-drawer" className="btn btn-square btn-ghost">
            <IconMenu2 />
          </label>
        </div>
        <ul className="hidden flex-0 menu menu-horizontal rounded-box lg:flex">
          {items.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
