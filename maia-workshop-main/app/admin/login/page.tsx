"use client";

export const dynamic = "force-dynamic";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiLock, FiUser, FiKey, FiAlertTriangle } from "react-icons/fi";
import { StitchFooter, StitchNav } from "@/components/stitch/StitchChrome";
import {
  stitchField,
  stitchLabel,
  stitchMain,
  stitchPage,
  stitchSectionCard,
} from "@/lib/stitch-ui";

function AdminLoginInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Invalid credentials");
      }

      router.push(from);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={stitchPage}>
      <StitchNav highlight="neutral" />

      <main
        className={`${stitchMain} flex flex-grow flex-col items-center justify-center py-12`}
      >
        <div className={`${stitchSectionCard} w-full max-w-md`}>
          <div className="relative z-10 mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-stitch-primary-container/30 p-3 text-stitch-primary">
              <FiLock className="text-2xl" />
            </div>
            <div>
              <h1 className="font-headline-md text-headline-md text-stitch-on-surface">
                Admin access
              </h1>
              <p className="text-sm text-stitch-on-surface-variant">
                Enter your credentials to continue
              </p>
            </div>
          </div>

          {error && (
            <div className="relative z-10 mb-4 flex items-start gap-2 rounded-lg border border-stitch-error/40 bg-stitch-error-container/20 px-3 py-2 text-sm text-stitch-error">
              <FiAlertTriangle className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            <div>
              <label className={`${stitchLabel} mb-2 flex items-center gap-2`}>
                <FiUser className="text-stitch-outline" /> Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className={stitchField}
                placeholder="Admin username"
                autoComplete="username"
              />
            </div>

            <div>
              <label className={`${stitchLabel} mb-2 flex items-center gap-2`}>
                <FiKey className="text-stitch-outline" /> Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={stitchField}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-stitch-primary-container py-3 font-label-sm text-label-sm text-stitch-on-primary-container transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </main>

      <StitchFooter />
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className={stitchPage}>
          <StitchNav highlight="neutral" />
          <main
            className={`${stitchMain} flex flex-grow items-center justify-center py-24`}
          >
            <p className="text-stitch-on-surface-variant">Loading…</p>
          </main>
          <StitchFooter />
        </div>
      }
    >
      <AdminLoginInner />
    </Suspense>
  );
}
