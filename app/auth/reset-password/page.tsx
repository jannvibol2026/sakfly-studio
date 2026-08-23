"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail, CheckCircle2 } from "lucide-react";
import { AuthShell } from "@/components/sections/AuthShell";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";

export default function ResetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/auth/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.get("email") }),
      });
      if (!res.ok) throw new Error("Reset failed");
      setSent(true);
    } catch {
      setError("We couldn't process that request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Reset your password"
      subtitle="Enter your email and we'll send you a reset link."
    >
      {sent ? (
        <div className="flex flex-col items-center gap-3 text-center">
          <CheckCircle2 size={40} className="text-emerald-400" />
          <p className="text-sm text-slate-300">
            If an account exists for that email, a password reset link has been sent.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">
            <Mail size={16} />
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      )}
      <p className="mt-6 text-center text-sm text-slate-400">
        Remembered your password?{" "}
        <Link href="/auth/login" className="font-medium text-accent-light hover:underline">
          Back to log in
        </Link>
      </p>
    </AuthShell>
  );
}
