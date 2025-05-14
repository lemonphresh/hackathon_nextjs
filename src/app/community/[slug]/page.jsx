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
  console.log({ data });
  const { community } = data;
  const { name, bgColor, logo } = community;
  const communityLogo = logo
    ? urlFor(logo)?.width(300).height(300).url()
    : null;

  return (
    <main className="container mx-auto grid gap-12 p-12">
      <div className="mb-4">
        <Link href="/">← Back to community list</Link>
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className={`grid p-5 items-top gap-12 rounded-xl sm:grid-cols-2`}
      >
        {communityLogo ? (
          <Image
            src={communityLogo || "https://placehold.co/550x310/png"}
            alt={name || "Logo"}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-center sm:w-full"
            height={150}
            width={150}
          />
        ) : null}
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
            {name ? (
              <h1 className="text-4xl font-bold tracking-tighter mb-8">
                {name}
              </h1>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
