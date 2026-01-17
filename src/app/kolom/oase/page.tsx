import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/shared/Icons";

const ARTIKEL_OASE = [
    {
        id: 1,
        title: "Keajaiban Membaca Al-Qur'an di Waktu Subuh",
        excerpt: "Mengungkap rahasia spiritual dan ilmiah dari kebiasaan membaca Al-Qur'an di waktu subuh yang penuh berkah.",
        author: "Ustadz Ahmad Fauzi",
        date: "10 Januari 2026",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Metode Tilawah: Seni Melafalkan Al-Qur'an",
        excerpt: "Panduan lengkap tentang kaidah-kaidah tajwid dan makharijul huruf dalam tilawah Al-Qur'an.",
        author: "Ustadz Yusuf",
        date: "5 Januari 2026",
        image: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Membangun Karakter Qur'ani pada Anak",
        excerpt: "Strategi efektif untuk menanamkan nilai-nilai Al-Qur'an sejak usia dini dalam keluarga.",
        author: "Ustadzah Aminah",
        date: "1 Januari 2026",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Rahasia Ketenangan Jiwa melalui Zikrullah",
        excerpt: "Bagaimana zikir dapat memberikan ketenangan jiwa dan远离 dari kegelisahan hidup modern.",
        author: "Ustadz Fauzi",
        date: "28 Desember 2025",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=800"
    }
];

export default function OasePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Oase Al-Qur'an</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Insight dan renungan mendalam tentang kehidupan Qur'ani yang Insya Allah memberi manfaat.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {ARTIKEL_OASE.map((artikel, idx) => (
                                <AnimatedSection key={artikel.id} delay={idx * 0.1}>
                                    <div className="group cursor-pointer">
                                        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] mb-6 shadow-soft">
                                            <Image
                                                src={artikel.image}
                                                alt={artikel.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 text-sm">
                                                <span className="text-islamic-primary font-semibold">{artikel.author}</span>
                                                <span className="text-text-secondary">•</span>
                                                <span className="text-text-secondary">{artikel.date}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-black group-hover:text-islamic-primary transition-colors leading-snug">
                                                {artikel.title}
                                            </h3>
                                            <p className="text-text-secondary line-clamp-2">
                                                {artikel.excerpt}
                                            </p>
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
