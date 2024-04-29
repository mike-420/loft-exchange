import Image from "next/image";
import Link from "next/link";
import React from "react";

const navData = ["Residential Buildings", "Neighborhoods", "About", "Contact"];

const Navbar = () => {
  return (
    <header className="h-[100px] flex items-center justify-between bg-white max-w-screen-1440px mx-auto px-12 gap-10 lg:pl-[72px] lg:pr-[120px]">
      <Image src={"/logo.png"} alt="Logo" width={140} height={78} />
      <div className="lg:w-3/4 md:flex items-center lg:items-end lg:mb-5 h-full justify-between gap-5 w-full hidden">
        {navData.map((nav, index) => {
          return (
            <Link
              href={"/"}
              className="lg:text-xl text-lg lg:leading-6 text-center text-black"
              key={index}
            >
              {nav}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
