'use client';

import { useEffect } from 'react';
import { ErrorDisplay } from '@/components/ui/error-display';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ErrorDisplay
        title="Application Error"
        message={error.message || 'Something went wrong with the application'}
        onRetry={reset}
      />
    </div>
  );
}
