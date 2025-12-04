import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <Link href="/" className="text-xl font-bold text-gray-800">
              ALX Project
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/posts" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Posts
            </Link>
            <Link 
              href="/users" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Users
            </Link>
          </div>
          
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}