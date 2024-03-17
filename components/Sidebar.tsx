"use client";

//import packages
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const links = [
  { text: "Introduction", link: "/" },
  { text: "Get Started", link: "/installation" },
  { text: "Api", link: "/api" },
  { text: "Tools", link: "/utils" },
];

export const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside className="p-1 w-1/6 flex flex-col border-r border-r-myLightGreen text-sm text-myGray bg-myBgColor mt-14">
      {links.map((l) => {
        const isActive =
          pathName.includes(l.text) ||
          (l.text === "Introduction" ? pathName.length === 1 : false);

        return (
          <Link
            href={l.link}
            key={l.text}
            className={`capitalize px-5 py-1 mb-2 ${
              isActive && "text-brightGreen border-b-2 border-b-myGray"
            }`}
          >
            {l.text}
          </Link>
        );
      })}
    </aside>
  );
};
