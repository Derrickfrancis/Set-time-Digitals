import { TOPICS } from "@/lib/validate";

// Sends the enquiry to your inbox using Resend (https://resend.com).
// The email is plain text only, so nothing a visitor types can run as code.
//
// Settings (put them in .env.local, never in the code):
//   RESEND_API_KEY      your Resend API key
//   CONTACT_TO_EMAIL    the inbox that receives enquiries
//   CONTACT_FROM_EMAIL  the sender shown on the email (optional)
export async function sendContactEmail({ name, email, phone, topic, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Website <onboarding@resend.dev>";

  const subject = `[Website] ${TOPICS[topic]} from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "not given"}`,
    `About: ${TOPICS[topic]}`,
    "",
    message,
  ].join("\n");

  // Email is not set up yet.
  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      // While you build the site, show the message in the terminal instead.
      console.log("\n--- Contact form (email not configured, so not sent) ---");
      console.log(
        `Subject: ${subject}\n${text}\n--------------------------------------------------------\n`,
      );
      return;
    }
    throw new Error(
      "Email is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL",
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    // reply_to lets you press Reply and answer the visitor directly.
    body: JSON.stringify({ from, to: [to], reply_to: email, subject, text }),
    signal: AbortSignal.timeout(8000), // give up after 8 seconds instead of making the visitor wait
  });

  if (!response.ok) {
    // Resend explains the problem in the response. It is only logged in your terminal;
    // visitors never see it.
    const detail = await response.text().catch(() => "");
    throw new Error(
      `Email provider returned status ${response.status}: ${detail.slice(0, 300)}`,
    );
  }
}
