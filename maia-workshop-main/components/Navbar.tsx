"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 text-neutral-900 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/logoAIA26.png"
                alt="AiA26 Conference Logo"
                width={40}
                height={40}
                className="object-contain transition-transform group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-primary-700">
                  AiA26
                </span>
                <span className="hidden text-xs text-neutral-500 sm:block">
                  7th International Conference
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden items-center space-x-1 md:flex">
            {[
              ["/", "Home"],
              ["/register", "Register"],
              ["/about", "About"],
              ["/conference", "Conference"],
              ["/faq", "FAQ"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary-600 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="animate-slide-down md:hidden">
          <div className="space-y-1 border-t border-neutral-200 bg-white px-4 pb-4 pt-2 shadow-lg">
            {[
              ["/", "Home"],
              ["/register", "Register"],
              ["/about", "About"],
              ["/conference", "Conference"],
              ["/faq", "FAQ"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
