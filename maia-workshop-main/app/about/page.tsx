import { FiCalendar, FiMapPin, FiUser, FiTarget, FiExternalLink, FiCheck, FiClock, FiCpu, FiLayers, FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                AGENTIC AI WORKSHOP
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Orchestrating the Agentic Shift
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                A focused workshop on LLM selection, inference, and GPU-aware systems for teams building production-grade AI agents.
              </p>
            </div>

            <div className="flex justify-center animate-fade-in">
              <div className="bg-white p-6 rounded-2xl shadow-hard">
                <Image
                  src="/images/logoAIA26.png"
                  alt="AGENTIC AI Workshop"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Context */}
      <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary-100 p-3 rounded-xl">
                <FiExternalLink className="text-primary-600 text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-3 font-display">
                  Main Theme
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  <strong>AGENTIC AI</strong> with the subtitle <strong>LLM Selection, Inference and GPU-Aware Systems</strong>.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  This workshop focuses on practical orchestration patterns to move from simple chatbot implementations toward robust agentic architectures.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="/conference"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                View Event Details <FiExternalLink />
              </a>
              <Link 
                href="/register"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors font-semibold"
              >
                Register for Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Details */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-6 md:p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Activity Details</h3>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 text-primary-700 px-4 py-2 text-sm font-semibold mb-5">
              <FiClock />
              <span>Activity Duration: 8 Hours</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Agentic AI in Practice: LLM Selection, Inference, and GPU-Aware Systems," is an eight-hour day for advanced students and early-career researchers. Hicham Taoufik (IEEE Student Member; PhD student; industry AI practitioner) leads sessions from generative and agentic AI foundations through a guided low-code agent proof-of-concept, then LLM selection, open-source and inference trade-offs, and GPU-aware accelerated stacks. Participants also get a practical orientation to RAG patterns (embeddings, vector databases) and lightweight automation (e.g., n8n-style workflows) for tool-using agents, closing with Q&A and curated resources.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-medium text-primary-800">
              A certificate of participation will be delivered to attendees who complete the activity.
            </p>
          </div>

          <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-blue-50 to-primary-50 border border-blue-100 shadow-soft">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Benefits and Impact to Students & Young Professionals
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <div className="bg-white rounded-xl p-4 border border-blue-100">
                <FiCpu className="text-primary-600 mb-2" />
                <p className="text-sm font-semibold text-gray-700">LLM + inference cost awareness</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-blue-100">
                <FiLayers className="text-primary-600 mb-2" />
                <p className="text-sm font-semibold text-gray-700">RAG and automation architecture</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-blue-100">
                <FiCheckCircle className="text-primary-600 mb-2" />
                <p className="text-sm font-semibold text-gray-700">Production-minded practices</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Participants gain practical skills in designing agentic proof-of-concept, choosing LLMs and tooling with inference and cost awareness, and mapping GPU-accelerated stacks to deployment constraints. They learn how embeddings, vector databases, and RAG fit into real applications, and how automation flows can orchestrate tools end-to-end. Graduate students and young professionals strengthen IEEE-facing peer learning and professional networks. The activity aligns theory with hiring expectations for generative and agentic AI roles and supports responsible, production-minded practices.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Lead Instructor</h3>
            <p className="text-gray-900 font-semibold text-lg">Hicham Taoufik</p>
            <p className="text-gray-700 mt-2">
              Technical lead & instructor: workshop design, delivery, hands-on exercises, slides and curated resources.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 font-display mb-4">
              Key Topics Covered
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A practical sequence from model decisions to deployment-ready agentic systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border-2 border-primary-300 shadow-soft">
              <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-6">
                Topic 1
              </div>
              
              <h3 className="text-3xl font-bold text-neutral-900 mb-4 font-display">
                BUILD YOUR OWN AGENTIC PROOF-OF-CONCEPT
                <span className="block text-xl text-primary-700 mt-2">From architecture to execution</span>
              </h3>

              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-semibold text-neutral-800">What You'll Master:</h4>
                <ul className="space-y-3">
                  {[
                    'From chatbots to "agentic minds"',
                    'Advanced RAG pipelines',
                    'LLM selection and inference strategy',
                    'Open-source power for faster experimentation'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiCheck className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-2 border-primary-300 pt-6 mt-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-600 p-3 rounded-xl">
                    <FiUser className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-lg">TAOUFIK HICHAM</p>
                    <p className="text-neutral-600">Artificial Intelligence Specialist</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl p-8 border-2 border-neutral-400 shadow-soft">
              <div className="bg-neutral-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-6">
                Topic 2
              </div>
              
              <h3 className="text-3xl font-bold text-neutral-700 mb-4 font-display">
                GPU-AWARE SYSTEMS
                <span className="block text-xl text-neutral-500 mt-2">Designing efficient inference pathways</span>
              </h3>

              <div className="space-y-3 mb-6">
                <p className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">Expected Focus Areas:</p>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Inference optimization and latency trade-offs</li>
                  <li>• Hardware-aware model serving decisions</li>
                  <li>• Resource planning for sustainable deployment</li>
                  <li>• Building scalable, maintainable pipelines</li>
                </ul>
              </div>

              <div className="border-t-2 border-neutral-400 pt-6 mt-6">
                <div className="flex items-center gap-4">
                  <div className="bg-neutral-500 p-3 rounded-xl">
                    <FiUser className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-600 text-lg">TAOUFIK HICHAM</p>
                    <p className="text-neutral-500">Artificial Intelligence Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 font-display mb-4">
              Who Should Attend
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Designed for technical and strategic profiles building the next generation of AI products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Researchers & Students',
                description: 'Profiles exploring modern agentic methods and practical deployment patterns'
              },
              {
                title: 'ML Engineers',
                description: 'Engineers designing model-serving and agent orchestration workflows'
              },
              {
                title: 'Data & AI Teams',
                description: 'Teams moving from prototypes to robust, production-aligned systems'
              },
              {
                title: 'Developers & Practitioners',
                description: 'Builders implementing AI features and workflows into real systems'
              }
            ].map((audience, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow border border-neutral-200">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FiTarget className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">{audience.title}</h3>
                <p className="text-neutral-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Event Details */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white shadow-hard">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FiCalendar className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display">Date</h3>
                    <p className="text-primary-100">16 MAY 2026 - 8:00 AM</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FiMapPin className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display">Location</h3>
                    <p className="text-primary-100">FACULTY OF SCIENCE TETOUAN</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all duration-300 hover:scale-105"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
