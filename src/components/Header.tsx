import { HEADER_LINKS, RSS_LINKS } from "@/constants";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="top-0 left-0 w-full z-50 flex items-center justify-evenly border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm py-5">
      <Link className="block w-[12rem] xl:mr-8" href="#hero">
        <h1 className="text-3xl">DetoxifyTools</h1>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {HEADER_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
        <Link href={RSS_LINKS[0].href}>
          <FaLinkedin size={30} />
        </Link>
        <Link href={RSS_LINKS[1].href}>
          <FaGithub size={30} />
        </Link>
        <Link href={RSS_LINKS[2].href}>
          <FaXTwitter size={30} />
        </Link>
      </ul>
    </div>
  );
};

export default Header;
