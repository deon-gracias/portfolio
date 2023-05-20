import { IconMenu2, IconPalette } from "@tabler/icons-react";
import { nav_items, themes } from "../data/site";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import CursorObserver from "./CursorObserver";

interface HeaderType {
  items: { name: string; href: string }[];
  className?: string;
}

export default function Header({ items, className }: HeaderType) {
  return (
    <div
      className={twMerge(
        "sticky top-0 z-50 flex justify-center px-4 py-5 duration-100 bg-opacity-90 backdrop-blur-3xl navbar",
        className
      )}
    >
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex flex-1">
          <CursorObserver state={"action"}>
            <Link href={nav_items[0].href}>
              <span
                // className="text-xl normal-case border-none btn bg-gradient-to-tr from-primary to-secondary text-primary-content"
                className="text-xl normal-case border-none btn btn-primary"
              >
                Deon Gracias
              </span>
            </Link>
          </CursorObserver>
        </div>

        <ul className="hidden flex-0 menu menu-horizontal rounded-box lg:flex">
          {items.map((item) => (
            <li key={item.name}>
              <CursorObserver state="action">
                <Link href={item.href}>
                  <span>{item.name}</span>
                </Link>
              </CursorObserver>
            </li>
          ))}
        </ul>

        <CursorObserver state={"action"}>
          <ChangeThemeButton />
        </CursorObserver>

        <div className="flex-none lg:hidden">
          <CursorObserver state={"action"}>
            <label htmlFor="site-drawer" className="btn btn-square btn-primary">
              <IconMenu2 />
            </label>
          </CursorObserver>
        </div>
      </div>
    </div>
  );
}

function ChangeThemeButton({ className }: { className?: string }) {
  return (
    <div
      className={twMerge("dropdown dropdown-bottom dropdown-end", className)}
    >
      <label tabIndex={0} className="m-1 btn btn-circle btn-ghost">
        <IconPalette />
      </label>
      <ul
        tabIndex={0}
        className="grid grid-cols-1 gap-2 p-2 overflow-y-auto shadow max-h-96 dropdown-content bg-base-100 rounded-box w-52"
      >
        {themes.map((theme) => (
          <button
            className="border btn btn-ghost btn-sm"
            data-set-theme={theme}
            key={theme}
          >
            {theme}
          </button>
        ))}
      </ul>
    </div>
  );
}
