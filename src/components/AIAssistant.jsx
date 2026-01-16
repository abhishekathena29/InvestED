import { useState, useEffect } from 'react'
import { askContextualQuestion } from '../services/aiService'

export default function AIAssistant({ context = {} }) {
  const [isOpen, setIsOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAsk = async (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    
    if (!question.trim()) return

    setIsLoading(true)
    setResponse('')

    try {
      const answer = await askContextualQuestion(question, context)
      setResponse(answer)
    } catch (error) {
      console.error('AIAssistant error:', error)
      setResponse(`I'm having trouble answering that right now. Please try again. Error: ${error.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-accent-600 hover:bg-accent-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
        aria-label="Open AI Assistant"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <span className="hidden sm:inline font-semibold">AI Assistant</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false)
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col m-4">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy-900">AI Investment Assistant</h2>
                  <p className="text-sm text-slate-600">Ask anything about investing and markets</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {response && (
                <div className="mb-6 bg-primary-50 rounded-lg p-4 border-l-4 border-accent-500">
                  <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">{response}</p>
                </div>
              )}

              {!response && (
                <div className="text-center py-8">
                  <p className="text-slate-600 mb-4">What would you like to learn about?</p>
                  <div className="text-sm text-slate-500 space-y-1">
                    <p>• &quot;Why is Nvidia&apos;s P/E ratio 60 while Apple&apos;s is 29?&quot;</p>
                    <p>• &quot;What happens if interest rates rise by 1%?&quot;</p>
                    <p>• &quot;Explain my portfolio risk in numbers&quot;</p>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-primary-100">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleAsk()
                    }
                  }}
                  placeholder="Ask a question about investing..."
                  className="flex-1 px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  onClick={handleAsk}
                  disabled={isLoading || !question.trim()}
                  className="bg-accent-600 hover:bg-accent-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {isLoading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    'Ask'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

