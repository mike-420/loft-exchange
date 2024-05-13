import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import React from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const names = ["Arts District", "Bunker Hill", "Central City West"];

const NeighborhoodCard = ({ link, name }: { link: string; name: string }) => {
  return (
    <Link href={`/neighborhoods/${link}-downtown-la`}>
      <article
        className={`h-[300px] relative flex items-center justify-center overflow-hidden ${SourceSans.className}`}
      >
        <img
          src="https://images.unsplash.com/photo-1576694541627-114e57070466?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Arts District"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="bg-black/60 w-full h-full absolute inset-0" />
        <p className="text-white relative z-10 text-[38px] leading-[48px]">
          {name}
        </p>
      </article>
    </Link>
  );
};

const Neighborhoods = () => {
  return (
    <section className="flex flex-col gap-[54px]">
      <h1 className="text-[32px] leading-10 text-black text-center">
        The Neighborhoods
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3px] w-full">
        {names.flatMap((loc, index) =>
          Array.from({ length: 3 }, (_, i) => (
            <NeighborhoodCard
              name={loc}
              link={loc.toLowerCase().replace(/\s+/g, "-")}
              key={`${index}-${i}`}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Neighborhoods;
