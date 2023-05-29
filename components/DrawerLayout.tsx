import { PropsWithChildren, useState } from "react";
import Header from "./Header";
import { nav_items } from "../data/site";
import Link from "next/link";
import CursorObserver from "./CursorObserver";

export default function DrawerLayout({ children }: PropsWithChildren) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggle = () => setDrawerOpen((state) => !state)

  return (
    <div className="drawer">
      <input id="site-drawer" type="checkbox" className="drawer-toggle" checked={isDrawerOpen} onChange={toggle} />
      <div className="flex flex-col drawer-content">
        <Header items={nav_items} />
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="site-drawer" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 bg-base-100">
          {nav_items.map((item) => (
            <CursorObserver key={item.name} state={"action"}>
              <li onClick={toggle}>
                <Link legacyBehavior href={item.href}>
                  <a>
                    {item.icon}
                    {item.name}
                  </a>
                </Link>
              </li>
            </CursorObserver>
          ))}
        </ul>
      </div>
    </div>
  );
}
