import { ShieldCheckIcon, ChartBarIcon, TrendingUpIcon } from '../components/Icons'

export default function About() {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <section className="bg-primary-50 border-b border-primary-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">Market Simulation Game</h1>
          <p className="text-xl text-slate-600">
            Real market conditions, real metrics, and zero real-world financial risk.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Starting Conditions */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-10 border border-primary-100">
            <div className="flex items-center mb-6">
              <TrendingUpIcon className="w-10 h-10 text-accent-600 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Starting Conditions</h2>
                <p className="text-slate-600">
                  Everyone begins with the same starting point so performance comes from decisions, not luck.
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>
                <span className="font-semibold">Starting virtual cash:</span> $100,000
              </li>
              <li>
                <span className="font-semibold">Commission per trade:</span> $0 (simulation-only)
              </li>
              <li>
                <span className="font-semibold">Market data:</span> real-time or delayed up to 15 minutes
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              You can buy and sell stocks and ETFs exactly as you would in a real brokerage account, but all money is
              virtual. This lets you experiment, make mistakes, and learn without any financial downside.
            </p>
          </div>
        </section>

        {/* Tradable Assets & Mechanics */}
        <section className="mb-16 grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-primary-100 rounded-lg shadow-md p-8 border border-primary-200">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Tradable Assets</h2>
            <ul className="space-y-3 text-slate-700">
              <li>6,000+ US-listed stocks across major exchanges</li>
              <li>1,000+ Exchange-Traded Funds (ETFs)</li>
              <li>Major market indices (S&amp;P 500, NASDAQ, etc.) for benchmarking</li>
            </ul>
            <p className="mt-4 text-slate-700 text-sm leading-relaxed">
              You can track how your simulated performance compares to broad market benchmarks, just like a professional
              investor would.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-primary-100">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Orders &amp; Trades</h2>
            <ul className="space-y-2 text-slate-700">
              <li>
                <span className="font-semibold">Market orders:</span> execute immediately at the current market price.
              </li>
              <li>
                <span className="font-semibold">Limit orders:</span> execute only if the price hits your chosen level.
              </li>
            </ul>
            <p className="mt-4 text-slate-700 text-sm leading-relaxed">
              Example: If you place a market order to buy 100 shares at $180,{' '}
              <span className="font-semibold">$18,000</span> in virtual cash is deducted from your balance. The
              portfolio view immediately reflects your new position.
            </p>
          </div>
        </section>

        {/* Example Stock Page (AAPL) */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-10 border border-primary-100">
            <div className="flex items-center mb-6">
              <ChartBarIcon className="w-10 h-10 text-accent-600 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Example Stock Page: AAPL</h2>
                <p className="text-slate-600">Each stock page combines fundamental and technical views.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Fundamental Data</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>
                    <span className="font-semibold">Revenue (TTM):</span> $383B
                  </li>
                  <li>
                    <span className="font-semibold">Net income:</span> $97B
                  </li>
                  <li>
                    <span className="font-semibold">Earnings per share (EPS):</span> $6.13
                  </li>
                  <li>
                    <span className="font-semibold">P/E ratio:</span> 29.4
                  </li>
                  <li>
                    <span className="font-semibold">Debt-to-equity ratio:</span> 1.7
                  </li>
                </ul>
                <div className="mt-4 bg-slate-50 border-l-4 border-accent-500 rounded-r-lg p-4 text-sm text-slate-700">
                  <p className="mb-1 font-semibold text-slate-900">AI explanation example:</p>
                  <p>
                    “Apple trades above the market average P/E of ~20, meaning investors expect strong future growth but
                    are paying a premium for that growth.”
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Technical Data</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>
                    <span className="font-semibold">50-day moving average:</span> $176
                  </li>
                  <li>
                    <span className="font-semibold">200-day moving average:</span> $162
                  </li>
                  <li>
                    <span className="font-semibold">RSI (14-day):</span> 63 (bullish, not yet overbought)
                  </li>
                  <li>
                    <span className="font-semibold">Support level:</span> $170
                  </li>
                  <li>
                    <span className="font-semibold">Resistance level:</span> $185
                  </li>
                </ul>
                <div className="mt-4 bg-slate-50 border-l-4 border-accent-500 rounded-r-lg p-4 text-sm text-slate-700">
                  <p className="mb-1 font-semibold text-slate-900">AI explanation example:</p>
                  <p>
                    “The stock is trading above both key moving averages, indicating an upward trend. RSI near 63 shows
                    strong momentum but not extreme overbought conditions.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Tracking & Analytics */}
        <section>
          <div className="bg-primary-900 rounded-lg shadow-xl p-10 text-white">
            <div className="flex items-center mb-6">
              <ShieldCheckIcon className="w-10 h-10 text-accent-200 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">Performance Tracking & Analytics</h2>
                <p className="text-primary-100">
                  See exactly how your decisions perform over time, adjusted for risk.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Core Metrics</h3>
                <ul className="space-y-2 text-primary-100">
                  <li>Total return (%) on your whole portfolio</li>
                  <li>Annualized return to compare across time periods</li>
                  <li>Portfolio volatility (how much your returns move around)</li>
                  <li>Sharpe ratio for risk-adjusted performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Learning by Doing</h3>
                <ul className="space-y-2 text-primary-100">
                  <li>Performance breakdowns after each trade</li>
                  <li>AI feedback on why a decision helped or hurt results</li>
                  <li>Comparisons to benchmarks like the S&amp;P 500</li>
                  <li>
                    Explanations of how news, earnings, or macro events may have influenced price moves
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
