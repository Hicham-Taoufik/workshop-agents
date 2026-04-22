import { FiClock, FiMapPin, FiUser, FiBook } from 'react-icons/fi';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  location?: string;
  type: 'workshop' | 'break' | 'registration';
}

const schedule: ScheduleItem[] = [
  {
    time: '08:30 - 09:00',
    title: 'Registration & Welcome',
    description: 'Check-in and receive workshop materials',
    location: 'Main Hall',
    type: 'registration',
  },
  {
    time: '09:00 - 12:00',
    title: 'Build Your Own Agentic Proof-of-Concept',
    description: 'From chatbots to agentic minds: architecture patterns, tooling strategy, and practical implementation workflow.',
    speaker: 'TAOUFIK HICHAM - Artificial Intelligence Specialist',
    location: 'Workshop Room A',
    type: 'workshop',
  },
  {
    time: '12:00 - 13:30',
    title: 'Lunch Break',
    description: 'Networking lunch provided',
    location: 'Conference Hall',
    type: 'break',
  },
  {
    time: '13:30 - 17:00',
    title: 'Advanced RAG, Inference and GPU-Aware Systems',
    description: 'Build advanced RAG pipelines and optimize inference design with open-source components and hardware-aware decisions.',
    speaker: 'TAOUFIK HICHAM - Artificial Intelligence Specialist',
    location: 'Workshop Room B',
    type: 'workshop',
  },
  {
    time: '17:00 - 17:30',
    title: 'Q&A and Closing',
    description: 'Final questions, certificate distribution, and closing remarks',
    location: 'Main Hall',
    type: 'registration',
  },
];

export default function ScheduleSection() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'workshop':
        return 'border-primary-500 bg-primary-50';
      case 'break':
        return 'border-accent-400 bg-accent-50';
      default:
        return 'border-neutral-300 bg-neutral-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'workshop':
        return <FiBook className="text-primary-600" />;
      case 'break':
        return <FiClock className="text-accent-600" />;
      default:
        return <FiMapPin className="text-neutral-600" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 font-display mb-4">
            Workshop Schedule
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            16 MAY 2026 • FACULTY OF SCIENCE TETOUAN
          </p>
        </div>

        <div className="space-y-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`border-l-4 ${getTypeColor(item.type)} p-6 shadow-soft hover:shadow-medium transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center gap-3 md:min-w-[180px]">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="font-semibold text-neutral-700 text-sm">
                    {item.time}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-col gap-2 text-sm">
                    {item.speaker && (
                      <div className="flex items-center gap-2 text-neutral-700">
                        <FiUser className="text-primary-600" />
                        <span>{item.speaker}</span>
                      </div>
                    )}
                    {item.location && (
                      <div className="flex items-center gap-2 text-neutral-600">
                        <FiMapPin className="text-neutral-500" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-primary-50 border border-primary-200 rounded-lg">
          <p className="text-sm text-neutral-700 text-center">
            <strong>Note:</strong> Schedule may be subject to minor adjustments. 
            All registered participants will be notified of any changes via email.
          </p>
        </div>
      </div>
    </section>
  );
}

