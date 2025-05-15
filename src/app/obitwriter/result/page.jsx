"use client";

import Container from "@/components/atoms/Container";
import { useObitWriter } from "@/components/contexts/ObitWriter";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function IndexPage() {
  const { formData } = useObitWriter();
  const { firstName, lastName, dateOfDeath, obituary } = formData;
  const router = useRouter();

  useEffect(() => {
    if (!firstName || !lastName || !dateOfDeath || !obituary) {
      router.push("/obitwriter/obituary");
    }
  }, [firstName, lastName, dateOfDeath, obituary, router]);

  if (!firstName || !lastName || !dateOfDeath || !obituary) return null;

  return (
    <main className="flex items-center bg-gray-100 min-h-screen flex-col px-4 gap-12">
      <Container className="w-full md:min-w-150">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Obituary</h1>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Name: {firstName} {lastName}
        </h2>
        <h4 className="text-lg text-gray-700 mb-4">
          Date of Death: {dateOfDeath}
        </h4>
        <p className="text-gray-600">{obituary}</p>
      </Container>
      <Link href="/obitwriter/obituary">← Back to form</Link>
    </main>
  );
}
