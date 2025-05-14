import Link from "next/link";
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";

import Image from "next/image";

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
  console.log({ data });
  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Community List</h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {data.map((comm) => (
          <li
            className={`hover:underline flex shadow-md bg-gray-50 flex-row items-center rounded-lg`}
            key={comm._id}
          >
            <Link
              className="hover:underline w-full flex flex-row  p-4 items-center"
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
    </main>
  );
}
