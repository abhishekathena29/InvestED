import { useState } from 'react'
import { DownloadIcon, ChevronDownIcon, CheckIcon, DocumentIcon, ShieldCheckIcon, TrendingUpIcon } from '../components/Icons'

export default function Charter() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqItems = [
    {
      question: 'What makes a fund charter important?',
      answer: 'A fund charter establishes the legal and operational framework for the fund. It defines the fund\'s purpose, objectives, governance structure, and operational guidelines. For educational funds, it ensures that all activities align with learning objectives and ethical standards. The charter serves as a reference document for decision-making and helps maintain consistency and transparency in fund operations.',
    },
    {
      question: 'How does the charter guide investment decisions?',
      answer: 'The charter provides the foundational principles that guide all investment decisions. It establishes the fund\'s investment objectives, risk tolerance, and decision-making processes. All investment proposals must align with the charter\'s guidelines, ensuring that decisions are made consistently and in accordance with the fund\'s educational mission and governance structure.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <section className="bg-primary-50 border-b border-primary-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <DocumentIcon className="w-12 h-12 mr-4 text-gray-700" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Fund Charter</h1>
          </div>
          <p className="text-xl text-gray-600">Our guiding principles and educational objectives</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Colorful highlights */}
        <section className="mb-12">
          <div className="mb-10">
            <span className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-accent-100 text-accent-700 border border-accent-200">
              Charter snapshot
            </span>
            <h2 className="text-3xl font-bold mt-4 text-navy-900">What this charter guarantees</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Clarity',
                desc: 'Purpose, scope, and decision rules stated up front.',
                icon: DocumentIcon,
                bg: 'bg-accent-50',
              },
              {
                title: 'Accountability',
                desc: 'Defined approvals, roles, and checkpoints for every action.',
                icon: ShieldCheckIcon,
                bg: 'bg-primary-100',
              },
              {
                title: 'Learning-first',
                desc: 'Processes mirror real funds while keeping risk educational.',
                icon: TrendingUpIcon,
                bg: 'bg-navy-50',
              },
            ].map((item) => (
              <div key={item.title} className={`${item.bg} rounded-xl p-6 border border-primary-100 shadow-sm`}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white shadow-inner text-accent-600">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-12">
          <div className="bg-accent-600 rounded-lg shadow-xl p-8 text-white">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                  <DownloadIcon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Download the Full Charter</h2>
                  <p className="text-gray-100">Get the complete Fund Charter document in PDF format.</p>
                </div>
              </div>
              <button className="bg-white text-accent-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-3">
                <DownloadIcon className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </section>

        {/* Charter Sections */}
        <div className="space-y-10">
          {/* Fund Purpose */}
          <section className="bg-primary-100 rounded-lg shadow-lg p-10 border border-primary-100">
            <h2 className="text-4xl font-bold mb-8 text-slate-900">Fund Purpose</h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-lg leading-relaxed">
                The InvestED fund is established as an educational initiative to provide students with comprehensive learning opportunities in investment principles, fund management, and financial governance. The fund operates with a primary focus on education, ensuring that all participants gain deep understanding before engaging in any simulation or real investment activities.
              </p>
              <p className="text-lg leading-relaxed">
                Our purpose is to create a structured learning environment where students can explore financial markets, understand investment strategies, and develop professional skills in a collaborative, ethical, and transparent manner.
              </p>
              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-accent-500 mt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Educational Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  The fund serves as a practical learning laboratory where theoretical finance concepts are applied in a real-world context. Students learn through hands-on experience with fund operations, research methodologies, and collaborative decision-making processes.
                </p>
              </div>
            </div>
          </section>

          {/* Educational Objectives */}
          <section className="bg-accent-50 rounded-lg shadow-lg p-10 border border-primary-100">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Educational Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Investment Fundamentals',
                  desc: 'Develop a solid understanding of investment concepts, including stocks, bonds, diversification, risk, and return. Learn how financial markets operate and how different asset classes behave.',
                },
                {
                  title: 'Financial Analysis',
                  desc: 'Learn to analyze companies, read financial statements, evaluate metrics, and conduct thorough research. Understand valuation methods and how to assess investment opportunities.',
                },
                {
                  title: 'Governance & Ethics',
                  desc: 'Understand the importance of governance structures, ethical decision-making, and transparency in fund management. Learn about fiduciary responsibilities and regulatory compliance.',
                },
                {
                  title: 'Professional Skills',
                  desc: 'Develop communication, teamwork, research, and analytical skills applicable to professional environments. Build presentation skills and learn to document decisions effectively.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border border-primary-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckIcon className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Student Responsibilities */}
          <section className="bg-primary-100 rounded-lg shadow-lg p-10 border border-primary-100">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Student Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Active Participation',
                  desc: 'Students are expected to actively participate in training sessions, meetings, research activities, and decision-making processes. Regular attendance and engagement are essential for the fund\'s success and individual learning outcomes.',
                },
                {
                  title: 'Ethical Conduct',
                  desc: 'All students must adhere to the highest ethical standards, including honesty, transparency, and respect for all participants. Any conflicts of interest must be disclosed immediately to maintain integrity.',
                },
                {
                  title: 'Continuous Learning',
                  desc: 'Students are encouraged to continuously expand their knowledge through reading, research, and collaboration with peers. Learning is an ongoing process that extends beyond formal training sessions.',
                },
                {
                  title: 'Documentation & Reporting',
                  desc: 'Students are responsible for maintaining accurate records, documenting decisions, and contributing to monthly letters and fund reports. Clear documentation ensures transparency and learning continuity.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border border-primary-100">
                  <h3 className="font-semibold text-xl mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ethics & Transparency */}
          <section className="bg-navy-50 rounded-lg shadow-lg p-10 border border-primary-100">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Ethics & Transparency</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-8">
                Ethics and transparency are fundamental to the InvestED fund. All decisions, processes, and activities are conducted with the highest standards of integrity and openness. These principles ensure that the fund operates as a trusted educational resource and maintains credibility with all stakeholders.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-8 border border-primary-100">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="w-8 h-8 text-gray-700 mr-3" />
                    <h3 className="font-semibold text-2xl text-gray-900">Ethical Principles</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Honesty in all communications and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fair treatment of all participants</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Disclosure of conflicts of interest</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Respect for diverse perspectives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Commitment to educational mission</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 border border-primary-100">
                  <div className="flex items-center mb-4">
                    <DocumentIcon className="w-8 h-8 text-gray-700 mr-3" />
                    <h3 className="font-semibold text-2xl text-gray-900">Transparency Measures</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Public documentation of decisions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regular monthly letters and updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Open access to fund charter and IPS</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Clear governance structure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Transparent selection processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-primary-100 hover:shadow-lg transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary-50 transition-colors"
                >
                  <span className="text-xl font-semibold text-slate-900">{item.question}</span>
                  <ChevronDownIcon className={`w-6 h-6 text-accent-600 transition-transform ${openFAQ === index ? 'transform rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-8 py-6 bg-primary-50 border-t border-primary-100">
                    <p className="text-slate-600 leading-relaxed text-lg">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
