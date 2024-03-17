"use client";

//import packages
import {
  faAngleRight,
  faCaretRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const SmallNav = () => {
  const pathName = usePathname();

  return (
    <div className="flex gap-x-3 items-center">
      <Link
        href={"/"}
        className="p-2 hover:bg-gray-100 text-brightGreen rounded-full w-7 h-7 hover:first:text-green-800 relative"
      >
        <FontAwesomeIcon icon={faHome} className="w-4 h-4 center-absolutely " />
      </Link>
      <FontAwesomeIcon icon={faAngleRight} className="w-3 h-3 text-gray-400" />
      <p className="bg-gray-100 text-brightGreen text-sm py-2 px-5 rounded-full capitalize">
        {pathName === "/" ? "Introduction" : pathName.replace("/", "")}
      </p>
    </div>
  );
};
