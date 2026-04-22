import { FiAward, FiUsers, FiTrendingUp, FiZap } from 'react-icons/fi';

const benefits = [
  {
    icon: FiZap,
    title: 'Agentic Prototyping',
    description: 'Build your own agentic proof-of-concept through guided, practical implementation.',
  },
  {
    icon: FiAward,
    title: 'Inference Strategy',
    description: 'Learn how to choose models and serving approaches based on real constraints.',
  },
  {
    icon: FiUsers,
    title: 'Expert-Led Workshop',
    description: 'Train directly with TAOUFIK HICHAM, Artificial Intelligence Specialist.',
  },
  {
    icon: FiTrendingUp,
    title: 'Open-Source Acceleration',
    description: 'Leverage open-source tooling to build faster, iterate smarter, and deploy confidently.',
  },
];

export default function WhyAttendSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 font-display mb-4">
            Why Attend AGENTIC AI
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Gain practical, hardware-aware skills for building the next generation of AI systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300 h-full">
                <div className="bg-white p-4 rounded-lg w-fit mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <benefit.icon className="text-3xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 font-display">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 shadow-hard text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 font-display">
              What You'll Take Away
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-accent-300 mb-2">100%</div>
                <div className="text-primary-100">Agentic Focus</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-accent-300 mb-2">RAG</div>
                <div className="text-primary-100">Pipeline Mastery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-accent-300 mb-2">GPU</div>
                <div className="text-primary-100">Aware Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

