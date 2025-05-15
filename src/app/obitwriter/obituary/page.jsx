import Link from "next/link";
import Image from "next/image";
import ObitWriterForm from "@/components/organisms/ObitWriterForm/ObitWriterForm";

export default async function IndexPage() {
  return (
    <main className="flex bg-gray-100 min-h-screen flex-col gap-12">
      <div className="px-4 sm:px-16">
        <ObitWriterForm />
      </div>
    </main>
  );
}
