import Link from "next/link";
import Image from "next/image";
import React from "react";

const links = [
  {
    id: 2,
    title: "Room-type",
    url: "/room-type",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Services",
    url: "/services",
  },
  {
    id: 5,
    title: "Testimonials",
    url: "/testimonials",
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 ">
      <Link href="/">
        <Image src="/logo-blue.svg" alt="logo" width={200} height={200} />
      </Link>
      <div className="md:flex hidden flex-1 justify-end gap-36       items-center pb-6 border-b border-customColor1 text-customColor1 text-xl font-semibold -mt-44 cursor-pointer">
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
