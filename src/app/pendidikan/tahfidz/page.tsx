import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { Icons } from "@/components/shared/Icons";

export default function TahfidzPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Program Tahfidz</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Mencetak generasi Hafidz Al-Qur'an dengan metode yang efektif dan teruji.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-premium">
                                <Image
                                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
                                    alt="Program Tahfidz"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-black">Fokus pada Hafalan Al-Qur'an</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Program tahfidz kami dirancang untuk membimbing santril dalam menghafal 30 juz Al-Qur'an dengan metode yang sistematis dan terukur.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icons.ArrowRight size={20} className="text-islamic-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black whitespace-normal">Setoran Hafalan</h3>
                                            <p className="text-text-secondary">Setiap hari santril setor hafalan baru kepada ustadz pembimbing</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icons.ArrowRight size={20} className="text-islamic-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black whitespace-normal">Muraja'ah (Pengulangan)</h3>
                                            <p className="text-text-secondary">Sistem muraja'ah berkala untuk menjaga hafalan tetap kuat</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icons.ArrowRight size={20} className="text-islamic-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black whitespace-normal">Tahsin Al-Lah</h3>
                                            <p className="text-text-secondary">Perbaikan bacaan sambil menghafal untuk kualitas yang optimal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface-secondary rounded-[32px] p-8 border border-border-light mb-12">
                            <h3 className="text-2xl font-bold text-black mb-6 whitespace-normal">Target Kelulusan</h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-extrabold text-islamic-primary mb-2">1</div>
                                    <div className="text-text-secondary">Juz (Tahun 1)</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-extrabold text-islamic-secondary mb-2">10</div>
                                    <div className="text-text-secondary">Juz (Tahun 2)</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-extrabold text-accent-primary mb-2">20</div>
                                    <div className="text-text-secondary">Juz (Tahun 3)</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-extrabold text-black mb-2">30</div>
                                    <div className="text-text-secondary">Juz (Lulusan)</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-surface-secondary p-8 rounded-[24px] border border-border-light">
                                <div className="w-12 h-12 bg-islamic-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.Clock size={24} className="text-islamic-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2 whitespace-normal">Durasi Program</h3>
                                <p className="text-text-secondary">3-5 tahun tergantung kemampuan dan komitmen santril</p>
                            </div>
                            <div className="bg-surface-secondary p-8 rounded-[24px] border border-border-light">
                                <div className="w-12 h-12 bg-islamic-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.BookOpen size={24} className="text-islamic-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2 whitespace-normal">Metode</h3>
                                <p className="text-text-secondary">Menggunakan metode tilawah modern yang mudah dipahami</p>
                            </div>
                            <div className="bg-surface-secondary p-8 rounded-[24px] border border-border-light">
                                <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.GraduationCap size={24} className="text-accent-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">Sertifikat</h3>
                                <p className="text-text-secondary">Ijazah resmi bagi yang sudah mengkhatamkan 30 juz</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

