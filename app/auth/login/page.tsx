"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { AuthShell, GoogleButton, AuthDivider } from "@/components/sections/AuthShell";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      if (!res.ok) throw new Error("Login failed");
      window.location.href = "/app/dashboard";
    } catch {
      setError("Invalid email or password. (Demo mode: any credentials work.)");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell title="Welcome back" subtitle="Log in to continue creating with SAKFLY Studio.">
      <GoogleButton />
      <AuthDivider />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/auth/reset-password" className="text-xs text-accent-light hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input id="password" name="password" type="password" required placeholder="••••••••" />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <Button type="submit" disabled={loading} className="w-full">
          <LogIn size={16} />
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-400">
        Don&apos;t have an account?{" "}
        <Link href="/auth/register" className="font-medium text-accent-light hover:underline">
          Sign up free
        </Link>
      </p>
    </AuthShell>
  );
}
