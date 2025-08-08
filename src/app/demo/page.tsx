'use client';

import { useState } from 'react';
import { ErrorDisplay } from '@/components/ui/error-display';
import { Loading } from '@/components/ui/loading';

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<'forms' | 'data' | 'interactions'>(
    'forms'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleAction = async (action: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(`${action} completed:`, formData);
    } catch (error) {
      console.error(error);
      setError(`Failed to ${action.toLowerCase()}`);
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'forms', label: 'Forms & Input' },
    { id: 'data', label: 'Data Display' },
    { id: 'interactions', label: 'Interactions' },
  ] as const;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Component Patterns Demo
        </h1>
        <p className="text-gray-600">
          Common UI patterns you can use for any interview problem statement.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        {activeTab === 'forms' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Form Handling</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter title..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Archived</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, content: e.target.value }))
                }
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter content..."
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleAction('Save')}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? <Loading size="sm" text="" /> : 'Save'}
              </button>

              <button
                onClick={() => handleAction('Publish')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Publish
              </button>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Data Display</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[1, 2, 3].map((id) => (
                    <tr key={id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        Item {id}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-900">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'interactions' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Interactive Elements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Drag & Drop Area</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                  <p className="text-gray-500">
                    Drop files here or click to upload
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Toggle States</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Enable notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Auto-save</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-6">
            <ErrorDisplay message={error} onRetry={() => setError(null)} />
          </div>
        )}
      </div>
    </div>
  );
}
