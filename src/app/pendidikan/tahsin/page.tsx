import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { Icons } from "@/components/shared/Icons";

export default function TahsinPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Program Tahsin</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Membentuk bacaan Al-Qur'an yang fasih dan tartil dengan metode yang teruji.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-premium">
                                <Image
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
                                    alt="Program Tahsin"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-black whitespace-normal">Apa itu Tahsin?</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Tahsin adalah program perbaikan bacaan Al-Qur'an yang berfokus pada tajwid, makharijul huruf, dan ketepatan pengucapan. Program ini terbuka untuk semua lapisan masyarakat yang ingin memperbaiki bacaan Al-Qur'an-nya.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icons.ArrowRight size={20} className="text-islamic-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black">Tingkat Dasar</h3>
                                            <p className="text-text-secondary">Belajar alfab Arab dan pengenalan hukum tajwid dasar</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icons.ArrowRight size={20} className="text-islamic-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black whitespace-normal">Tingkat Menengah</h3>
                                            <p className="text-text-secondary">Penguasaan hukum tajwid lanjutan dan latihan tilawah</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icons.ArrowRight size={20} className="text-islamic-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black whitespace-normal">Tingkat Lanjutan</h3>
                                            <p className="text-text-secondary">Tajwid tingkat lanjut dan penyempurnaan bacaan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-surface-secondary p-8 rounded-[24px] border border-border-light">
                                <div className="w-12 h-12 bg-islamic-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.Clock size={24} className="text-islamic-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2 whitespace-normal">Durasi</h3>
                                <p className="text-text-secondary">3 bulan per tingkat dengan pertemuan 2x seminggu</p>
                            </div>
                            <div className="bg-surface-secondary p-8 rounded-[24px] border border-border-light">
                                <div className="w-12 h-12 bg-islamic-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.GraduationCap size={24} className="text-islamic-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2 whitespace-normal">Kapasitas</h3>
                                <p className="text-text-secondary">20-30 siswa per kelas dengan pendampingan intensif</p>
                            </div>
                            <div className="bg-surface-secondary p-8 rounded-[24px] border border-border-light">
                                <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.BookOpen size={24} className="text-accent-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2 whitespace-normal">Sertifikat</h3>
                                <p className="text-text-secondary">Sertifikat kelulusan untuk setiap tingkat yang diselesaikan</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

