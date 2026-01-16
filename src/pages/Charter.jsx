import { ShieldCheckIcon, TrendingUpIcon } from '../components/Icons'

export default function Charter() {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <section className="bg-primary-50 border-b border-primary-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <TrendingUpIcon className="w-12 h-12 mr-4 text-gray-700" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Personal Portfolio Dashboard</h1>
          </div>
          <p className="text-xl text-gray-600">
            See your entire simulated financial picture in one place — positions, performance, risk, and history.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Portfolio Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-10 border border-primary-100">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Portfolio Overview</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              At the top of the dashboard, you see a snapshot of your simulated wealth. Numbers update in real time as
              markets move and as you place trades in the simulation.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                <p className="text-sm text-slate-600">Total value</p>
                <p className="text-2xl font-bold text-navy-900">$124,560</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                <p className="text-sm text-slate-600">Cash</p>
                <p className="text-2xl font-bold text-navy-900">$22,300</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                <p className="text-sm text-slate-600">Invested</p>
                <p className="text-2xl font-bold text-navy-900">$102,260</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                <p className="text-sm text-slate-600">Total gain</p>
                <p className="text-2xl font-bold text-emerald-600">+ $24,560 (+24.56%)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Holdings Breakdown */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-10 border border-primary-100 overflow-x-auto">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Holdings Breakdown</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Every position shows shares, cost basis, current price, value, and unrealized gain or loss so you can
              see exactly what&apos;s working and why.
            </p>
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">Stock</th>
                  <th className="px-4 py-2 text-right font-semibold text-slate-700">Shares</th>
                  <th className="px-4 py-2 text-right font-semibold text-slate-700">Avg Cost</th>
                  <th className="px-4 py-2 text-right font-semibold text-slate-700">Current Price</th>
                  <th className="px-4 py-2 text-right font-semibold text-slate-700">Value</th>
                  <th className="px-4 py-2 text-right font-semibold text-slate-700">Gain / Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-2 font-semibold text-slate-900">AAPL</td>
                  <td className="px-4 py-2 text-right">50</td>
                  <td className="px-4 py-2 text-right">$160</td>
                  <td className="px-4 py-2 text-right">$180</td>
                  <td className="px-4 py-2 text-right">$9,000</td>
                  <td className="px-4 py-2 text-right text-emerald-600">+ $1,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-slate-900">MSFT</td>
                  <td className="px-4 py-2 text-right">20</td>
                  <td className="px-4 py-2 text-right">$310</td>
                  <td className="px-4 py-2 text-right">$350</td>
                  <td className="px-4 py-2 text-right">$7,000</td>
                  <td className="px-4 py-2 text-right text-emerald-600">+ $800</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-slate-900">VOO</td>
                  <td className="px-4 py-2 text-right">100</td>
                  <td className="px-4 py-2 text-right">$380</td>
                  <td className="px-4 py-2 text-right">$410</td>
                  <td className="px-4 py-2 text-right">$41,000</td>
                  <td className="px-4 py-2 text-right text-emerald-600">+ $3,000</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-xs text-slate-500">
              Values above are example figures used for learning and illustration.
            </p>
          </div>
        </section>

        {/* Allocation & Risk */}
        <section className="mb-16 grid lg:grid-cols-2 gap-10">
          <div className="bg-primary-100 rounded-lg shadow-md p-8 border border-primary-200">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Allocation Breakdown</h2>
            <p className="text-slate-700 mb-4">
              The dashboard shows how your portfolio is split across sectors and cash so you can quickly check
              diversification.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>
                <span className="font-semibold">Technology:</span> 42%
              </li>
              <li>
                <span className="font-semibold">Healthcare:</span> 18%
              </li>
              <li>
                <span className="font-semibold">Financials:</span> 15%
              </li>
              <li>
                <span className="font-semibold">Consumer:</span> 15%
              </li>
              <li>
                <span className="font-semibold">Cash:</span> 10%
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-primary-100">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-accent-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Risk Metrics</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Risk is quantified so you can connect concepts like beta, drawdown, and volatility to actual numbers.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>
                <span className="font-semibold">Portfolio beta:</span> 1.05
              </li>
              <li>
                <span className="font-semibold">Max drawdown:</span> -12.4%
              </li>
              <li>
                <span className="font-semibold">Annual volatility:</span> 14.8%
              </li>
            </ul>
          </div>
        </section>

        {/* Transaction History */}
        <section>
          <div className="bg-navy-900 rounded-lg shadow-xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-4">Transaction History</h2>
            <p className="text-primary-100 mb-6">
              A complete log of every order helps you review decisions and connect actions to performance.
            </p>
            <div className="bg-navy-800 rounded-lg border border-primary-700 overflow-hidden">
              <table className="min-w-full text-sm">
                <thead className="bg-navy-800/80">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-primary-100">Date</th>
                    <th className="px-4 py-2 text-left font-semibold text-primary-100">Type</th>
                    <th className="px-4 py-2 text-left font-semibold text-primary-100">Ticker</th>
                    <th className="px-4 py-2 text-right font-semibold text-primary-100">Quantity</th>
                    <th className="px-4 py-2 text-right font-semibold text-primary-100">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-800">
                  <tr>
                    <td className="px-4 py-2 text-primary-100">2025-03-12</td>
                    <td className="px-4 py-2 text-emerald-300">Buy</td>
                    <td className="px-4 py-2">AAPL</td>
                    <td className="px-4 py-2 text-right">20</td>
                    <td className="px-4 py-2 text-right">$155</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-primary-100">2025-04-01</td>
                    <td className="px-4 py-2 text-rose-300">Sell</td>
                    <td className="px-4 py-2">TSLA</td>
                    <td className="px-4 py-2 text-right">10</td>
                    <td className="px-4 py-2 text-right">$210</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-primary-200">
              Example trades shown for illustration. In the live simulation, this table reflects your full history.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
