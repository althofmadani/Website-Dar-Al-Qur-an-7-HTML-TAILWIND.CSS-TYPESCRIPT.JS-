"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { useState } from "react";

const GALERI = [
    { id: 1, title: "Wisuda Tahfidz", category: "Kegiatan", src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Kajian Subuh", category: "Keagamaan", src: "https://images.unsplash.com/photo-1546410531-bb4caa1b4233?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Outing Class", category: "Pendidikan", src: "https://images.unsplash.com/photo-1523050853063-bd8012fec0c8?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Porseni", category: "Acara", src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Bakti Sosial", category: "Sosial", src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Perpisahan Santri", category: "acara", src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
];

export default function GaleriPage() {
    const [selectedImage, setSelectedImage] = useState<typeof GALERI[0] | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Galeri Foto</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Kumpulan dokumentasi kegiatan dan momen berharga dari Pondok Pesantren Dar Al-Qur'an.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {GALERI.map((item, idx) => (
                                <AnimatedSection key={item.id} delay={idx * 0.05}>
                                    <div 
                                        className="group cursor-pointer"
                                        onClick={() => setSelectedImage(item)}
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-soft">
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">Lihat</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-xs font-bold text-islamic-primary uppercase tracking-widest">
                                                {item.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-black mt-1 group-hover:text-islamic-primary transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {selectedImage && (
                    <div 
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 text-white hover:text-islamic-primary transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative w-full max-w-4xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                sizes="100vw"
                                className="object-contain"
                            />
                        </div>
                        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-medium">
                            {selectedImage.title}
                        </p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

