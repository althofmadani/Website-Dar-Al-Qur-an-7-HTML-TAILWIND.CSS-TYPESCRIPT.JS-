"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/shared/Icons";

const ARTICLES = [
    {
        id: 1,
        title: "Kunjungan Studi Banding dari Pesantren Al-Ikhlas",
        excerpt: "Pondok Pesantren Dar Al-Qur'an menyambut hangat kunjungan dari Pesantren Al-Ikhlas dalam rangka berbagi metode tahfidz...",
        category: "Kegiatan",
        date: "12 Januari 2026",
        image: "https://images.unsplash.com/photo-1523050853063-bd8012fec0c8?auto=format&fit=crop&q=80&w=800",
        featured: true
    },
    {
        id: 2,
        title: "Wisuda Tahfidz Angkatan Ke-15",
        excerpt: "Momen haru dan bahagia menyelimuti aula utama saat 50 santri resmi diwisuda sebagai Hafidz Al-Qur'an...",
        category: "Kegiatan",
        date: "5 Januari 2026",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
        featured: false
    },
    {
        id: 3,
        title: "Penerimaan Santri Baru Tahun Ajaran 2026/2027",
        excerpt: "Informasi lengkap mengenai jadwal pendaftaran, persyaratan, dan alur seleksi masuk Pondok Pesantren Dar Al-Qur'an...",
        category: "Pendaftaran",
        date: "1 Januari 2026",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa1b4233?auto=format&fit=crop&q=80&w=800",
        featured: false
    }
];

export default function BeritaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-12">
                {/* Hero Section */}
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Berita & Media</h1>
                            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                                Ikuti perkembangan terbaru, kegiatan santri, dan informasi penting lainnya dari Pondok Pesantren Dar Al-Qur'an.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        {/* Featured Article */}
                        <div className="mb-20">
                            <AnimatedSection>
                                <h2 className="text-[13px] font-bold text-islamic-primary uppercase tracking-widest mb-10">Sorotan Utama</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group cursor-pointer">
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] shadow-premium">
                                        <Image
                                            src={ARTICLES[0].image}
                                            alt={ARTICLES[0].title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="bg-islamic-primary/10 text-islamic-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                                                {ARTICLES[0].category}
                                            </span>
                                            <span className="text-sm text-text-secondary">{ARTICLES[0].date}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-black group-hover:text-islamic-primary transition-colors leading-tight">
                                            {ARTICLES[0].title}
                                        </h3>
                                        <p className="text-lg text-text-secondary leading-relaxed">
                                            {ARTICLES[0].excerpt}
                                        </p>
                                        <Link href="#" className="inline-flex items-center gap-2 text-islamic-primary font-bold hover:gap-3 transition-all">
                                            Baca Selengkapnya <Icons.ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Articles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                            {ARTICLES.slice(1).map((article, idx) => (
                                <AnimatedSection key={article.id} delay={idx * 0.1}>
                                    <div className="group cursor-pointer">
                                        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] mb-6 shadow-soft">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <span className="text-xs font-bold text-islamic-primary uppercase tracking-widest">
                                                    {article.category}
                                                </span>
                                                <span className="text-xs text-text-secondary">{article.date}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-black group-hover:text-islamic-primary transition-colors leading-snug">
                                                {article.title}
                                            </h3>
                                            <p className="text-text-secondary line-clamp-2">
                                                {article.excerpt}
                                            </p>
                                            <Link href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-islamic-primary">
                                                Selengkapnya <Icons.ChevronRight size={14} />
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
