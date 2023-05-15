import { PropsWithChildren } from "react";
import Header from "./Header";

export default function DrawerLayout({ children }: PropsWithChildren) {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <div className="drawer">
      <input id="site-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        <Header items={navItems} />
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="site-drawer" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 bg-base-100">
          {navItems.map((item) => (
            <li key={item.name}>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
