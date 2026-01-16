import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DocumentIcon, ClipboardIcon, AcademicCapIcon, MailIcon, InformationIcon, TrendingUpIcon } from '../components/Icons'
import ExplainButton from '../components/ExplainButton'
import ProgressiveDisclosure from '../components/ProgressiveDisclosure'

export default function Homepage() {
  const [viewLevel, setViewLevel] = useState('beginner')
  const navCards = [
    {
      title: 'Fund Charter',
      description: "Learn about our fund's purpose, educational objectives, and governance principles.",
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
      title: 'About the Platform',
      description: 'See how our simulation, portfolio tools, and AI assistant fit together.',
      path: '/about',
      icon: InformationIcon,
    },
  ]

  return (
    <div className="min-h-screen bg-primary-50 text-slate-900">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white relative overflow-hidden border-b border-primary-800/40">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
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
              Learn the stock market with real numbers, real data, and zero real-world risk.
            </p>
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-lg text-primary-100/90 leading-relaxed">
                Investing means using money today to try to grow it over time. Historically, long-term stock
                market investing has produced average annual returns of{' '}
                <span className="font-semibold text-accent-100">7–10% after inflation</span>, compared with about{' '}
                <span className="font-semibold text-accent-100">1–3%</span> for traditional savings accounts.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Simulation
              </Link>
              <Link
                to="/training"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 border border-white/30 shadow-sm backdrop-blur"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Page 1: Learn the Stock Market */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <h2 className="text-4xl font-bold text-navy-900">Learn the Stock Market</h2>
            <ProgressiveDisclosure level={viewLevel} onLevelChange={setViewLevel} />
          </div>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            This platform teaches investing using{' '}
            <span className="font-semibold">real market data, real financial metrics, and real decision-making
            scenarios</span>, without risking real money. You'll move from core concepts to hands-on practice.
          </p>
        </div>

        {/* What Is the Stock Market */}
        <div className="mb-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">What Is the Stock Market?</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              The stock market is a system where shares of publicly traded companies are bought and sold. When you buy
              a share (also called a stock), you&apos;re purchasing partial ownership in that company.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              As companies grow and become more profitable, the value of their shares may increase, allowing investors
              to earn returns.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Helps companies raise money to expand and innovate</li>
              <li>Allows individuals to build wealth over time</li>
              <li>Provides price discovery based on supply and demand</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-primary-100">
            <h4 className="text-xl font-semibold text-navy-900 mb-3">Real-World Example: Apple (AAPL)</h4>
            <ul className="space-y-2 text-slate-700">
              <li>
                <span className="font-semibold">Shares outstanding:</span> ~15.7 billion
              </li>
              <li>
                <span className="font-semibold">Share price:</span> $180
              </li>
              <li>
                <span className="font-semibold">Market capitalization:</span> 15.7B × $180 ≈{' '}
                <span className="font-semibold text-navy-900">$2.83 trillion</span>
              </li>
              <li>
                Buying <span className="font-semibold">1 share</span> means you own{' '}
                <span className="font-semibold">1 / 15,700,000,000</span> of the company.
              </li>
            </ul>
          </div>
        </div>

        {/* Key Investing Concepts */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Key Investing Concepts (With Numbers)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-primary-100">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-semibold text-navy-900">Stocks (Equities)</h4>
                <ExplainButton
                  concept="Stocks"
                  context="Stocks represent ownership in a company. The S&P 500 averages about 10% annual returns before inflation."
                />
              </div>
              <p className="text-slate-700 mb-3">
                Average long-term return of the S&amp;P 500 is about{' '}
                <span className="font-semibold">
                  10% per year before inflation{' '}
                  <ExplainButton concept="S&P 500 Annual Return" context="Historical average return of the S&P 500 index before adjusting for inflation." />
                </span>.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Example: Buy 10 shares at $50 = <span className="font-semibold">$500</span>. If price rises to $65,
                your position is worth <span className="font-semibold">$650</span> — a{' '}
                <span className="font-semibold">$150 (+30%)</span> gain.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-primary-100">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-semibold text-navy-900">Dividends</h4>
                <ExplainButton
                  concept="Dividends"
                  context="Some companies share profits directly with shareholders through cash dividends. Example: $2 per share annually means $100/year income for 50 shares."
                />
              </div>
              <p className="text-slate-700 mb-3">
                Some companies share profits directly with shareholders through cash dividends.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Example: Annual dividend is <span className="font-semibold">$2 per share</span>. Owning 50 shares
                provides <span className="font-semibold">$100/year</span> in cash income.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-primary-100">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-semibold text-navy-900">Bonds</h4>
                <ExplainButton
                  concept="Bonds"
                  context="Bonds are loans to governments or companies. They typically yield 2-5% annually with lower volatility than stocks."
                />
              </div>
              <p className="text-slate-700 mb-3">
                Bonds are loans to governments or companies, typically yielding{' '}
                <span className="font-semibold">2–5% annually</span> with lower volatility than stocks.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Example: Invest $1,000 at <ExplainButton concept="Bond Yield" value="4%" context="4% annual interest rate on a bond." /> and you earn{' '}
                <span className="font-semibold">$40/year</span> in interest.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-primary-100">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-semibold text-navy-900">ETFs</h4>
                <ExplainButton
                  concept="Exchange-Traded Funds (ETFs)"
                  context="ETFs bundle many stocks or bonds into one investment, providing diversification. Example: S&P 500 ETF (VOO) holds about 500 companies."
                />
              </div>
              <p className="text-slate-700 mb-3">
                Exchange-Traded Funds (ETFs) bundle many stocks or bonds into one investment, adding diversification.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Example: An S&amp;P 500 ETF like VOO holds about 500 companies and may charge an expense ratio around{' '}
                <span className="font-semibold">
                  <ExplainButton concept="Expense Ratio" value="0.03%" context="The annual fee charged by an ETF, expressed as a percentage. 0.03% means $3 per $10,000 invested." /> per year
                </span> ($3 per $10,000 invested).
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-primary-100">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-semibold text-navy-900">Mutual Funds</h4>
                <ExplainButton
                  concept="Mutual Funds"
                  context="Professionally managed funds that pool money from many investors to buy diversified portfolios of stocks, bonds, or other assets."
                />
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Professionally managed funds that pool money from many investors to buy diversified portfolios of
                stocks, bonds, or other assets.
              </p>
            </div>
          </div>
        </div>

        {/* Different Ways to Invest */}
        <div className="mb-12 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Different Ways to Invest (Quantified)</h3>
            <div className="space-y-4 text-slate-700">
              <div>
                <h4 className="font-semibold text-navy-900">Long-Term Investing</h4>
                <p className="text-sm leading-relaxed">
                  Time horizon: <span className="font-semibold">10–40 years</span>. Goal: compound growth over decades.
                </p>
                <p className="text-sm leading-relaxed">
                  Example: $1,000 invested at 8% for 30 years grows to roughly{' '}
                  <span className="font-semibold">$10,063</span>.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900">
                  Value Investing{' '}
                  <ExplainButton
                    concept="Value Investing"
                    context="Focus on companies with valuation metrics like P/E below 15-20, price-to-book below 2, and consistent positive cash flow."
                  />
                </h4>
                <p className="text-sm leading-relaxed">
                  Focus on companies with valuation metrics like{' '}
                  <span className="font-semibold">
                    P/E below{' '}
                    <ExplainButton
                      concept="P/E Ratio"
                      value="15–20"
                      context="Price-to-Earnings ratio. A P/E of 15-20 is generally considered reasonable for value investing. Lower P/E may indicate undervaluation."
                    />
                  </span>
                  , price-to-book below{' '}
                  <span className="font-semibold">
                    <ExplainButton
                      concept="Price-to-Book Ratio"
                      value="2"
                      context="Price-to-book ratio compares a stock's market value to its book value. Below 2 is often considered reasonable for value stocks."
                    />
                  </span>
                  , and consistent positive cash flow.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900">
                  Growth Investing{' '}
                  <ExplainButton
                    concept="Growth Investing"
                    context="Targets businesses with revenue growth above 15% per year and earnings growth above 20% per year. Higher return potential, higher volatility."
                  />
                </h4>
                <p className="text-sm leading-relaxed">
                  Targets businesses with revenue growth above{' '}
                  <span className="font-semibold">15% per year</span> and earnings growth above{' '}
                  <span className="font-semibold">20% per year</span>. Higher return potential, higher volatility.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900">Trading (Short-Term)</h4>
                <p className="text-sm leading-relaxed">
                  Time horizon ranges from minutes to weeks. Typical daily moves for many stocks are around{' '}
                  <span className="font-semibold">1–3%</span>, and the risk of short-term loss is significantly higher
                  than with long-term investing.
                </p>
              </div>
            </div>
          </div>

          {/* Risk & Diversification */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Risk &amp; Diversification (Measured)</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              All investments involve risk. In general, higher potential returns come with higher risk. Diversification
              reduces risk by spreading investments across many assets.
            </p>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-primary-100 mb-4">
              <ul className="space-y-2 text-slate-700">
                <li>
                  <span className="font-semibold">Single stock volatility:</span> often{' '}
                  <span className="font-semibold">
                    <ExplainButton
                      concept="Volatility"
                      value="20–40%"
                      context="Volatility measures how much a stock's price moves up and down. Single stocks often have 20-40% annual volatility, meaning prices can swing significantly."
                    />{' '}
                    per year
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Diversified ETF volatility:</span> often{' '}
                  <span className="font-semibold">
                    <ExplainButton
                      concept="ETF Volatility"
                      value="10–15%"
                      context="Diversified ETFs spread risk across many stocks, reducing volatility to typically 10-15% per year, lower than individual stocks."
                    />{' '}
                    per year
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              A portfolio holding only 1 stock is highly concentrated and risky. A portfolio with{' '}
              <span className="font-semibold">20+ stocks across 5 or more sectors</span> has significantly reduced
              company-specific risk and smoother performance.
            </p>
          </div>
        </div>

        {/* Learning Tools */}
        <div className="bg-primary-900 rounded-2xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-4">Learning Tools on This Platform</h3>
          <p className="text-primary-100 mb-4">
            Everything you learn here connects directly to a live market simulation and your personal portfolio view.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-primary-100">
            <li className="flex items-start">
              <span className="mt-1 mr-3 text-accent-300">•</span>
              <span>Interactive lessons and short quizzes that reinforce each concept</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 text-accent-300">•</span>
              <span>Visual explanations of market concepts using charts and real tickers</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 text-accent-300">•</span>
              <span>Real-world examples and case studies using current companies</span>
            </li>
            <li className="flex items-start">
              <span className="mt-1 mr-3 text-accent-300">•</span>
              <span>Seamless transition into a live market simulation with virtual cash</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Explore the Rest of InvestED</h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Move from concepts to practice with our simulation, portfolio dashboard, and AI assistant.
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
                    <span>Open page</span>
                    <svg
                      className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
