"use client";

import { useEffect, useState, useCallback } from "react";
import { Registration } from "@/types/registration";
import {
  FiDownload,
  FiRefreshCw,
  FiSearch,
  FiMail,
  FiPhone,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import { StitchFooter, StitchNav } from "@/components/stitch/StitchChrome";
import { stitchMain, stitchPage, stitchSectionCard } from "@/lib/stitch-ui";

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const fetchRegistrations = useCallback(async () => {
    try {
      const timestamp = Date.now();
      const response = await fetch(`/api/registrations?_t=${timestamp}`, {
        cache: "no-store",
        method: "GET",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const regs = data.registrations || [];
      setRegistrations(regs);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRegistrations();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchRegistrations();
      }
    };

    const handleFocus = () => {
      fetchRegistrations();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, [fetchRegistrations]);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const exportToCSV = () => {
    const headers = [
      "Full Name",
      "Email",
      "Phone",
      "Organization/Company",
      "Job Title/Role and Degree",
      "Questions/Comments",
      "Registration Date",
    ];

    const rows = filteredRegistrations.map((reg) => [
      reg.fullName,
      reg.email,
      reg.phone,
      reg.organization || "",
      reg.jobTitleDegree || "",
      reg.questions || "",
      new Date(reg.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `workshop-registrations-${new Date().toISOString().split("T")[0]}.csv`,
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRegistrations = registrations.filter((reg) => {
    const term = searchTerm.toLowerCase();
    return (
      reg.fullName.toLowerCase().includes(term) ||
      reg.email.toLowerCase().includes(term) ||
      (reg.organization && reg.organization.toLowerCase().includes(term)) ||
      (reg.jobTitleDegree && reg.jobTitleDegree.toLowerCase().includes(term))
    );
  });

  const totalRegistrations = registrations.length;

  if (loading) {
    return (
      <div className={stitchPage}>
        <StitchNav highlight="neutral" />
        <main
          className={`${stitchMain} flex flex-grow flex-col items-center justify-center py-24`}
        >
          <FiRefreshCw className="mb-4 animate-spin text-4xl text-stitch-primary" />
          <p className="text-stitch-on-surface-variant">Loading registrations…</p>
        </main>
        <StitchFooter />
      </div>
    );
  }

  return (
    <div className={stitchPage}>
      <StitchNav highlight="neutral" />

      <main className={`${stitchMain} flex flex-col gap-stack-lg pt-4 md:pt-6`}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-stitch-on-surface">
              Admin dashboard
            </h1>
            <p className="text-stitch-on-surface-variant">
              Manage workshop registrations
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-stitch-surface-container-high px-4 py-2 text-sm font-semibold text-stitch-on-surface transition-colors hover:bg-stitch-surface-container-highest"
          >
            <FiLogOut />
            Logout
          </button>
        </div>

        <div className={stitchSectionCard}>
          <h3 className="mb-2 text-sm font-medium text-stitch-on-surface-variant">
            Total registrations
          </h3>
          <p className="text-3xl font-bold text-stitch-primary" key={totalRegistrations}>
            {totalRegistrations}
          </p>
        </div>

        <div className={stitchSectionCard}>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-stitch-outline" />
              <input
                type="text"
                placeholder="Search by name, email, organization…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-stitch-outline-variant bg-stitch-surface-variant py-2.5 pl-10 pr-4 text-sm text-stitch-on-surface outline-none focus:border-stitch-primary focus:ring-1 focus:ring-stitch-primary"
              />
            </div>
            <button
              type="button"
              onClick={() => fetchRegistrations()}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-stitch-surface-container-high px-4 py-2 text-sm font-semibold text-stitch-on-surface transition-colors hover:bg-stitch-surface-container-highest"
            >
              <FiRefreshCw />
              Refresh
            </button>
            <button
              type="button"
              onClick={exportToCSV}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-stitch-secondary-container px-4 py-2 text-sm font-semibold text-stitch-on-secondary-container shadow-[0_0_12px_rgba(238,152,0,0.2)] hover:shadow-[0_0_18px_rgba(238,152,0,0.35)]"
            >
              <FiDownload />
              Export CSV
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-stitch-surface-container shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-stitch-surface-container-high">
                <tr>
                  {["Name", "Contact", "Organization", "Job title / degree", "Registered"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-stitch-on-surface-variant"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredRegistrations.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-8 text-center text-stitch-on-surface-variant"
                    >
                      No registrations found
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map((reg) => (
                    <tr
                      key={reg.id}
                      className="transition-colors hover:bg-stitch-surface-container-high/50"
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <FiUser className="mr-2 text-stitch-outline" />
                          <span className="text-sm font-medium text-stitch-on-surface">
                            {reg.fullName}
                          </span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-1 text-sm text-stitch-on-surface">
                          <FiMail className="text-stitch-outline" />
                          {reg.email}
                        </div>
                        <div className="mt-1 flex items-center gap-1 text-sm text-stitch-on-surface-variant">
                          <FiPhone className="text-stitch-outline" />
                          {reg.phone}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-stitch-on-surface">
                        {reg.organization || "—"}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-stitch-on-surface">
                        {reg.jobTitleDegree || "—"}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-stitch-on-surface-variant">
                        {new Date(reg.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {filteredRegistrations.length > 0 && (
          <p className="text-sm text-stitch-on-surface-variant">
            Showing {filteredRegistrations.length} of {registrations.length}{" "}
            registrations
          </p>
        )}
      </main>

      <StitchFooter />
    </div>
  );
}
