import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const PAGE_QUERY = defineQuery(`*[
    _type == "communityListing" &&
    community->slug.current == $slug
  ][0]{
    ...,
    community->
  }`);

export async function generateMetadata({ params }) {
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: await params,
  });
  return {
    title: `${data.name} Community Page`,
  };
}

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function EventPage({ params }) {
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: await params,
  });

  const { community } = data;
  const { name, bgColor, logo, type } = community;
  const communityLogo = logo
    ? urlFor(logo)?.width(300).height(300).url()
    : null;

  return (
    <main className="flex container bg-gray-100 min-h-screen flex-col min-w-full p-12 px-5 sm:px-12">
      <div className="mb-6">
        <Link href="/">← Back to community list</Link>
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className={`flex flex-row p-5 items-top gap-12 mx-auto max-w-600 items-center rounded-xl`}
      >
        {communityLogo && (
          <Image
            src={communityLogo || "https://placehold.co/550x310/png"}
            alt={name || "Logo"}
            className="aspect-square overflow-hidden rounded-xl object-center"
            height={150}
            width={150}
          />
        )}
        <div className="flex flex-col space-y-4">
          <div className="space-y-4">
            {name ? (
              <h1 className="text-4xl font-bold tracking-tighter mb-8">
                {name}
              </h1>
            ) : null}
            {type ? (
              <h1 className="text-2xl tracking-tighter mb-8">
                Community Type: {type}
              </h1>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
