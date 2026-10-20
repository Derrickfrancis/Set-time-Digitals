// Checks and cleans what a visitor typed into the contact form.
// This runs on the SERVER, so it cannot be skipped by editing the page in the browser.

export const TOPICS = {
  program: "Program enquiry",
  quote: "Business quote",
  other: "Something else",
};

// Removes invisible control characters but keeps normal line breaks and tabs.
const clean = (value) =>
  String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();

// For single-line fields: also turns line breaks into spaces, so nobody can
// sneak extra email headers into the subject line.
const oneLine = (value) => clean(value).replace(/\s+/g, " ");

export function validateContact(formData) {
  const values = {
    name: oneLine(formData.get("name")),
    email: oneLine(formData.get("email")).toLowerCase(),
    phone: oneLine(formData.get("phone")),
    topic: clean(formData.get("topic")),
    message: clean(formData.get("message")),
  };

  const errors = {};

  if (values.name.length < 2 || values.name.length > 80) {
    errors.name = "Please enter your name (2 to 80 characters).";
  }
  if (
    values.email.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone && !/^[0-9+()\-\s]{7,30}$/.test(values.phone)) {
    errors.phone = "Use digits, spaces and + ( ) - only.";
  }
  if (!Object.hasOwn(TOPICS, values.topic)) {
    errors.topic = "Please choose what your message is about.";
  }
  if (values.message.length < 10 || values.message.length > 2000) {
    errors.message = "Please write a message of 10 to 2000 characters.";
  }

  return { values, errors, ok: Object.keys(errors).length === 0 };
}
