import { Link } from 'react-router-dom'
import { DocumentIcon, ClipboardIcon, AcademicCapIcon, MailIcon, InformationIcon, ChartBarIcon, TrendingUpIcon, BuildingIcon } from '../components/Icons'

export default function Homepage() {
  const navCards = [
    {
      title: 'Fund Charter',
      description: 'Learn about our fund\'s purpose, educational objectives, and governance principles.',
      path: '/charter',
      icon: DocumentIcon,
    },
    {
      title: 'IPS',
      description: 'Explore our Investment Policy Statement and decision-making framework.',
      path: '/ips',
      icon: ClipboardIcon,
    },
    {
      title: 'Training Pathway',
      description: 'Discover our comprehensive 3-session training program for students.',
      path: '/training',
      icon: AcademicCapIcon,
    },
    {
      title: 'Monthly Letters',
      description: 'Stay updated with our monthly communications and fund updates.',
      path: '#',
      icon: MailIcon,
    },
    {
      title: 'About the Fund',
      description: 'Understand our mission, structure, and student involvement.',
      path: '/about',
      icon: InformationIcon,
    },
  ]

  const fundBasics = [
    {
      title: 'What is a Fund?',
      content: 'A fund is a pool of money collected from multiple investors to invest in securities like stocks, bonds, and other assets. Funds are managed by professional fund managers who make investment decisions on behalf of investors.',
      icon: BuildingIcon,
      stat: '100+',
      statLabel: 'Students Trained',
    },
    {
      title: 'Types of Funds',
      content: 'Common fund types include mutual funds, exchange-traded funds (ETFs), hedge funds, and pension funds. Each type has different structures, regulations, and investment strategies.',
      icon: ChartBarIcon,
      stat: '50+',
      statLabel: 'Companies Analyzed',
    },
    {
      title: 'Fund Management',
      content: 'Fund management involves portfolio construction, risk management, research and analysis, and performance monitoring. Effective fund management requires discipline, research, and adherence to investment policies.',
      icon: TrendingUpIcon,
      stat: '3',
      statLabel: 'Training Sessions',
    },
  ]

  return (
    <div className="min-h-screen bg-primary-50 text-slate-900">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white relative overflow-hidden border-b border-primary-800/40">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
      

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo/Brand */}
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 border border-white/20 rounded-2xl  shadow-lg backdrop-blur">
                <TrendingUpIcon className="w-12 h-12 text-accent-200" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white tracking-tight">InvestED</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 font-normal">
              Learning Investing Through Clarity, Discipline, and Governance.
            </p>
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-lg text-primary-100/90 leading-relaxed">
                InvestED is an educational fund initiative designed to teach students the fundamentals of investing,
                fund management, and financial governance. We believe in learning through structured education,
                clear principles, and ethical decision-making.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Learn More
              </Link>
              <Link
                to="/training"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 border border-white/30 shadow-sm backdrop-blur"
              >
                Start Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100+', label: 'Students Trained' },
              { value: '50+', label: 'Companies Analyzed' },
              { value: '3', label: 'Training Sessions' },
              { value: '24/7', label: 'Learning Resources' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/5 border border-white/10 py-6 shadow-sm backdrop-blur">
                <div className="text-4xl font-bold mb-2 text-accent-200">{item.value}</div>
                <div className="text-primary-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Basics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Understanding Investment Funds</h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Build a solid foundation in fund management and investment principles
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {fundBasics.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-8 border border-primary-100"
              >
                <div className="w-14 h-14 bg-accent-50 text-accent-600 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-navy-800">{item.stat}</span>
                  <span className="text-sm text-slate-500">{item.statLabel}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed">{item.content}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Visual Chart Section */}
      <section className="bg-white py-20 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Track Your Learning Progress</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our structured curriculum helps you build investment knowledge systematically. Track your progress through each module and see how your understanding grows.
              </p>
              <div className="space-y-4">
                {['Investment Fundamentals', 'Financial Analysis', 'Portfolio Management', 'Risk Assessment'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-full bg-primary-100 rounded-full h-3 mr-4">
                      <div
                        className="bg-accent-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${(index + 1) * 25}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-navy-800 whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 rounded-lg p-8 border border-primary-100">
              <h3 className="text-xl font-semibold text-navy-900 mb-6">Learning Path Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-800">Session 1: Basics</span>
                  <div className="flex-1 mx-4 bg-primary-100 rounded-full h-2">
                    <div className="bg-accent-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-navy-800">Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-800">Session 2: Analysis</span>
                  <div className="flex-1 mx-4 bg-primary-100 rounded-full h-2">
                    <div className="bg-accent-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-navy-800">75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-800">Session 3: Workflow</span>
                  <div className="flex-1 mx-4 bg-primary-100 rounded-full h-2">
                    <div className="bg-accent-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-navy-800">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Explore Our Resources</h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Access comprehensive educational materials and fund documentation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navCards.map((card) => {
              const IconComponent = card.icon
              return (
                <Link
                  key={card.title}
                  to={card.path}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 p-8 border border-primary-100 hover:border-accent-400 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-accent-50 text-accent-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-navy-900 group-hover:text-accent-600 transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">{card.description}</p>
                  <div className="flex items-center text-accent-600 font-semibold group-hover:gap-2 transition-all duration-200">
                    <span>Learn more</span>
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Why Study Fund Management?</h2>
            <div className="space-y-6 text-slate-700">
              {[
                { icon: '📊', title: 'Professional Skills Development', desc: 'Learn analytical thinking, research methodologies, and decision-making processes used in professional finance careers.' },
                { icon: '📈', title: 'Understanding Financial Markets', desc: 'Gain insights into how financial markets operate, how investments work, and how to evaluate opportunities.' },
                { icon: '🛡️', title: 'Risk Management', desc: 'Learn to identify, assess, and manage various types of financial risk through structured approaches.' },
                { icon: '⚖️', title: 'Governance & Ethics', desc: 'Understand the importance of governance structures, ethical decision-making, and transparency in finance.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-50 text-accent-600 rounded-lg flex items-center justify-center mr-4 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-navy-900 mb-2">{item.title}</h3>
                    <p className="leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary-900 rounded-2xl p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Key Learning Areas</h3>
            <ul className="space-y-4">
              {[
                'Portfolio Construction & Management',
                'Financial Statement Analysis',
                'Company Valuation Methods',
                'Market Research & Analysis',
                'Investment Policy Development',
                'Performance Measurement & Reporting',
              ].map((item, index) => (
                <li key={index} className="flex items-center text-lg text-primary-100">
                  <svg className="w-6 h-6 mr-3 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">About InvestED</h2>
          <div className="space-y-6 text-lg text-primary-100 leading-relaxed">
            <p>
              InvestED is an education-first fund initiative that provides students with a comprehensive
              understanding of investment principles, fund management, and financial governance. Our approach
              emphasizes clarity in decision-making, discipline in following established principles, and
              governance through structured processes and transparency.
            </p>
            <p>
              Students learn through hands-on experience with fund operations, research methodologies, and
              collaborative decision-making processes. We focus on building a strong foundation of knowledge
              before engaging in any simulation or real investment activities.
            </p>
            <p>
              Our curriculum covers essential topics including portfolio management, financial analysis,
              risk assessment, and ethical decision-making. All learning is structured, documented, and
              designed to prepare students for professional finance careers.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
