import Image from "next/image";
import Link from "next/link";
import { StitchFooter, StitchNav } from "@/components/stitch/StitchChrome";
import { stitchMain, stitchPage, stitchSectionCard } from "@/lib/stitch-ui";

export default function ConferencePage() {
  const speakers = [
    { name: "Pr. Mohammad AL GHOBIRI", title: "AI Researcher" },
    { name: "Pr. Abdelaaziz EL HIBAOUI", title: "Machine Learning Expert" },
    {
      name: "Pr. Jose Ignacio CASTILLO-VELASQUEZ",
      title: "Data Science Specialist",
    },
  ];

  return (
    <div className={stitchPage}>
      <StitchNav highlight="conference" />

      <main className={`${stitchMain} flex flex-col gap-stack-lg pt-4 md:pt-6`}>
        <section className="relative overflow-hidden rounded-xl border border-white/10 bg-stitch-surface-container p-5 shadow-lg sm:p-8 md:p-12">
          <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-stitch-primary/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-14 -left-10 h-48 w-48 rounded-full bg-stitch-secondary/10 blur-2xl" />
          <div className="relative text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-stitch-primary md:text-sm">
              <span className="material-symbols-outlined text-[18px]">award_star</span>
              <span>7th Edition</span>
            </div>
            <div className="mb-6 flex justify-center">
              <div className="rounded-2xl border border-white/10 bg-stitch-surface-container-high p-3 shadow-md md:p-4">
                <Image
                  src="/images/logoAIA26.png"
                  alt="AiA26 Conference Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-stitch-on-surface">
              7th AiA26
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-body-lg text-body-lg text-stitch-on-surface-variant">
              International Conference on Artificial Intelligence Applications
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-stitch-on-surface-variant">
              <span className="rounded-full border border-white/10 bg-stitch-surface-container-low px-4 py-2">
                ENS, Abdelmalek Essaadi University · Martil / Tetouan, Morocco
              </span>
              <span className="rounded-full border border-white/10 bg-stitch-surface-container-low px-4 py-2">
                June 13th, 2026
              </span>
            </div>
          </div>
        </section>

        <section
          className={`${stitchSectionCard} border-stitch-outline-variant/30 p-5 sm:p-6 md:p-8 lg:p-10`}
        >
          <h2 className="mb-4 font-headline-lg text-headline-lg text-stitch-on-surface">
            Conference overview
          </h2>
          <p className="mb-4 font-body-lg text-body-lg text-stitch-on-surface-variant">
            The 7th International Conference on Artificial Intelligence
            Applications (AiA26) takes place on{" "}
            <span className="text-stitch-on-surface">June 13th, 2026</span>, hosted
            at the École Normale Supérieure (ENS), Abdelmalek Essaadi University,
            Tetouan, Morocco.
          </p>
          <p className="font-body-md text-body-md text-stitch-on-surface-variant">
            The program features invited keynotes, oral presentations, and poster
            sessions—bringing together best practices, novel algorithms, and
            research in AI design, implementation, modeling, analysis, verification,
            and applications.
          </p>
        </section>

        <section className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "groups", label: "Participants", value: "400+" },
            { icon: "public", label: "Countries", value: "7+" },
            { icon: "menu_book", label: "Publications", value: "120" },
            { icon: "military_tech", label: "Awards", value: "18" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-stitch-surface-container p-5 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-2 flex items-center gap-2 text-stitch-primary">
                <span className="material-symbols-outlined">{s.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wide text-stitch-on-surface-variant">
                  {s.label}
                </span>
              </div>
              <p className="text-3xl font-bold text-stitch-on-surface">{s.value}</p>
            </div>
          ))}
        </section>

        <section className={stitchSectionCard}>
          <h2 className="mb-5 font-headline-md text-headline-md text-stitch-on-surface">
            Featured speakers
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container-low p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="font-bold text-stitch-on-surface">{speaker.name}</h3>
                <p className="mt-1 text-sm text-stitch-on-surface-variant">
                  {speaker.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container p-5 sm:p-6 shadow-md">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-lg bg-stitch-primary-container/30 p-3 text-stitch-primary">
                <span className="material-symbols-outlined text-2xl">event</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stitch-on-surface">
                  Important dates
                </h3>
                <p className="text-stitch-on-surface-variant">
                  June 13th, 2026
                </p>
                <p className="text-sm text-stitch-outline">
                  Main conference day (ENS, Abdelmalek Essaadi University)
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container p-5 sm:p-6 shadow-md">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-lg bg-stitch-primary-container/30 p-3 text-stitch-primary">
                <span className="material-symbols-outlined text-2xl">
                  location_on
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stitch-on-surface">
                  Location
                </h3>
                <p className="text-stitch-on-surface-variant">
                  ENS, Abdelmalek Essaadi University
                </p>
                <p className="text-sm text-stitch-outline">
                  Martil - Tetouan, Morocco
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={stitchSectionCard}>
          <h3 className="mb-6 font-headline-md text-headline-md text-stitch-on-surface">
            List of topics
          </h3>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container-low p-5">
              <h4 className="mb-3 text-lg font-bold text-stitch-primary">
                Artificial Intelligence for Learning and e-learning
              </h4>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-stitch-on-surface-variant">
                <li>Didactic & Pedagogical & learning Impact</li>
                <li>Intelligent system & E-Learning tools</li>
                <li>Data in Education and E-learning</li>
                <li>Adaptive learning</li>
                <li>E-Learning tools, systems, and applications</li>
                <li>Personalized and Adaptive learning and applications</li>
                <li>Intelligent system in Education and Learning</li>
                <li>Wireless, Mobile, and Ubiquitous Learning and applications</li>
                <li>Social- and Collaborative-based learning and applications</li>
                <li>Virtual Universities, Classrooms, and Laboratories</li>
              </ul>
            </div>
            <div className="rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container-low p-5">
              <h4 className="mb-3 text-lg font-bold text-stitch-primary">
                Computational Intelligence & Applied Mathematics
              </h4>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-stitch-on-surface-variant">
                <li>Computational Intelligence & Applied Mathematics</li>
                <li>Mathematics for artificial intelligence</li>
                <li>Intelligence Artificial & data sciences</li>
                <li>Machine Learning & Deep Learning</li>
                <li>IoT for Smart City & Smart Home</li>
                <li>…</li>
              </ul>
            </div>
            <div className="rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container-low p-5">
              <h4 className="mb-3 text-lg font-bold text-stitch-primary">
                Alliance between Physics-Chemistry and Artificial Intelligence
              </h4>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-stitch-on-surface-variant">
                <li>Intelligence Artificial & Chemistry</li>
                <li>Intelligence Artificial & Physics</li>
                <li>Modelling & computation in applied physical science</li>
                <li>…</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center gap-3 pb-4 sm:flex-row sm:gap-4">
          <Link
            href="/register"
            className="rounded-lg bg-stitch-secondary-container px-6 py-3 text-center font-label-sm text-label-sm text-stitch-on-secondary-container shadow-[0_0_20px_rgba(238,152,0,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(238,152,0,0.35)] sm:px-8"
          >
            Workshop registration
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-stitch-primary bg-stitch-primary/5 px-6 py-3 text-center font-label-sm text-label-sm text-stitch-primary transition-colors hover:bg-stitch-primary/10 sm:px-8"
          >
            AGENTIC AI event
          </Link>
        </div>
      </main>

      <StitchFooter />
    </div>
  );
}
