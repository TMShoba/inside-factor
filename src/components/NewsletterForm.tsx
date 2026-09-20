"use client";

import { useState } from "react";

export default function NewsletterForm({
  variant = "default",
}: {
  variant?: "default" | "footer" | "inline";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setMessage(data.message || "You're subscribed. Thank you.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to subscribe");
    }
  }

  const isFooter = variant === "footer";
  const isInline = variant === "inline";

  if (status === "success") {
    return (
      <div
        className={`rounded-lg px-4 py-3 text-sm ${
          isFooter
            ? "bg-white/10 text-white"
            : "bg-green-50 text-green-800 border border-green-200"
        }`}
      >
        {message}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={isInline ? "flex flex-col sm:flex-row gap-2" : "space-y-3"}
    >
      {!isInline && (
        <div>
          <h3 className={`font-bold ${isFooter ? "text-white" : "text-gray-900"}`}>
            Stay informed
          </h3>
          <p className={`text-sm mt-1 ${isFooter ? "text-white/70" : "text-gray-600"}`}>
            Get the latest investigations and breaking news in your inbox.
          </p>
        </div>
      )}
      <div className={isInline ? "flex flex-1 gap-2" : "flex flex-col sm:flex-row gap-2"}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Your email address"
          className={`flex-1 px-3 py-2.5 text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/40 ${
            isFooter
              ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
              : "bg-white border-gray-300 text-gray-900"
          }`}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className={`text-sm ${isFooter ? "text-red-200" : "text-red-600"}`}>{message}</p>
      )}
    </form>
  );
}
