import Header from '@/components/layout/Header'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About This Project</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              This project demonstrates a comprehensive setup of Next.js with TypeScript and Tailwind CSS.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </main>
    </div>
  )
}