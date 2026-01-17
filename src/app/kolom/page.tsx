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
        title: "Oase Al-Qur'an: Menemukan Kedamaian dalam Tilawah",
        excerpt: "Tilawah Al-Qur'an bukan sekadar membaca, melainkan sebuah dialog spiritual yang menenangkan jiwa...",
        author: "Ustadz Prof. Dr. KH. Ahsin Sakho Muhammad",
        date: "10 Januari 2026",
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800",
        category: "Oase Al-Qur’an"
    },
    {
        id: 2,
        title: "Kalam Hikmah: Keutamaan Menuntut Ilmu di Masa Muda",
        excerpt: "Masa muda adalah masa emas untuk menanam benih pengetahuan yang akan dipanen di masa depan...",
        author: "KH. Syarif Rahmat RA, SQ, MA",
        date: "8 Januari 2026",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        category: "Kalam Hikmah"
    },
    {
        id: 3,
        title: "Artikel: Implementasi Adab dalam Keseharian Santri",
        excerpt: "Adab berada di atas ilmu. Bagaimana seorang santri seharusnya bersikap kepada guru, teman, dan lingkungan...",
        author: "Tim Akademik DQ",
        date: "5 Januari 2026",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
        category: "Artikel"
    }
];

export default function KolomPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-12">
                {/* Hero Section */}
                <section className="bg-surface-secondary py-20 border-b border-border-light text-center">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Kolom Karya Tulis</h1>
                            <p className="text-xl text-text-secondary max-w-4xl mx-auto text-center leading-relaxed italic whitespace-normal">
                                "Sampaikanlah dariku walau hanya satu ayat."
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6">
                        <div className="space-y-24">
                            {ARTICLES.map((article, idx) => (
                                <AnimatedSection key={article.id} delay={idx * 0.1}>
                                    <article className="group cursor-pointer">
                                        <div className="mb-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-xs font-bold text-islamic-primary uppercase tracking-widest bg-islamic-primary/5 px-3 py-1 rounded-full">
                                                    {article.category}
                                                </span>
                                                <span className="text-xs text-text-secondary">{article.date}</span>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold text-black group-hover:text-islamic-primary transition-colors leading-tight mb-4">
                                                {article.title}
                                            </h2>
                                            <p className="text-sm font-medium text-text-secondary mb-6">
                                                Oleh: <span className="text-black font-semibold">{article.author}</span>
                                            </p>
                                        </div>

                                        <div className="relative aspect-[16/8] overflow-hidden rounded-[32px] mb-8 shadow-soft">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                            {article.excerpt}
                                        </p>

                                        <Link href="#" className="inline-flex items-center gap-2 text-islamic-primary font-bold border-b-2 border-islamic-primary/10 hover:border-islamic-primary transition-all pb-1">
                                            Baca Tulisan Lengkap
                                        </Link>
                                    </article>
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
