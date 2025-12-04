import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            <span className="text-xl font-bold text-gray-900">
              Grand Rapids Events
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/events"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Events
            </Link>
            <Link 
              href="/summaries"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Summaries
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}