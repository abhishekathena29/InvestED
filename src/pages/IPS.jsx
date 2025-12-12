import { DownloadIcon, ChartBarIcon, TrendingUpIcon, ShieldCheckIcon } from '../components/Icons'

export default function IPS() {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <section className="bg-primary-50 border-b border-primary-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Investment Policy Statement (IPS)</h1>
          <p className="text-xl text-gray-600">Our framework for decision-making and investment philosophy</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Colorful highlights */}
        <section className="mb-12">
          <div className="mb-10">
            <span className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-accent-100 text-accent-700 border border-accent-200">
              IPS at a glance
            </span>
            <h2 className="text-3xl font-bold mt-4 text-navy-900">Orange flags for what matters most</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Objectives',
                desc: 'Education-first goals and the benchmarks we measure.',
                icon: TrendingUpIcon,
                bg: 'bg-accent-50',
              },
              {
                title: 'Guardrails',
                desc: 'Risk limits, approvals, and documentation standards.',
                icon: ShieldCheckIcon,
                bg: 'bg-primary-100',
              },
              {
                title: 'Process',
                desc: 'Evidence-based research and collaborative decisions.',
                icon: ChartBarIcon,
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

        {/* Overview Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-10 border border-primary-200">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">What is an Investment Policy Statement?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-lg leading-relaxed">
                An Investment Policy Statement (IPS) is a formal document that outlines the fund's investment objectives, strategies, and guidelines. It serves as a framework for decision-making and ensures that all investment activities align with the fund's educational mission and risk tolerance.
              </p>
              <p className="text-lg leading-relaxed">
                For InvestED, our IPS provides clear guidance on how investment decisions should be made, what principles should guide our actions, and how we understand and manage risk in an educational context. It is a living document that evolves as the fund matures and students gain more experience.
              </p>
              <div className="bg-primary-100 rounded-lg p-6 border-l-4 border-accent-500 mt-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Purpose of an IPS</h3>
                <p className="text-gray-600 leading-relaxed">
                  The IPS establishes the investment framework, defines roles and responsibilities, sets performance benchmarks, and provides guidelines for risk management. It ensures consistency in decision-making and helps maintain focus on the fund's educational objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-12">
          <div className="bg-accent-600 rounded-lg shadow-lg p-8 text-white">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                  <DownloadIcon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Download the Full IPS</h2>
                  <p className="text-gray-100">Get the complete Investment Policy Statement document in PDF format.</p>
                </div>
              </div>
              <button className="bg-white text-accent-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-3">
                <DownloadIcon className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </section>

        {/* IPS Sections */}
        <div className="space-y-10">
          {/* Goals of the Fund */}
          <section className="bg-primary-100 rounded-lg shadow-sm p-10 border border-gray-200">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Goals of the Fund</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  num: '1',
                  title: 'Educational Excellence',
                  desc: 'Provide students with comprehensive, hands-on learning experiences in investment principles, financial analysis, and fund management. Focus on practical application of theoretical concepts.',
                },
                {
                  num: '2',
                  title: 'Skill Development',
                  desc: 'Develop critical thinking, research, analysis, and decision-making skills that are applicable to professional environments and personal financial management.',
                },
                {
                  num: '3',
                  title: 'Governance Understanding',
                  desc: 'Demonstrate the importance of structured governance, ethical decision-making, and transparent processes in financial management. Learn about fiduciary responsibilities.',
                },
                {
                  num: '4',
                  title: 'Long-term Foundation',
                  desc: 'Build a strong foundation of knowledge and experience that prepares students for future phases, including simulation and real investment activities.',
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-600 rounded-lg flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-xl">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Decision-Making Principles */}
          <section className="bg-accent-50 rounded-lg shadow-sm p-10 border border-gray-200">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Decision-Making Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Evidence-Based',
                  desc: 'All decisions must be supported by thorough research, data analysis, and logical reasoning. Opinions and speculation are not sufficient. Every recommendation must include supporting evidence.',
                  icon: ChartBarIcon,
                },
                {
                  title: 'Collaborative',
                  desc: 'Decisions are made through team discussion, consensus-building, and consideration of diverse perspectives. No single individual makes decisions in isolation.',
                  icon: ShieldCheckIcon,
                },
                {
                  title: 'Transparent',
                  desc: 'All decision-making processes, rationales, and outcomes are documented and communicated clearly to all participants and stakeholders.',
                  icon: ShieldCheckIcon,
                },
                {
                  title: 'Educational',
                  desc: 'Every decision serves as a learning opportunity. The process is as important as the outcome, and mistakes are viewed as valuable learning experiences.',
                  icon: TrendingUpIcon,
                },
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="bg-white rounded-lg p-6 border border-primary-200 hover:shadow-lg transition-all">
                    <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-7 h-7 text-accent-600" />
                      </div>
                      <h3 className="font-semibold text-xl text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Investment Philosophy */}
          <section className="bg-navy-50 rounded-lg shadow-sm p-10 border border-gray-200">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Investment Philosophy</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                InvestED's investment philosophy is grounded in fundamental analysis, long-term thinking, and disciplined decision-making. We believe in understanding companies deeply before making any investment decisions. Our approach combines value investing principles with modern portfolio theory.
              </p>
              <div className="bg-primary-100 rounded-lg p-8 mt-6 border border-primary-200">
                <h3 className="font-semibold text-2xl mb-6 text-gray-900">Core Principles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Value Investing', desc: 'Focus on companies with strong fundamentals, reasonable valuations, and sustainable competitive advantages.' },
                    { title: 'Diversification', desc: 'Maintain a well-diversified portfolio across sectors, industries, and asset classes to manage risk.' },
                    { title: 'Long-term Perspective', desc: 'Make decisions based on long-term value creation rather than short-term market movements.' },
                    { title: 'Risk Management', desc: 'Understand and manage risk through research, diversification, and adherence to established guidelines.' },
                    { title: 'Ethical Considerations', desc: 'Consider environmental, social, and governance (ESG) factors in investment decisions.' },
                    { title: 'Fundamental Analysis', desc: 'Focus on company financials, business models, competitive positioning, and management quality.' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">{item.title}:</strong>
                        <span className="text-gray-600 ml-2">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Risk Understanding */}
          <section className="bg-white rounded-lg shadow-sm p-10 border border-gray-200">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Risk Understanding (Educational)</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Understanding risk is fundamental to investment management. Students learn about different types of risk, how to assess risk, and how to manage risk through various strategies. All risk discussions are educational exercises designed to build understanding.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="font-semibold text-xl mb-4 text-yellow-900">Types of Risk</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>Market Risk:</strong> Risk of losses due to market movements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>Company-Specific Risk:</strong> Risk related to individual companies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>Sector Risk:</strong> Risk affecting entire industry sectors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>Liquidity Risk:</strong> Risk of not being able to sell assets quickly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>Regulatory Risk:</strong> Risk from changes in regulations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary-100 rounded-lg p-6 border border-primary-200">
                  <h3 className="font-semibold text-xl mb-4 text-navy-900">Risk Management Strategies</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">•</span>
                      <span><strong>Diversification:</strong> Spreading investments across assets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">•</span>
                      <span><strong>Position Sizing:</strong> Limiting exposure to single positions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">•</span>
                      <span><strong>Research & Analysis:</strong> Thorough due diligence before investing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">•</span>
                      <span><strong>Regular Review:</strong> Ongoing monitoring of portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-600 mr-2">•</span>
                      <span><strong>IPS Adherence:</strong> Following established guidelines</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary-100 rounded-lg p-6 border border-primary-300">
                <p className="text-lg leading-relaxed text-gray-600">
                  <strong className="text-gray-900">Important Note:</strong> All risk discussions and analyses are educational exercises designed to build understanding. Students learn to identify, assess, and manage risk in a controlled learning environment focused on education.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
