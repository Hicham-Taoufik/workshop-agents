"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const STITCH_SHELL_ROUTES = [
  "/",
  "/about",
  "/register",
  "/conference",
  "/contact",
  "/faq",
  "/confirmation",
  "/admin",
  "/admin/login",
];

/**
 * Stitch-themed routes ship their own nav + footer; others use global Navbar + Footer.
 */
export default function AppChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  // During hydration, pathname can be temporarily empty. Default to Stitch shell
  // to avoid server/client chrome mismatches on Stitch-routed pages.
  const stitchShell = !pathname || STITCH_SHELL_ROUTES.includes(pathname);

  return (
    <>
      {!stitchShell && <Navbar />}
      {stitchShell ? (
        children
      ) : (
        <main className="min-h-screen">{children}</main>
      )}
      {!stitchShell && <Footer />}
    </>
  );
}
