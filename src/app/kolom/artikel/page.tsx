import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/shared/Icons";

const ARTIKEL = [
    {
        id: 1,
        title: "Pendidikan Karakter: Fondasi Utama dalam Pembangunan Generasi",
        excerpt: "Membangun karakter mulia sejak dini merupakan investasi terbaik untuk masa depan bangsa. Bagaimana pendidikan Islam memandang pentingnya aspek ini.",
        author: "Tim Penulis",
        category: "Pendidikan",
        date: "12 Januari 2026",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Mengenal Sistem Pendidikan Terpadu di Pondok Modern",
        excerpt: "Bagaimana perpaduan antara pendidikan formal dan non-formal dapat menghasilkan lulusan yang kompeten secara akademik dan spiritual.",
        author: "Ustadz Yusuf",
        category: "Pendidikan",
        date: "8 Januari 2026",
        image: "https://images.unsplash.com/photo-1523050853063-bd8012fec0c8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Peran Orang Tua dalam Mendidik Anak di Era Digital",
        excerpt: "Tantangan dan peluang dalam mendidik anak di era teknologi informasi yang berkembang sangat pesat.",
        author: "Ustadzah Sarah",
        category: "Parenting",
        date: "5 Januari 2026",
        image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Tahfidz Al-Qur'an untuk Anak: Strategi yang Efektif",
        excerpt: "Panduan praktis bagi orang tua dalam mendampingi anak dalam menghafal Al-Qur'an dengan metode yang menyenangkan.",
        author: "Ustadz Fauzi",
        category: "Tahfidz",
        date: "1 Januari 2026",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "Membangun Lingkungan Belajar yang Islami",
        excerpt: "Pentingnya menciptakan atmosfer yang kondusif untuk proses belajar mengajar yang berorientasi pada nilai-nilai Islam.",
        author: "Ustadzah Aminah",
        category: "Pendidikan",
        date: "28 Desember 2025",
        image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        title: "Integrasi Teknologi dalam Pembelajaran Al-Qur'an",
        excerpt: "Bagaimana memanfaatkan teknologi modern tanpa kehilangan esensi spiritual dalam mempelajari kalamullah.",
        author: "Tim IT",
        category: "Teknologi",
        date: "25 Desember 2025",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    }
];

export default function ArtikelPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Artikel</h1>
                            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                                Kumpulan artikel inspiratif dan edukatif untuk menambah wawasan keislaman Anda.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ARTIKEL.map((artikel, idx) => (
                                <AnimatedSection key={artikel.id} delay={idx * 0.05}>
                                    <div className="group cursor-pointer h-full flex flex-col">
                                        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] mb-4 shadow-soft">
                                            <Image
                                                src={artikel.image}
                                                alt={artikel.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <span className="absolute top-4 left-4 bg-islamic-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {artikel.category}
                                            </span>
                                        </div>
                                        <div className="space-y-3 flex-grow">
                                            <div className="flex items-center gap-3 text-sm">
                                                <span className="text-islamic-primary font-semibold">{artikel.author}</span>
                                                <span className="text-text-secondary">•</span>
                                                <span className="text-text-secondary">{artikel.date}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-black group-hover:text-islamic-primary transition-colors leading-snug whitespace-normal">
                                                {artikel.title}
                                            </h3>
                                            <p className="text-text-secondary text-sm">
                                                {artikel.excerpt}
                                            </p>
                                        </div>
                                        <div className="pt-4">
                                            <Link href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-islamic-primary">
                                                Baca Selengkapnya <Icons.ChevronRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

