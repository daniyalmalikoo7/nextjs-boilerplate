import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Interview Boilerplate
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/demo"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
