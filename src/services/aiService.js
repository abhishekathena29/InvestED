import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const MODEL_NAME = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.0-flash'

let genAI, model
let useAPI = false

try {
  if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY)
    model = genAI.getGenerativeModel({ model: MODEL_NAME })
    useAPI = true
    console.log(`AI model initialized with ${MODEL_NAME}`)
  } else {
    console.warn('Missing VITE_GEMINI_API_KEY; using fallback explanations.')
  }
} catch (error) {
  console.warn('Failed to initialize Google AI:', error)
  useAPI = false
}

// Fallback explanations when API is not available
const fallbackExplanations = {
  'Stocks': 'Stocks (also called equities) represent ownership shares in a company. When you buy a stock, you own a small piece of that company. Stocks can increase or decrease in value based on company performance and market conditions.',
  'Dividends': 'Dividends are cash payments that companies make to shareholders from their profits. Companies that pay dividends share a portion of their earnings with investors regularly, providing income in addition to potential stock price appreciation.',
  'Bonds': 'Bonds are loans you give to governments or companies. In exchange for your money, you receive regular interest payments. Bonds are generally lower risk than stocks but offer lower potential returns.',
  'ETFs': 'Exchange-Traded Funds (ETFs) are collections of stocks or bonds bundled together. They provide diversification by spreading your investment across many assets, reducing risk compared to owning individual stocks.',
  'Mutual Funds': 'Mutual Funds are professionally managed investment funds that pool money from many investors to buy diversified portfolios of stocks, bonds, or other assets.',
  'P/E Ratio': 'The Price-to-Earnings (P/E) ratio compares a stock\'s price to its earnings per share. A P/E of 15-20 is generally considered reasonable for value investing. Lower P/E may indicate undervaluation, while higher P/E suggests growth expectations.',
  'Price-to-Book Ratio': 'Price-to-Book ratio compares a stock\'s market value to its book value (assets minus liabilities). A ratio below 2 is often considered reasonable for value stocks, indicating the stock may be trading near or below its asset value.',
  'Volatility': 'Volatility measures how much a stock\'s price moves up and down. Single stocks often have 20-40% annual volatility, meaning prices can swing significantly. Higher volatility means higher risk but also potentially higher returns.',
  'ETF Volatility': 'Diversified ETFs spread risk across many stocks, reducing volatility to typically 10-15% per year, lower than individual stocks. This makes ETFs less risky but also potentially lower in returns.',
  'Expense Ratio': 'The expense ratio is the annual fee charged by an ETF or mutual fund, expressed as a percentage. For example, 0.03% means $3 per $10,000 invested. Lower expense ratios are better as they reduce your returns.',
  'Value Investing': 'Value investing focuses on finding companies trading below their intrinsic value. Investors look for low P/E ratios (below 15-20), low price-to-book ratios (below 2), and consistent positive cash flow.',
  'Growth Investing': 'Growth investing targets companies expected to grow faster than the market. These companies often have revenue growth above 15% per year and earnings growth above 20% per year. Higher return potential comes with higher volatility.',
  'Bond Yield': 'Bond yield is the annual interest rate a bond pays. For example, a 4% yield on a $1,000 bond means you earn $40 per year in interest. Government bonds typically yield 2-5% annually.',
  'S&P 500 Annual Return': 'The S&P 500 index has historically averaged about 10% annual returns before inflation. This represents the average performance of 500 large U.S. companies over long periods.',
  'Stock Market': 'The stock market is a marketplace where shares of publicly traded companies are bought and sold. It helps companies raise capital and allows investors to build wealth over time through stock ownership.',
}

/**
 * Get AI explanation for a concept
 * @param {string} concept - The concept to explain (e.g., "P/E Ratio", "RSI", "Dividends")
 * @param {string} context - Additional context (e.g., current stock ticker, value)
 * @returns {Promise<string>} AI-generated explanation
 */
export async function explainConcept(concept, context = '') {
  // Try API first if available
  if (useAPI && model) {
    try {
      const prompt = `You are an educational AI assistant helping students learn about investing. Explain "${concept}" in simple, clear terms.
    
${context ? `Context: ${context}\n` : ''}

Provide:
1. A simple definition (1-2 sentences)
2. Why it matters for investors
3. What is considered "high" or "low" (if applicable)
4. A short, concrete example

Keep it concise (3-4 sentences total), beginner-friendly, and focused on learning. Use numbers when helpful.`

      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()
      return text
    } catch (error) {
      console.error('AI API error, using fallback:', error)
      // Fall through to fallback
    }
  }

  // Use fallback explanation
  const fallback = fallbackExplanations[concept] ||
    `${concept} is an important investing concept. ${context || 'It helps investors make informed decisions.'} Understanding this concept is key to becoming a successful investor.`

  return fallback
}

/**
 * Get contextual AI explanation with stock/portfolio context
 * @param {string} question - User's question
 * @param {Object} context - Context object (stock, portfolio data, etc.)
 * @returns {Promise<string>} AI-generated response
 */
export async function askContextualQuestion(question, context = {}) {
  // Try API first if available
  if (useAPI && model) {
    try {
      let contextStr = ''
      if (context.stock) {
        contextStr += `Stock: ${context.stock}\n`
      }
      if (context.value) {
        contextStr += `Current value: ${context.value}\n`
      }
      if (context.portfolio) {
        contextStr += `Portfolio context: ${JSON.stringify(context.portfolio)}\n`
      }

      const prompt = `You are an educational AI assistant helping students learn about investing. Answer this question in a helpful, educational way:

Question: ${question}

${contextStr ? `Context:\n${contextStr}` : ''}

Guidelines:
- Explain concepts clearly and simply
- Use numbers and examples when helpful
- Focus on education, not financial advice
- Mention risks and probabilities, not guarantees
- Keep it concise (4-6 sentences)
- Be encouraging and supportive

Answer:`

      const result = await model.generateContent(prompt)
      const response = await result.response
      return response.text()
    } catch (error) {
      console.error('AI API error, using fallback:', error)
      // Fall through to fallback
    }
  }

  // Fallback response - try to match common questions to explanations
  const lowerQuestion = question.toLowerCase()

  // Check if question mentions a known concept
  for (const [concept, explanation] of Object.entries(fallbackExplanations)) {
    const lowerConcept = concept.toLowerCase()
    if (lowerQuestion.includes(lowerConcept) || lowerQuestion.includes(lowerConcept.replace(/\s+/g, ''))) {
      return explanation
    }
  }

  // Generic fallback
  return `I understand you're asking about: "${question}". While the AI service is currently unavailable, I'd be happy to help you learn about investing concepts. Please try asking about specific concepts like "P/E Ratio", "Dividends", "Volatility", or "Value Investing" using the "?" buttons on the page for detailed explanations.`
}
