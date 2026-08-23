"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { AuthShell, GoogleButton, AuthDivider } from "@/components/sections/AuthShell";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");
    const confirm = formData.get("confirmPassword");
    if (password !== confirm) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password,
        }),
      });
      if (!res.ok) throw new Error("Registration failed");
      window.location.href = "/app/dashboard";
    } catch {
      setError("Something went wrong creating your account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell title="Create your account" subtitle="Start generating with SAKFLY Studio for free.">
      <GoogleButton />
      <AuthDivider />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" />
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required minLength={8} placeholder="••••••••" />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input id="confirmPassword" name="confirmPassword" type="password" required minLength={8} placeholder="••••••••" />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <Button type="submit" disabled={loading} className="w-full">
          <UserPlus size={16} />
          {loading ? "Creating account..." : "Create Free Account"}
        </Button>
        <p className="text-center text-xs text-slate-500">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-accent-light hover:underline">Terms</Link> and{" "}
          <Link href="/privacy" className="text-accent-light hover:underline">Privacy Policy</Link>.
        </p>
      </form>
      <p className="mt-6 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link href="/auth/login" className="font-medium text-accent-light hover:underline">
          Log in
        </Link>
      </p>
    </AuthShell>
  );
}
