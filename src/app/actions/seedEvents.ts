"use server";

import { api } from "../../../convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";
import data from "../../../convex/sampleData.json";

export async function seedEvents(pass: string) {
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
  }
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const seedPass = process.env.SEED_PASS;
  console.log({ seedPass });
  console.log({ pass });

  if (seedPass === pass) {
    data.forEach(async (d) => {
      await convex.mutation(api.events.create, d);
      console.log("created:", d.name);
    });
    return true;
  } else {
    return false;
  }
}
