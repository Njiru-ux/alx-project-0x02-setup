import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to ALX Next.js Project
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            This is a comprehensive Next.js project with TypeScript and Tailwind CSS.
          </p>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Project Features:
            </h2>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
              <li>Next.js 14 with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>ESLint for code quality</li>
              <li>Pages Router for navigation</li>
              <li>Reusable components</li>
              <li>API integration examples</li>
            </ul>
          </div>
          <div className="mt-8">
            <a
              href="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>ALX Project 0x02 - Next.js Setup and Basics</p>
        </div>
      </footer>
    </div>
  )
}