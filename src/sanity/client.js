import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "i5b5f1yn",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});
