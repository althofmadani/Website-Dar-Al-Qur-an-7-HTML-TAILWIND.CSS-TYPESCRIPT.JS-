import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
            <h1 className="text-6xl font-bold text-islamic-primary mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau dihapus.
            </p>
            <Link href="/">
                <Button variant="primary">
                    Kembali ke Beranda
                </Button>
            </Link>
        </div>
    );
}
