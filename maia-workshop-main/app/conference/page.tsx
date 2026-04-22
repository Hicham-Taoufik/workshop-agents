import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiGlobe,
  FiBookOpen,
  FiAward,
} from 'react-icons/fi';
import Image from 'next/image';

export default function ConferencePage() {
  const quickLinks = [
    'Topics',
    'TPC',
    'Important Dates',
    'Submissions',
    'Registration',
    'Program',
    'Awards',
    'Previous Editions',
  ];

  const speakers = [
    { name: 'Pr. Mohammad AL GHOBIRI', title: 'AI Researcher' },
    { name: 'Pr. Abdelaaziz EL HIBAOUI', title: 'Machine Learning Expert' },
    { name: 'Pr. Jose Ignacio CASTILLO-VELASQUEZ', title: 'Data Science Specialist' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-800 to-blue-950 text-white px-6 py-12 md:px-10 md:py-16 shadow-hard">
          <div className="absolute -top-12 -right-12 w-52 h-52 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-14 -left-10 w-48 h-48 bg-accent-400/20 rounded-full blur-2xl" />
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide mb-6">
              <FiAward />
              <span>7th Edition</span>
            </div>
            <div className="flex justify-center mb-6">
              <div className="bg-white/95 p-3 md:p-4 rounded-2xl shadow-medium">
                <Image
                  src="/images/logoAIA26.png"
                  alt="AiA26 Conference Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">7th AiA26</h1>
            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto">
              International Conference on Artificial Intelligence Applications (AiA26)
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <span className="rounded-full bg-white/10 border border-white/20 px-4 py-2">
                Martil - Tetouan, Morocco
              </span>
              <span className="rounded-full bg-white/10 border border-white/20 px-4 py-2">
                June 12-13, 2026
              </span>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-10 text-white shadow-medium border border-primary-500/40">
          <h2 className="text-3xl font-bold mb-4 font-display">AiA26 Conference Overview</h2>
          <p className="text-lg leading-relaxed mb-4 text-primary-50">
            The 7th edition of the International Conference on Artificial Intelligence Applications (AiA26) will be held on June 13th, 2026, at the Higher Normal School (ENS) of Abdelmalek Essaadi University, Tetuan, Morocco.
          </p>
          <p className="text-lg leading-relaxed text-primary-100">
            AiA26 includes invited keynotes, oral presentations, and poster sessions. The conference provides a forum for best practices, novel algorithms, and research contributions in AI design, implementation, modeling, analysis, verification, and applications.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-soft">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Conference Navigation</h2>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-primary-200 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 text-sm font-semibold hover:shadow-sm transition-shadow"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-center gap-2 mb-2 text-primary-600">
              <FiUsers />
              <span className="text-xs font-bold uppercase tracking-wide">Participants</span>
            </div>
            <p className="text-3xl font-bold text-neutral-900">305+</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-center gap-2 mb-2 text-primary-600">
              <FiGlobe />
              <span className="text-xs font-bold uppercase tracking-wide">Countries</span>
            </div>
            <p className="text-3xl font-bold text-neutral-900">7+</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-center gap-2 mb-2 text-primary-600">
              <FiBookOpen />
              <span className="text-xs font-bold uppercase tracking-wide">Publications</span>
            </div>
            <p className="text-3xl font-bold text-neutral-900">120</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-soft hover:shadow-medium transition-shadow">
            <div className="flex items-center gap-2 mb-2 text-primary-600">
              <FiAward />
              <span className="text-xs font-bold uppercase tracking-wide">Awards</span>
            </div>
            <p className="text-3xl font-bold text-neutral-900">18</p>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-soft">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 font-display">Featured Speakers</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="bg-gradient-to-br from-neutral-50 to-blue-50 border border-neutral-200 rounded-xl p-5 hover:shadow-soft transition-shadow"
              >
                <h3 className="font-bold text-neutral-900">{speaker.name}</h3>
                <p className="text-sm text-neutral-600 mt-1">{speaker.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <FiCalendar className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Important Dates</h3>
                <p className="text-gray-600">June 12-13, 2026</p>
                <p className="text-sm text-gray-500">Main conference day: June 13, 2026</p>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <FiMapPin className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">ENS, Abdelmalek Essaadi University</p>
                <p className="text-sm text-gray-500">Martil - Tetouan, Morocco</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 md:p-8 border border-neutral-200 shadow-soft">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">List of Topics</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 p-5">
              <h4 className="text-lg font-bold text-primary-700 mb-3">
                Artificial Intelligence for Learning and e-learning
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
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
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 p-5">
              <h4 className="text-lg font-bold text-primary-700 mb-3">
                Computational Intelligence & Applied Mathematics
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                <li>Computational Intelligence & Applied Mathematics</li>
                <li>Mathematics for artificial intelligence</li>
                <li>Intelligence Artificial & data sciences</li>
                <li>Machine Learning & Deep Learning</li>
                <li>IoT for Smart City & Smart Home</li>
                <li>...</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 p-5">
              <h4 className="text-lg font-bold text-primary-700 mb-3">
                Alliance between Physics-Chemistry and Artificial Intelligence
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                <li>Intelligence Artificial & Chemistry</li>
                <li>Intelligence Artificial & Physics</li>
                <li>Modelling & computation in applied physical science</li>
                <li>...</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

