import { UsersIcon, ShieldCheckIcon, ChartBarIcon, BuildingIcon, TrendingUpIcon, AcademicCapIcon } from '../components/Icons'

export default function About() {
  const roles = [
    {
      title: 'Research Analysts',
      description: 'Conduct company and market research, analyze financial statements, evaluate competitive positioning, and prepare comprehensive investment recommendations based on fundamental analysis.',
      icon: ChartBarIcon,
    },
    {
      title: 'Portfolio Managers',
      description: 'Oversee portfolio strategy, make investment decisions, manage risk within established guidelines, and ensure portfolio alignment with investment objectives.',
      icon: TrendingUpIcon,
    },
    {
      title: 'Compliance Officers',
      description: 'Ensure adherence to the Investment Policy Statement, fund charter, and ethical standards. Monitor regulatory compliance and maintain governance documentation.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Communications Team',
      description: 'Prepare monthly letters, maintain documentation, communicate fund activities to stakeholders, and manage external communications and reporting.',
      icon: UsersIcon,
    },
  ]

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <section className="bg-primary-50 border-b border-primary-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">About the Fund</h1>
          <p className="text-xl text-slate-600">Understanding our mission, structure, and educational approach</p>
        </div>
      </section>

      {/* Colorful highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-10">
          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-accent-100 text-accent-700 border border-accent-200">
            Spotlight
          </span>
          <h2 className="text-3xl font-bold mt-4 text-navy-900">Why our fund format works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Education-first',
              desc: 'Curriculum, workshops, and mentorship before any simulations.',
              icon: AcademicCapIcon,
              bg: 'bg-accent-50',
            },
            {
              title: 'Governance & ethics',
              desc: 'Clear roles, approvals, and documentation to mirror real funds.',
              icon: ShieldCheckIcon,
              bg: 'bg-primary-100',
            },
            {
              title: 'Hands-on practice',
              desc: 'Research, analysis, and reporting reps that build confidence.',
              icon: ChartBarIcon,
              bg: 'bg-navy-50',
            },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={item.title} className={`${item.bg} rounded-xl p-6 border border-primary-100 shadow-sm`}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white shadow-inner text-accent-600">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-slate-700">{item.desc}</p>
                {idx === 0 && (
                  <span className="inline-flex mt-4 text-sm font-semibold text-accent-700">Orange = priority focus</span>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Purpose Section */}
        <section className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-10 border border-primary-100">
            <h2 className="text-4xl font-bold mb-8 text-slate-900">Purpose of the Fund</h2>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-lg leading-relaxed">
                InvestED is an <strong className="text-slate-900">education-first</strong> initiative designed to provide students with a comprehensive understanding of investment principles, fund management, and financial governance through structured learning and hands-on experience.
              </p>
              <p className="text-lg leading-relaxed">
                Our primary goal is to bridge the gap between theoretical finance education and practical fund management. We believe that before students can effectively manage investments, they must first understand the fundamentals: how financial markets operate, how to analyze companies and securities, how to make informed investment decisions, and how to operate within a structured governance framework.
              </p>
              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-accent-500 mt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Educational Focus</h3>
                <p className="text-slate-600 leading-relaxed">
                  Unlike traditional investment clubs, InvestED focuses entirely on building a strong educational foundation. We emphasize learning through structured curriculum, hands-on exercises, and collaborative decision-making processes that mirror real-world fund operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Involvement Section */}
        <section className="mb-20">
          <div className="bg-primary-100 rounded-lg shadow-lg p-10 border border-primary-100">
            <h2 className="text-4xl font-bold mb-8 text-slate-900">Student Involvement</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-lg p-6 border border-primary-100">
                <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4 text-accent-600">
                  <UsersIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Active Participation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Students are actively involved in all aspects of fund operations, from research and analysis to decision-making and reporting. This hands-on approach ensures practical learning and real-world experience.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-primary-100">
                <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4 text-accent-600">
                  <ChartBarIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Training & Development</h3>
                <p className="text-slate-600 leading-relaxed">
                  All students participate in our comprehensive 3-session training pathway, covering investment basics, company analysis, and fund workflow. This ensures everyone starts with a solid foundation.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-primary-100">
                <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4 text-accent-600">
                  <BuildingIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Collaborative Learning</h3>
                <p className="text-slate-600 leading-relaxed">
                  Students work together in teams, sharing knowledge, conducting research, and making collective decisions. This collaborative environment fosters learning and builds professional skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Structure Section */}
        <section className="mb-20">
          <div className="bg-accent-50 rounded-lg shadow-lg p-10 border border-primary-100">
            <h2 className="text-4xl font-bold mb-10 text-slate-900">Fund Governance Structure</h2>
            
            {/* Faculty Advisor */}
            <div className="mb-12 pb-12 border-b border-slate-200">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent-50 rounded-lg flex items-center justify-center mr-6 text-accent-600">
                  <ShieldCheckIcon className="w-9 h-9" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-semibold mb-4 text-slate-900">Faculty Advisor</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    The Faculty Advisor provides guidance, oversight, and ensures that the fund operates within educational objectives and ethical standards. They mentor students, review decisions, and help maintain the fund's educational mission.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-accent-500">
                    <p className="text-slate-600">
                      <strong className="text-slate-900">Responsibilities:</strong> Strategic guidance, compliance oversight, educational quality assurance, and student mentorship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Roles */}
            <div className="mb-12 pb-12 border-b border-slate-200">
              <h3 className="text-3xl font-semibold mb-8 text-slate-900">Student Roles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {roles.map((role, index) => {
                  const IconComponent = role.icon
                  return (
                    <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-accent-600">
                        <IconComponent className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl mb-2 text-slate-900">{role.title}</h4>
                          <p className="text-slate-600 leading-relaxed">{role.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Decision Making Flow */}
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-slate-900">Decision Making Flow</h3>
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <ol className="space-y-6">
                  {[
                    { step: '1', title: 'Research & Analysis', desc: 'Students conduct thorough research, analyze financial statements, evaluate market conditions, and prepare comprehensive analysis reports.' },
                    { step: '2', title: 'Team Discussion', desc: 'Research findings are presented and discussed in team meetings. Multiple perspectives are considered, and questions are addressed collaboratively.' },
                    { step: '3', title: 'Proposal Development', desc: 'Investment proposals are developed based on team consensus, IPS guidelines, and risk assessment. Proposals include rationale and expected outcomes.' },
                    { step: '4', title: 'Review & Approval', desc: 'Proposals are reviewed by the Faculty Advisor and approved according to governance structure. Feedback is provided for learning purposes.' },
                    { step: '5', title: 'Documentation & Reporting', desc: 'All decisions are documented and reported in monthly letters and fund records. This ensures transparency and creates a learning archive.' },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start">
                  <span className="flex-shrink-0 w-12 h-12 bg-accent-600 text-white rounded-lg flex items-center justify-center font-bold text-lg mr-6">
                        {item.step}
                      </span>
                      <div className="flex-grow pt-2">
                        <p className="font-semibold text-xl text-slate-900 mb-2">{item.title}</p>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Finance Content */}
        <section className="bg-primary-900 rounded-lg shadow-lg p-10 text-white">
          <h2 className="text-4xl font-bold mb-8">Understanding Fund Management</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Concepts</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Portfolio theory and asset allocation strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Risk-return tradeoffs and portfolio optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Performance measurement and benchmarking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regulatory compliance and fiduciary responsibilities</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Learning Outcomes</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Develop analytical and critical thinking skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Understand financial markets and instruments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Learn professional communication and presentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build experience with real-world fund operations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
