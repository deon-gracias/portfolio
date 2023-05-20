import { PropsWithChildren, useEffect, useRef } from "react";
import Header from "./Header";
import { nav_items } from "../data/site";

export default function DrawerLayout({ children }: PropsWithChildren) {
 
  return (
    <div className="drawer">
      <input id="site-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        <Header
          className={``}
          items={nav_items}
        />
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="site-drawer" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 bg-base-100">
          {nav_items.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
