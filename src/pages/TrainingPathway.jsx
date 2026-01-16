import { CheckIcon, AcademicCapIcon, ChartBarIcon, TrendingUpIcon } from '../components/Icons'

export default function TrainingPathway() {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <section className="bg-primary-50 border-b border-primary-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <AcademicCapIcon className="w-12 h-12 mr-4 text-gray-700" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">AI Investment Assistant</h1>
          </div>
          <p className="text-xl text-gray-600">
            Ask questions, explore scenarios, and understand your portfolio with numbers — all focused on learning, not
            advice.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What the AI Can Help With */}
        <section className="mb-16">
          <div className="bg-primary-100 rounded-lg shadow-md p-10 border border-primary-200">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What You Can Ask</h2>
            <p className="text-gray-700 mb-6">
              The AI Assistant is your personal investing guide inside the platform. It&apos;s designed to explain,
              not to tell you what to buy or sell.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Example questions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>&quot;Why is Nvidia’s P/E ratio 60 while Apple’s is 29?&quot;</li>
                  <li>&quot;What happens if interest rates rise by 1%?&quot;</li>
                  <li>&quot;Explain my portfolio risk in numbers.&quot;</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Types of help</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Break down financial statements line by line</li>
                  <li>Explain technical indicators like RSI, MACD, and moving averages</li>
                  <li>Compare multiple stocks or ETFs using concrete metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Example Outputs */}
        <section className="mb-16 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-sm p-10 border border-gray-200">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="w-8 h-8 text-accent-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Portfolio Review (Example)</h2>
            </div>
            <p className="text-gray-700 mb-4">
              When you ask the AI to review your portfolio, it responds with quantified estimates and clear
              explanations.
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>
                <span className="font-semibold">Expected annual return:</span> 7.8%
              </li>
              <li>
                <span className="font-semibold">Worst-case 1-year loss (95% confidence):</span> -18%
              </li>
              <li>
                <span className="font-semibold">Diversification score:</span> 82 / 100
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              These numbers are educational estimates based on historical-style assumptions — not guarantees.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-10 border border-gray-200">
            <div className="flex items-center mb-4">
              <TrendingUpIcon className="w-8 h-8 text-accent-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Stock Comparison (Example)</h2>
            </div>
            <p className="text-gray-700 mb-4">
              When you compare two stocks, the AI lays out metrics side-by-side and then explains what they mean.
            </p>
            <table className="min-w-full text-sm mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-gray-800">Metric</th>
                  <th className="px-3 py-2 text-right font-semibold text-gray-800">AAPL</th>
                  <th className="px-3 py-2 text-right font-semibold text-gray-800">MSFT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2">P/E</td>
                  <td className="px-3 py-2 text-right">29.4</td>
                  <td className="px-3 py-2 text-right">34.1</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Revenue growth</td>
                  <td className="px-3 py-2 text-right">6%</td>
                  <td className="px-3 py-2 text-right">12%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Dividend yield</td>
                  <td className="px-3 py-2 text-right">0.5%</td>
                  <td className="px-3 py-2 text-right">0.8%</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-700">
              AI insight example: “Microsoft shows faster growth, while Apple offers stronger margins and buyback
              support. Both are large, profitable businesses but trade at different valuation levels.”
            </p>
          </div>
        </section>

        {/* Guardrails */}
        <section className="mb-16 bg-accent-50 rounded-lg shadow-sm p-10 border border-gray-200">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Education-Focused Guardrails</h2>
          <p className="text-gray-700 mb-6">
            The assistant is intentionally designed for learning. It explains trade-offs and risks instead of giving
            direct instructions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">No direct buy/sell commands</p>
                  <p className="text-sm text-gray-700">
                    You&apos;ll never see “buy this stock now” — instead, you&apos;ll see pros, cons, and context.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">Emphasis on probabilities</p>
                  <p className="text-sm text-gray-700">
                    The AI talks about scenarios and likelihoods, not certainties or guarantees.
                  </p>
                </div>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">Clear downside explanations</p>
                  <p className="text-sm text-gray-700">
                    Every strategy or idea is paired with potential risks and what could go wrong.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">Reflection on past trades</p>
                  <p className="text-sm text-gray-700">
                    You can ask the AI to walk through your transaction history and help you reflect on why certain
                    decisions worked or didn&apos;t.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Platform Goal */}
        <section className="bg-primary-800 rounded-lg shadow-xl p-10 text-white">
          <h2 className="text-4xl font-bold mb-6">Platform Goal</h2>
          <p className="text-primary-100 mb-6">
            The AI assistant ties the entire InvestED experience together — from lessons, to simulation, to your
            dashboard.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-primary-100">
              <li>Read and interpret financial statements with confidence</li>
              <li>Understand and compare valuation ratios</li>
              <li>Build and analyze diversified portfolios</li>
            </ul>
            <ul className="space-y-3 text-primary-100">
              <li>Explain the &quot;why&quot; behind each of your investment decisions</li>
              <li>Connect real market events to your simulated results</li>
              <li>Develop habits and frameworks you can use beyond the classroom</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
