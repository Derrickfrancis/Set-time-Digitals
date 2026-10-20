"use server";

import { headers } from "next/headers";
import { validateContact } from "@/lib/validate";
import { rateLimit } from "@/lib/rateLimit";
import { sendContactEmail } from "@/lib/mailer";

// Runs on the server when the contact form is submitted.
export async function submitContact(previousState, formData) {
  // 1. Spam trap: real people never see or fill the hidden "bot_trap" field.
  //    We pretend it worked so bots learn nothing.
  if (formData.get("bot_trap")) {
    return { status: "success" };
  }

  // 2. Bots submit instantly. Real people need a few seconds to type.
  const startedAt = Number(formData.get("startedAt"));
  if (!startedAt || Date.now() - startedAt < 3000) {
    return {
      status: "error",
      message: "Something went wrong. Please try again in a moment.",
    };
  }

  // 3. Limit how often one visitor can send messages.
  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0].trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";
  if (!rateLimit(ip)) {
    return {
      status: "error",
      message:
        "You have sent several messages recently. Please wait a few minutes, or message us on WhatsApp.",
    };
  }

  // 4. Check every field again on the server.
  const { values, errors, ok } = validateContact(formData);
  if (!ok) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values,
    };
  }

  // 5. Send the email. If it fails, log the real reason privately and show a safe message.
  try {
    await sendContactEmail(values);
  } catch (error) {
    console.error(
      "Contact form email failed:",
      error.message,
      error.cause?.code || error.cause || "",
    );
    return {
      status: "error",
      message:
        "We could not send your message right now. Please message us on WhatsApp or try again later.",
      values,
    };
  }

  return { status: "success" };
}
