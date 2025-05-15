import Link from "next/link";
import Image from "next/image";
import ObitWriterForm from "@/components/organisms/ObitWriterForm/ObitWriterForm";
import LeadIn from "@/components/molecules/LeadIn";
import LegacySection from "@/components/organisms/LegacySection/LegacySection";

export default async function IndexPage() {
  return (
    <main className="flex items-center bg-white flex-col">
      <LeadIn
        bgImage="https://www.legacy.com/static/globalassets/obit-writer/legacy-hug-hero.jpg"
        title="ObitWriter"
        enableShare={false}
      />
      <section className="px-4 min-w-full sm:px-6 py-8 space-y-6 sm:min-w-175">
        <ObitWriterForm />
      </section>
      <LegacySection />
    </main>
  );
}
