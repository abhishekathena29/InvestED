import { VideoIcon, BookOpenIcon, CheckIcon, AcademicCapIcon, ChartBarIcon, TrendingUpIcon } from '../components/Icons'

export default function TrainingPathway() {
  const sessions = [
    {
      title: 'Session 1: Basics of Investing',
      topics: [
        {
          name: 'What is a stock?',
          description: 'Understanding stocks as ownership shares in companies, how they work, and their role in investment portfolios. Learn about common stock, preferred stock, and stock market mechanics.',
        },
        {
          name: 'Risk & Return',
          description: 'Learning the fundamental relationship between risk and return, and how to assess both in investment decisions. Understand risk-return tradeoffs and portfolio theory basics.',
        },
        {
          name: 'Diversification Basics',
          description: 'Understanding the importance of diversification, how it reduces risk, and strategies for building diversified portfolios across asset classes and sectors.',
        },
      ],
    },
    {
      title: 'Session 2: Company/ETF Analysis',
      topics: [
        {
          name: 'How companies operate',
          description: 'Understanding business models, revenue streams, competitive advantages, and the factors that drive company success. Learn about different business structures and industries.',
        },
        {
          name: 'How to read simple metrics',
          description: 'Learning to interpret key financial metrics including P/E ratio, revenue growth, profit margins, debt levels, and other fundamental indicators used in investment analysis.',
        },
        {
          name: 'ETF fundamentals',
          description: 'Understanding Exchange-Traded Funds, their structure, benefits, and how to analyze ETF holdings and performance. Learn about index funds and sector ETFs.',
        },
      ],
    },
    {
      title: 'Session 3: Fund Workflow & Reporting',
      topics: [
        {
          name: 'Meetings',
          description: 'Understanding the structure and purpose of fund meetings, how to prepare, participate effectively, and contribute to discussions. Learn meeting protocols and decision-making processes.',
        },
        {
          name: 'Research',
          description: 'Learning research methodologies, how to conduct company analysis, where to find reliable information, and how to present findings professionally.',
        },
        {
          name: 'Documentation',
          description: 'Understanding the importance of documentation, how to maintain records, and contribute to monthly letters and reports. Learn professional reporting standards.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <section className="bg-primary-50 border-b border-primary-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <AcademicCapIcon className="w-12 h-12 mr-4 text-gray-700" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Training Pathway</h1>
          </div>
          <p className="text-xl text-gray-600">Comprehensive 3-session training program for all students</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Colorful highlights */}
        <section className="mb-12">
          <div className="mb-10">
            <span className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-accent-100 text-accent-700 border border-accent-200">
              Training highlights
            </span>
            <h2 className="text-3xl font-bold mt-4 text-navy-900">Orange focus, purple depth</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Session flow',
                desc: 'Three sessions that build from basics to workflow.',
                icon: AcademicCapIcon,
                bg: 'bg-accent-50',
              },
              {
                title: 'Resources',
                desc: 'Slides, videos, and readings packaged for quick review.',
                icon: BookOpenIcon,
                bg: 'bg-primary-100',
              },
              {
                title: 'Reporting',
                desc: 'Documentation and presentations that mirror real funds.',
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
          <div className="bg-primary-100 rounded-lg shadow-md p-10 border border-primary-200">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Training Program Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-lg leading-relaxed">
                The InvestED Training Pathway is a comprehensive 3-session program designed to provide all students with a solid foundation in investment principles, financial analysis, and fund operations. This training ensures that every participant starts with the knowledge and skills necessary to contribute effectively to the fund.
              </p>
              <p className="text-lg leading-relaxed">
                Each session builds upon the previous one, creating a progressive learning experience that takes students from basic concepts to practical application. The program combines theoretical knowledge with hands-on exercises and real-world examples.
              </p>
              <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-accent-500 mt-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Program Structure</h3>
                <p className="text-gray-600 leading-relaxed">
                  The training is structured to provide both foundational knowledge and practical skills. Each session includes lectures, case studies, group exercises, and opportunities for questions and discussion. Students are expected to complete assigned readings and participate actively in all sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sessions */}
        <div className="space-y-10 mb-12">
          {sessions.map((session, sessionIndex) => (
            <section key={sessionIndex} className="bg-white rounded-lg shadow-sm p-10 border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0 w-20 h-20 bg-primary-700 text-white rounded-lg flex items-center justify-center text-3xl font-bold mr-6 shadow-lg">
                  {sessionIndex + 1}
                </div>
                <h2 className="text-4xl font-bold text-gray-900">{session.title}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {session.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-primary-200 hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold text-xl mb-3 text-gray-900">{topic.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Optional Content Section */}
        <section className="bg-accent-50 rounded-lg shadow-sm p-10 border border-gray-200 mb-12">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Video/Slides Download */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <VideoIcon className="w-9 h-9 text-accent-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Video & Slides</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access recorded training sessions, presentation slides, and supplementary video content to reinforce your learning. All materials are organized by session for easy reference.
              </p>
              <button className="bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Download Materials
              </button>
            </div>

            {/* Reading List */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <BookOpenIcon className="w-9 h-9 text-accent-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Reading List</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore our curated reading list with recommended books, articles, and resources to deepen your understanding of investing and finance. Includes both foundational texts and advanced materials.
              </p>
              <button className="bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Download PDF
              </button>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="bg-primary-100 rounded-lg shadow-sm p-10 border border-gray-200">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Learning Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                { title: 'Investment Fundamentals', desc: 'Understand core investment concepts and terminology' },
                { title: 'Analytical Skills', desc: 'Develop ability to analyze companies and financial metrics' },
                { title: 'Research Methods', desc: 'Learn effective research and information gathering techniques' },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { title: 'Team Collaboration', desc: 'Work effectively in teams and contribute to group decisions' },
                { title: 'Professional Communication', desc: 'Present findings clearly and document work effectively' },
                { title: 'Fund Operations', desc: 'Understand fund workflow, meetings, and reporting processes' },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Study Content */}
        <section className="mt-12 bg-primary-800 rounded-lg shadow-xl p-10 text-white">
          <h2 className="text-4xl font-bold mb-8">Essential Finance Concepts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Markets</h3>
              <p className="text-gray-300 leading-relaxed">
                Understand how financial markets operate, including stock exchanges, bond markets, and derivatives. Learn about market participants, trading mechanisms, and market efficiency.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUpIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Portfolio Theory</h3>
              <p className="text-gray-300 leading-relaxed">
                Learn about Modern Portfolio Theory, asset allocation, efficient frontier, and diversification benefits. Understand how to construct optimal portfolios based on risk and return objectives.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <AcademicCapIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Valuation Methods</h3>
              <p className="text-gray-300 leading-relaxed">
                Master various valuation techniques including discounted cash flow (DCF), comparable company analysis, and asset-based valuation. Learn when to apply each method appropriately.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
