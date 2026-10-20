"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/contact/actions";
import { TOPICS } from "@/lib/validate";

const initialState = { status: "idle" };

const inputClass =
  "mt-1 w-full rounded-md border border-fg/40 bg-bg px-4 py-3 text-base text-fg placeholder:text-muted";

// Connects an input to its error message for screen readers.
const describe = (id, error) => ({
  "aria-invalid": error ? "true" : undefined,
  "aria-describedby": error ? `${id}-error` : undefined,
});

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="font-medium">
        {label}
        {optional && (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 text-sm text-red-700 dark:text-red-300"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );
  const startedAt = useRef(0);

  // Remember when the visitor opened the form (used to spot bots that submit instantly).
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function handleAction(formData) {
    formData.set("startedAt", String(startedAt.current));
    return formAction(formData);
  }

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-line bg-surface p-8"
      >
        <h2 className="font-display text-2xl font-bold text-primary">
          Message sent
        </h2>
        <p className="mt-3 text-muted">
          Thank you. We will reply to your email as soon as we can.
        </p>
      </div>
    );
  }

  const errors = state.errors || {};
  const values = state.values || {};

  return (
    <form action={handleAction} className="relative space-y-5">
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-md border border-red-700 p-4 text-red-700 dark:border-red-300 dark:text-red-300"
        >
          {state.message}
        </p>
      )}

      {/* Spam trap: hidden from people and screen readers, but bots fill it in. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Leave this field empty
          <input
            type="text"
            name="bot_trap"
            tabIndex={-1}
            autoComplete="off"
            data-lpignore="true"
            data-1p-ignore="true"
          />
        </label>
      </div>

      <Field id="name" label="Your name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          defaultValue={values.name}
          className={inputClass}
          {...describe("name", errors.name)}
        />
      </Field>

      <Field id="email" label="Email address" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={120}
          autoComplete="email"
          defaultValue={values.email}
          className={inputClass}
          {...describe("email", errors.email)}
        />
      </Field>

      <Field id="phone" label="Phone number" optional error={errors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={30}
          autoComplete="tel"
          defaultValue={values.phone}
          className={inputClass}
          {...describe("phone", errors.phone)}
        />
      </Field>

      <Field
        id="topic"
        label="What is your message about?"
        error={errors.topic}
      >
        <select
          id="topic"
          name="topic"
          required
          defaultValue={values.topic || ""}
          className={inputClass}
          {...describe("topic", errors.topic)}
        >
          <option value="" disabled>
            Choose one
          </option>
          {Object.entries(TOPICS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          defaultValue={values.message}
          className={inputClass}
          {...describe("message", errors.message)}
        />
      </Field>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-fg transition hover:opacity-90 disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send message"}
        </button>
        <p className="mt-3 text-sm text-muted">
          We only use your details to reply to your message.
        </p>
      </div>
    </form>
  );
}
