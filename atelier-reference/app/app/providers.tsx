

"use client";

import { SessionProvider } from 'next-auth/react';
import { useState, useEffect } from 'react';
import LoadingSkeleton from '../components/common/loading-skeleton';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by waiting for client-side mount
  if (!mounted) {
    return (
      <div className="loading-app">
        <div className="container">
          <div style={{ padding: '2rem' }}>
            <LoadingSkeleton variant="card" count={3} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
