"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Icons } from "@/components/shared/Icons";

export default function KontakPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-12">
                {/* Hero Section */}
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Hubungi Kami</h1>
                            <p className="text-xl text-text-secondary max-w-4xl mx-auto text-center leading-relaxed whitespace-normal">
                                Kami siap membantu dan menjawab pertanyaan Anda. Silakan hubungi kami melalui saluran informasi di bawah ini.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                            {/* Contact Info Cards */}
                            <AnimatedSection delay={0.1}>
                                <div className="p-8 rounded-[32px] bg-surface-secondary border border-border-light h-full group hover:border-islamic-primary/20 transition-all">
                                    <div className="w-12 h-12 bg-islamic-primary/10 rounded-2xl flex items-center justify-center text-islamic-primary mb-6 group-hover:scale-110 transition-transform">
                                        <Icons.MapPin size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-black">Lokasi</h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        Jl. Kebon Baru No. 123, Tebet, Jakarta Selatan, 12830, Indonesia
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <div className="p-8 rounded-[32px] bg-surface-secondary border border-border-light h-full group hover:border-islamic-primary/20 transition-all">
                                    <div className="w-12 h-12 bg-islamic-primary/10 rounded-2xl flex items-center justify-center text-islamic-primary mb-6 group-hover:scale-110 transition-transform">
                                        <Icons.Phone size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-black">Telepon & WA</h3>
                                    <div className="space-y-1 text-text-secondary">
                                        <p>(021) 123-4567</p>
                                        <p>+62 812-3456-7890</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.3}>
                                <div className="p-8 rounded-[32px] bg-surface-secondary border border-border-light h-full group hover:border-islamic-primary/20 transition-all">
                                    <div className="w-12 h-12 bg-islamic-primary/10 rounded-2xl flex items-center justify-center text-islamic-primary mb-6 group-hover:scale-110 transition-transform">
                                        <Icons.Mail size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-black">Email</h3>
                                    <p className="text-text-secondary">
                                        info@daralquran.id<br />
                                        pendaftaran@daralquran.id
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Contact Form Section */}
                        <div className="bg-surface-secondary rounded-[48px] overflow-hidden border border-border-light shadow-soft">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-12 lg:p-20 bg-islamic-primary text-white flex flex-col justify-center">
                                    <h2 className="text-4xl font-bold mb-6">Kirim Pesan</h2>
                                    <p className="text-white/80 text-lg mb-10 leading-relaxed">
                                        Ada pertanyaan mengenai program pendaftaran atau kegiatan pesantren? Jangan ragu untuk menghubungi kami. Tim kami akan segera merespon pesan Anda.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                                <Icons.Clock size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold">Jam Operasional</p>
                                                <p className="text-white/70">Senin - Sabtu: 08:00 - 16:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 lg:p-8">
                                    <Contact />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section Placeholder */}
                <section className="h-[400px] w-full bg-slate-100 relative grayscale hover:grayscale-0 transition-all overflow-hidden border-t border-border-light">
                    <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                        <div className="text-center">
                            <Icons.MapPin size={48} className="mx-auto mb-4 opacity-20" />
                            <p className="font-medium">Google Maps Integration Placeholder</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

