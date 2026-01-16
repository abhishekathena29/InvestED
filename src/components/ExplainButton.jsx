import { useState } from 'react'
import { explainConcept } from '../services/aiService'

/**
 * Clickable "Explain This" button that shows AI popup
 * @param {string} concept - The concept to explain (e.g., "P/E Ratio", "RSI")
 * @param {string} context - Additional context (e.g., "Apple (AAPL) has a P/E of 29.4")
 * @param {string} value - Optional value to display (e.g., "29.4")
 */
export default function ExplainButton({ concept, context = '', value = null }) {
  const [isOpen, setIsOpen] = useState(false)
  const [explanation, setExplanation] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isOpen) {
      setIsOpen(false)
      return
    }

    setIsOpen(true)
    setIsLoading(true)
    setExplanation('')

    try {
      const fullContext = value ? `${concept}: ${value}. ${context}` : context
      const response = await explainConcept(concept, fullContext)
      setExplanation(response)
    } catch (error) {
      console.error('ExplainButton error:', error)
      setExplanation(`I'm having trouble explaining "${concept}" right now. Please try again later. Error: ${error.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="inline-flex items-center gap-1">
      {value && <span className="font-semibold">{value}</span>}
      <button
        onClick={handleClick}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent-100 hover:bg-accent-200 text-accent-700 hover:text-accent-800 text-xs font-semibold transition-colors relative group"
        aria-label={`Explain ${concept}`}
        title={`Explain ${concept}`}
      >
        ?
        {/* Tooltip on hover */}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
          Explain {concept}
        </span>
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false)
          }}
        >
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg m-4">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-primary-100">
              <h3 className="text-lg font-bold text-navy-900">What is {concept}?</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <svg className="w-8 h-8 animate-spin text-accent-600" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              ) : (
                <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">{explanation}</div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-primary-100 bg-primary-50 rounded-b-xl">
              <p className="text-xs text-slate-600">
                This explanation is for educational purposes only and does not constitute financial advice.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

