'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-surface-primary">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center py-20">
            <h1 className="text-6xl font-bold text-islamic-primary mb-6">500</h1>
            <h2 className="text-3xl font-bold text-black mb-4">Terjadi Kesalahan</h2>
            <p className="text-text-secondary text-lg mb-8 max-w-[600px] mx-auto">
              Maaf, terjadi kesalahan pada sistem. Silakan coba lagi atau hubungi administrator.
            </p>
            <button
              onClick={() => reset()}
              className="bg-islamic-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

