"use server";

import { stripe } from "@/lib/stripe";

// this link will be used by users when they need to login to their profile.
export async function createStripeConnectLoginLink(stripeAccountId: string) {
  if (!stripeAccountId) {
    throw new Error("No Stripe account ID provided");
  }

  try {
    const loginLink = await stripe.accounts.createLoginLink(stripeAccountId);
    return loginLink.url;
  } catch (error) {
    console.error("Error creating Stripe Connect login link:", error);
    throw new Error("Failed to create Stripe Connect login link");
  }
}
