"use client";

import { useState, useEffect, useRef } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const loadTime = useRef(0);
  const submissionId = useRef("");

  useEffect(() => {
    loadTime.current = Date.now();
    submissionId.current = crypto.randomUUID();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service_needed: data.get("message"),
          company_website: data.get("company_website"),
          elapsed_ms: Date.now() - loadTime.current,
          submission_id: submissionId.current,
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        loadTime.current = Date.now();
        submissionId.current = crypto.randomUUID();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <p className="font-heading text-xl font-semibold text-green-800 mb-2">Thank you!</p>
        <p className="text-green-700">
          Your consultation request has been received. We\u2019ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — invisible to humans, bots fill it */}
      <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
        <label>
          Company Website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div>
        <label htmlFor="name" className="block font-heading font-semibold mb-1 text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-heading font-semibold mb-1 text-navy">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-heading font-semibold mb-1 text-navy">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-heading font-semibold mb-1 text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or call us at (323) 709-8818.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-navy text-white font-semibold px-8 py-3 rounded-full hover:bg-accent transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
