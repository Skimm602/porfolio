"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const inputBase =
  "w-full border-b border-line bg-transparent py-4 font-body text-lg text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none transition-colors";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(data: { name: string; email: string; message: string }) {
    const next: Errors = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Please enter a valid email address.";
    if (!data.message.trim()) next.message = "Please add a short message.";
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const next = validate(data);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry — ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name}\n${data.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div>
        <label htmlFor="name" className="label">Name <span aria-hidden className="text-ink">*</span></label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={`${inputBase} mt-2`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-2 font-mono text-xs text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="label">Email <span aria-hidden className="text-ink">*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          className={`${inputBase} mt-2`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-2 font-mono text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="label">Message <span aria-hidden className="text-ink">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell me about the opportunity or project…"
          className={`${inputBase} mt-2 resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-2 font-mono text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-widest2 text-paper transition-colors duration-300 ease-editorial hover:bg-secondary"
        >
          Send Message
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
        <p aria-live="polite" className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
          {sent ? "Opening your email app…" : "Opens in your email client"}
        </p>
      </div>
    </form>
  );
}
