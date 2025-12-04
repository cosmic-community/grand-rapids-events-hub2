export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Grand Rapids Events Hub</h3>
            <p className="text-gray-400">
              Your go-to source for discovering the best events happening in Grand Rapids, Michigan.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/summaries" className="text-gray-400 hover:text-white transition-colors">
                  Summaries
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400">
              This site aggregates events from RSS feeds to help you stay connected with Grand Rapids' vibrant community.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Grand Rapids Events Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}