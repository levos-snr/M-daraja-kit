//package import
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

// local import
import logo from "../public/logo.png";

export const Navbar = () => {
  return (
    <nav className="flex bg-myBgColor items-center px-6 justify-between border-b-2 border-b-myLightGreen py-3 h-[8%] ">
      <Link href="/" className="flex gap-x-3 items-center">
        <Image src={logo} alt="logo" className="h-10 w-10 object-cover" />
        <p className="font-semibold text-sm text-myTextColor">
          M-Daraja-Kit Docs
        </p>
      </Link>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faGithub}
          className="h-10 w-10 object-cover bg-myWhite rounded-full"
        />{" "}
      </a>
    </nav>
  );
};
