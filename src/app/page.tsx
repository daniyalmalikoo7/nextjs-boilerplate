import Link from 'next/link';
import { Loading } from '@/components/ui/loading';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Interview Project Boilerplate
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Ready-to-code Next.js setup with TypeScript, Tailwind CSS, React
          Query, and Zod.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <Link
            href="/demo"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Demo
          </Link>
          <button
            type="button"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Start Building
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">TypeScript Ready</h3>
          <p className="text-gray-600">
            Full TypeScript support with proper type definitions.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">React Query</h3>
          <p className="text-gray-600">
            Server state management with caching and error handling.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Zod Validation</h3>
          <p className="text-gray-600">
            Runtime type checking and data validation.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-2xl font-semibold mb-4">Available Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Loading States:</h4>
            <Loading text="Loading..." size="sm" />
          </div>
          <div>
            <h4 className="font-medium mb-2">Error Boundaries:</h4>
            <p className="text-sm text-gray-600">
              Automatic error handling setup
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Form Validation:</h4>
            <p className="text-sm text-gray-600">
              Zod schemas ready for any forms
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">State Management:</h4>
            <p className="text-sm text-gray-600">
              React Query + local storage hooks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
