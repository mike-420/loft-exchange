import GreenLine from "@/components/GreenLine";
import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";
import React from "react";

const Gretesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const neighborhoodList = [
  "Arts District",
  "Bunker Hill",
  "Central City West",
  "Chinatown",
  "Civic Center",
  "Fashion District",
  "Financial District",
  "Historic Core",
  "Little Tokyo",
  "South Park",
];

const Page = () => {
  return (
    <div className="bg-white min-h-[150vh]">
      <div>
        <GreenLine />

        <img
          src="/neighborhood/BunkerHill.jpg"
          alt=""
          className="object-cover max-h-[441px] w-full max-w-[2500px] mx-auto"
        />

        <GreenLine />
      </div>
      <div className="max-w-screen-1440px mx-auto px-4 sm:px-12 md:px-16 flex flex-col gap-4 w-full">
        <div className="py-6">
          <p
            className={`text-black ${Gretesque.className} font-light leading-[22px]`}
          >
            Home {">"} Downtown Neighborhoods {">"} South Park
          </p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 max-w-[185px] mt-16">
            <h1 className="text-lg text-gray-800 font-medium">
              Other Downtown Neighborhoods
            </h1>
            <div className="max-w-[148px] flex flex-col gap-1 divide-y divide-gray-300">
              {neighborhoodList.map((list, index) => (
                <Link
                  href={list.toLowerCase().replace(/\s+/g, "-")}
                  key={index}
                  className="text-gray-700 py-2 text-sm hover:text-gray-400 transition-colors"
                >
                  {list}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-1 shrink-0 flex-col gap--9">
            <h1 className="uppercase text-xl leading-9 text-gray-900">
              Lofts and Condos in south park
            </h1>
          </div>
          <div className="max-w-[364px] flex w-full mt-16">
            <img
              src="/neighborhood/maps/arts-district-map-large.jpg"
              alt="Map"
              className="w-full object-cover rounded-lg max-h-[274px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
