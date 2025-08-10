import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6" />
          <span className="text-lg font-semibold">Next.js Boilerplate</span>
        </Link>
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </a>
        </Button>
      </div>
    </header>
  );
}
