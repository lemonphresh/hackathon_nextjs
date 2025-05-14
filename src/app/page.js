import Link from "next/link";
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";
import LeadIn from "@/components/molecules/LeadIn";

const PAGE_QUERY = defineQuery(`*[
  _type == "community"
  && defined(slug.current)
]{_id, name, bgColor, logo, slug}`);

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function IndexPage() {
  const { data } = await sanityFetch({ query: PAGE_QUERY });

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col gap-12">
      <LeadIn title="Community List" />
      <div className="px-16">
        <h5 className="text-xl text-gray-500">{data.length} Results</h5>
        <hr className="my-8 text-gray-300" />
        <ul className="grid grid-cols-1 gap-10">
          {data.map((comm) => (
            <li
              className={`flex shadow-md bg-gray-50 hover:bg-gray-200 flex-row items-center rounded-lg`}
              key={comm._id}
            >
              <Link
                className="w-full flex flex-row  p-4 items-center"
                href={`/community/${comm?.slug?.current}`}
              >
                {comm.logo ? (
                  <Image
                    style={{ backgroundColor: comm.bgColor }}
                    src={urlFor(comm.logo)?.width(75).height(75).url()}
                    alt={comm.name || "Logo"}
                    className="aspect-square mr-4 p-1 overflow-hidden rounded-lg"
                    height={75}
                    width={75}
                  />
                ) : (
                  <div
                    className="w-[75px] h-[75px] mr-4 p-1 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: comm.bgColor }}
                  >
                    {comm.name
                      ?.split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                )}

                <h2 className="text-xl font-semibold">{comm?.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
