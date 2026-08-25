"use client";

import { FormEvent, useState } from "react";

export function NotifyForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    try {
      const response = await fetch("/site/notify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ event: "subscriber.added", email, surfaceToCeo: false }) });
      if (!response.ok) throw new Error("Unable to subscribe");
      setState("success"); setEmail("");
    } catch { setState("error"); }
  }

  return <form className={`notify-form ${compact ? "compact" : ""}`} onSubmit={submit}>
    <label className="sr-only" htmlFor="email">Email address</label>
    <input id="email" type="email" required placeholder="you@yourauthorwebsite.com" value={email} onChange={(event) => setEmail(event.target.value)} />
    <button className="button button-gold" disabled={state === "loading"}>{state === "loading" ? "Joining…" : "Notify me"}</button>
    {state === "success" && <p className="form-note success">You’re on the list. We’ll be in touch.</p>}
    {state === "error" && <p className="form-note">Something went wrong. Please try again.</p>}
  </form>;
}
