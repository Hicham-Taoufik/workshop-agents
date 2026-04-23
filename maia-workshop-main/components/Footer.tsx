import { FiMapPin, FiCalendar } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-ds-bg text-ds-on">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block mb-4 group">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logoAIA26.png"
                  alt="AiA26 Conference Logo"
                  width={50}
                  height={50}
                  className="object-contain group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="font-display text-2xl font-bold text-ds-primary">
                    AiA26
                  </h3>
                  <p className="text-xs text-ds-outline">International Conference</p>
                </div>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-ds-muted">
              The 7th International Conference on Artificial Intelligence Applications (AiA26), featuring keynotes, oral presentations, and poster sessions.
            </p>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-ds-outline">
              Event Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <FiCalendar className="mt-0.5 shrink-0 text-ds-cta" />
                <div>
                  <p className="font-medium text-ds-on">June 12-13, 2026</p>
                  <p className="text-xs text-ds-outline">
                    Main conference day: June 13, 2026
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <FiMapPin className="mt-0.5 shrink-0 text-ds-cta" />
                <div>
                  <p className="font-medium text-ds-on">
                    Avenue Moulay Hassan, BP: 209 Martil - Tetouan
                  </p>
                  <p className="text-xs text-ds-outline">93150 Tetouan, Morocco</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-ds-outline md:flex-row">
            <p>Martil - Tetouan, Morocco</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

