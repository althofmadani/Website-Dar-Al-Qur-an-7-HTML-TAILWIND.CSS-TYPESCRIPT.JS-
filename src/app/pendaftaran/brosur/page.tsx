import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { Icons } from "@/components/shared/Icons";
import Link from "next/link";

export default function BrosurPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Brosur Pendaftaran</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Unduh brosur lengkap informasi pendaftaran Pondok Pesantren Dar Al-Qur'an.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-premium border border-border-light">
                                <Image
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600"
                                    alt="Brosur Pendaftaran"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-8">
                                <div>
                            <h2 className="text-3xl font-bold text-black mb-4 whitespace-normal">Informasi Brosur</h2>
                                    <p className="text-lg text-text-secondary leading-relaxed">
                                        Brosur pendaftaran contains complete information about registration procedures, requirements, schedules, and costs for the new academic year.
                                    </p>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="bg-surface-secondary p-6 rounded-[20px] border border-border-light">
                                        <h3 className="font-bold text-black mb-2">Program Tersedia</h3>
                                        <ul className="text-text-secondary space-y-1">
                                            <li>• Program Tahsin (Non-Asrama)</li>
                                            <li>• Program Tahfidz (Asrama)</li>
                                            <li>• Madrasah (SD, SMP, SMA)</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="bg-surface-secondary p-6 rounded-[20px] border border-border-light">
                                        <h3 className="font-bold text-black mb-2">Jadwal Penting</h3>
                                        <ul className="text-text-secondary space-y-1">
                                            <li>• Pendaftaran Online: 1 Januari - 28 Februari</li>
                                            <li>• Test Seleksi: 1-15 Maret</li>
                                            <li>• Pengumuman: 20 Maret</li>
                                            <li>• Daftar Ulang: 21-31 Maret</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="bg-surface-secondary p-6 rounded-[20px] border border-border-light">
                                        <h3 className="font-bold text-black mb-2">Biaya Pendidikan</h3>
                                        <ul className="text-text-secondary space-y-1">
                                            <li>• Formulir: Rp 150.000</li>
                                            <li>• SPP Bulanan: Rp 350.000</li>
                                            <li>• Asrama: Rp 500.000/bulan</li>
                                        </ul>
                                    </div>
                                </div>

                                <button className="w-full bg-islamic-primary text-white py-4 rounded-[20px] font-bold text-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                                    <Icons.ArrowRight size={20} />
                                    Unduh Brosur PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

