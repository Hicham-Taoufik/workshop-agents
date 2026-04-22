import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiMapPin, FiUser, FiArrowRight, FiExternalLink, FiClock } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Workshop Banner */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-2.5 border-b border-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm">
            <span className="font-medium">ORCHESTRATING THE AGENTIC SHIFT</span>
            <span className="hidden md:inline text-primary-300">•</span>
            <span className="text-primary-100">16 MAY 2026 • FACULTY OF SCIENCE TETOUAN</span>
            <span className="hidden md:inline text-primary-300">•</span>
            <Link
              href="/about"
              className="flex items-center gap-1.5 font-medium hover:text-accent-300 transition-colors"
            >
              View Event Details <FiExternalLink className="text-xs" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white space-y-6 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <FiClock className="text-accent-300" />
                <span>16 MAY 2026 • 8:00 AM</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                AGENTIC AI
                <span className="block text-accent-300 mt-2">LLM Selection, Inference and GPU-Aware Systems</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-xl">
                Build your own agentic proof-of-concept and move from chatbots to agentic minds through advanced RAG pipelines and open-source power.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-600 transition-all duration-300 shadow-medium hover:shadow-hard hover:scale-105"
                >
                  Register Now
                  <FiArrowRight />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                  <span className="text-primary-200">Free Attendance</span>
                </div>
              </div>
            </div>

            {/* Right Column - Logo & Info */}
            <div className="flex flex-col items-center space-y-8 animate-fade-in">
              <div className="bg-white p-8 rounded-2xl shadow-hard">
                <Image
                  src="/images/logoAIA26.png"
                  alt="AGENTIC AI Workshop"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-neutral-50 py-12 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 group">
              <div className="bg-primary-100 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <FiCalendar className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1 font-display">Date</h3>
                <p className="text-neutral-700 font-medium">16 MAY 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-primary-100 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <FiMapPin className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1 font-display">Location</h3>
                <p className="text-neutral-700 font-medium">FACULTY OF SCIENCE TETOUAN</p>
                <p className="text-sm text-neutral-500 mt-1">Tetouan, Morocco</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-primary-100 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <FiUser className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1 font-display">Format</h3>
                <p className="text-neutral-700 font-medium">In-Person Workshop</p>
                <p className="text-sm text-neutral-500 mt-1">Practical + strategic sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workshop overview: image outside card, full height beside content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row lg:items-stretch gap-6 lg:gap-8">
            {/* Visual — same height as content card (stretch) */}
            <aside className="w-full lg:w-[min(52%,34rem)] xl:w-[min(50%,40rem)] 2xl:w-[min(48%,46rem)] shrink-0 flex min-h-[260px] sm:min-h-[300px] lg:min-h-0">
              <div className="flex-1 w-full rounded-2xl border-2 border-primary-100 bg-gradient-to-br from-blue-50 to-white shadow-soft overflow-hidden flex items-stretch min-h-[240px] lg:min-h-full">
                <img
                  src="/images/Blue%20Modern%20Business%20Workshop%20Instagram%20Post.svg"
                  alt="Workshop — Agentic AI in practice"
                  className="w-full h-full object-contain object-center p-2 sm:p-3 lg:p-4"
                  width={1200}
                  height={1200}
                />
              </div>
            </aside>

            {/* Content card */}
            <div className="relative flex-1 min-w-0 bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 rounded-2xl p-6 sm:p-8 md:p-12 shadow-soft hover:shadow-hard transition-all duration-300">
              <div className="absolute top-0 right-0 -mt-3 -mr-3 z-10">
                <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Workshop
                </div>
              </div>

              <div className="space-y-8 pt-2">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 font-display">
                  BUILD YOUR OWN AGENTIC PROOF-OF-CONCEPT
                </h3>
                <p className="text-lg text-primary-700 font-semibold mb-3">Hands-on architecture and implementation</p>
                <p className="text-neutral-700 leading-relaxed">
                  Learn to design and deploy a practical agentic workflow that combines orchestration, LLM calls, retrieval, and action loops.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">What You&apos;ll Learn</h4>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">▸</span>
                    <span>From chatbots to &quot;agentic minds&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">▸</span>
                    <span>Advanced RAG pipelines with robust retrieval design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">▸</span>
                    <span>Open-source power for experimentation and scale</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-primary-200 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 font-display">
                  ORCHESTRATING THE AGENTIC SHIFT
                </h3>
                <p className="text-lg text-primary-700 font-semibold mb-4">Strategy, system design, and implementation readiness</p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-900 leading-relaxed">
                    <strong>Workshop focus:</strong> Selecting the right models, building efficient inference stacks, and aligning architecture with available GPU resources.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-primary-200 pt-8">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-600 p-3 rounded-xl">
                    <FiUser className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">TAOUFIK HICHAM</p>
                    <p className="text-sm text-neutral-600">Artificial Intelligence Specialist</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-xs font-semibold">LLM Selection</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-xs font-semibold">Inference</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-xs font-semibold">GPU-Aware Systems</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-xs font-semibold">RAG</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to Build Agentic Systems?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the AGENTIC AI workshop and turn modern AI capabilities into practical, GPU-aware solutions.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-3 bg-accent-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all duration-300 shadow-hard hover:scale-105"
          >
            Secure Your Spot
            <FiArrowRight className="text-xl" />
          </Link>
          <p className="mt-6 text-primary-200 text-sm">
            Limited seats available • 16 MAY 2026 • 8:00 AM
          </p>
        </div>
      </section>
    </div>
  );
}

