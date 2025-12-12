export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent-200">InvestED</h3>
            <p className="text-gray-300 leading-relaxed">
              Learning Investing Through Clarity, Discipline, and Governance.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="/charter" className="hover:text-primary-400 transition-colors">Fund Charter</a></li>
              <li><a href="/ips" className="hover:text-primary-400 transition-colors">IPS</a></li>
              <li><a href="/training" className="hover:text-primary-400 transition-colors">Training Pathway</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary-300 transition-colors">Monthly Letters</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Learning Materials</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} InvestED. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Educational Fund Initiative
          </p>
        </div>
      </div>
    </footer>
  )
}
