import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { Icons } from "@/components/shared/Icons";

export default function MadrasahPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Program Madrasah</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Pendidikan formal terintegrasi dengan kurikulum Quran untuk masa depan yang cemerlang.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-premium">
                                <Image
                                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
                                    alt="Program Madrasah"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-black">Pendidikan Formal Berkualitas</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Program madrasah kami menggabungkan kurikulum resmi dari Kementerian Agama dengan program tahfidz dan akhlak, menghasilkan lulusan yang kompeten secara akademik dan spiritual.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icons.ArrowRight size={20} className="text-islamic-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black whitespace-normal">Kurikulum Terpadu</h3>
                                            <p className="text-text-secondary">Perpaduan kurikulum nasional dengan program tahfidz</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icons.ArrowRight size={20} className="text-islamic-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black">Guru Berkualitas</h3>
                                            <p className="text-text-secondary">Tenaga pengajar profesional dan berpengalaman</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icons.ArrowRight size={20} className="text-islamic-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black whitespace-normal">Fasilitas Lengkap</h3>
                                            <p className="text-text-secondary">Laboratorium, perpustakaan, dan fasilitas olahraga</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            <div className="bg-surface-secondary p-8 rounded-[24px] border border-border-light">
                                <div className="w-12 h-12 bg-islamic-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.BookOpen size={24} className="text-islamic-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">SD Islam</h3>
                                <p className="text-text-secondary mb-4">Kelas 1-6 dengan program tahfidz 5 juz</p>
                                <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Kurikulum Kemendikbudristek</li>
                                    <li>• Program Tahfidz terintegrasi</li>
                                    <li>• Bahasa Arab intensif</li>
                                </ul>
                            </div>
                            <div className="bg-surface-secondary p-8 rounded-[24px] border border-border-light">
                                <div className="w-12 h-12 bg-islamic-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.GraduationCap size={24} className="text-islamic-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">SMP Islam</h3>
                                <p className="text-text-secondary mb-4">Kelas 7-9 dengan program tahfidz 15 juz</p>
                                <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Kurikulum Kemendikbudristek</li>
                                    <li>• Tahfidz dan Tahsin</li>
                                    <li>• Komputer dan Bahasa Inggris</li>
                                </ul>
                            </div>
                            <div className="bg-surface-secondary p-8 rounded-[24px] border border-border-light">
                                <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.Clock size={24} className="text-accent-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2 whitespace-normal">SMA Islam</h3>
                                <p className="text-text-secondary mb-4">Kelas 10-12 dengan program tahfidz 30 juz</p>
                                <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Kurikulum Kemendikbudristek</li>
                                    <li>• intensif Fiqih dan Ushul Fiqih</li>
                                    <li>• Persiapan PTN dan Internasional</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-islamic-primary text-white rounded-[32px] p-8 text-center">
                            <h3 className="text-2xl font-bold mb-4">Informasi Pendaftaran</h3>
                            <p className="opacity-90 mb-6">Tahun ajaran baru segera dibuka. Segera daftarkan putra-putri Anda.</p>
                            <button className="bg-white text-islamic-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

