import GreenLine from "@/components/GreenLine";
import { Bricolage_Grotesque } from "next/font/google";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Link from "next/link";

const Gretesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type BuildingInfo = {
  buildingName: string;
  streetAddress: string;
  zipCode: number;
  securedParking: boolean;
  pool: boolean;
  gym: boolean;
};

export interface NeighborhoodInfo {
  neighborhood: string;
  buildings?: BuildingInfo[];
  youtubeVideos?: string;
  mapLarge?: string;
  banner?: string;
}

async function fetchNeighborhoodData(): Promise<NeighborhoodInfo[]> {
  const filePath = path.join(process.cwd(), "src/neighborhood.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
}

export async function generateStaticParams() {
  const data = await fetchNeighborhoodData();
  return data.map((neighborhood) => ({
    slug: neighborhood.neighborhood.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function NeighborhoodPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchNeighborhoodData();

  const neighborhood = data.find(
    (neighborhood) =>
      neighborhood.neighborhood.toLowerCase().replace(/\s+/g, "-") ===
      params.slug
  );

  if (!neighborhood) {
    notFound();
  }

  const otherNeighborhoods = data.filter(
    (item) =>
      item.neighborhood.toLowerCase().replace(/\s+/g, "-") !== params.slug
  );
  console.log(data);
  return (
    <div className="bg-white min-h-[150vh]">
      <div>
        <GreenLine />

        <img
          src={neighborhood.banner}
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
            Home {">"} Downtown Neighborhoods {">"} {neighborhood.neighborhood}
          </p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 max-w-[185px] mt-16">
            <h1 className="text-lg text-gray-800 font-medium">
              Other Downtown Neighborhoods
            </h1>
            <div className="max-w-[148px] flex flex-col gap-1 divide-y divide-gray-300">
              {otherNeighborhoods.map((other, index) => (
                <Link
                  href={`/neighborhoods/${other.neighborhood
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  key={index}
                  className="text-gray-700 py-2 text-sm hover:text-gray-400 transition-colors"
                >
                  {other.neighborhood}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-1 shrink-0 flex-col gap-9">
            <h1 className="uppercase text-xl leading-9 text-gray-900">
              Lofts and Condos in {neighborhood.neighborhood}
            </h1>
            <div className="text-lg flex flex-col gap-10  text-black">
              {neighborhood.buildings?.map((building, index) => {
                return (
                  <div
                    className="flex flex-col gap-1 border p-4 rounded-lg"
                    key={index}
                  >
                    <span>Name: {building.buildingName}</span>
                    <span>Address: {building.streetAddress}</span>
                    <span>Zip: {building.zipCode}</span>
                    <span>Gym: {building.gym}</span>
                    <span>Parking: {building.securedParking}</span>
                    <span>Pool: {building.pool}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-w-[364px] flex w-full mt-16">
            <img
              src={neighborhood.mapLarge}
              alt="Map"
              className="w-full object-cover rounded-lg max-h-[274px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
