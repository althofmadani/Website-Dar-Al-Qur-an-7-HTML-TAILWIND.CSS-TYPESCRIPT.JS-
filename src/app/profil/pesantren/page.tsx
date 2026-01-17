import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function ProfilPesantrenPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24">
                <AnimatedSection className="max-w-[1200px] mx-auto px-6 py-12">
                    <h1 className="text-5xl font-extrabold mb-8 text-islamic-primary">Profil Pondok</h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <p className="text-lg leading-relaxed text-text-secondary mb-6">
                                <span className="font-bold text-black">Pondok Pesantren Dar Al-Qur'an</span> adalah lembaga pendidikan Islam yang didirikan dengan visi mulia untuk menyebarkan syiar Al-Qur'an dan membentuk generasi yang hafidz Al-Qur'an dengan akhlakul karimah.
                            </p>
                            <p className="text-lg leading-relaxed text-text-secondary mb-6">
                                Berlokasi di lingkungan yang kondusif dan asri, pondok kami menyediakan fasilitas lengkap untuk mendukung proses belajar mengajar para santril dalam mengkhatamkan Al-Qur'an.
                            </p>
                            <div className="bg-surface-secondary p-6 rounded-2xl border border-border-light">
                                <h3 className="text-xl font-bold mb-4 text-black">Fasilitas Utama</h3>
                                <ul className="space-y-2 text-text-secondary">
                                    <li>• Masjid besar untuk solat berjamaah dan kajian</li>
                                    <li>• Asrama yang nyaman dan kondusif</li>
                                    <li>• Perpustakaan Islami</li>
                                    <li>• Laboratorium bahasa</li>
                                    <li>• Area olahraga</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-premium">
                            <Image
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800"
                                alt="Pondok Dar Al-Qur'an"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-islamic-primary text-white p-6 rounded-2xl text-center">
                            <div className="text-4xl font-extrabold mb-2">200+</div>
                            <div className="text-sm opacity-80">Santri Aktif</div>
                        </div>
                        <div className="bg-islamic-secondary text-white p-6 rounded-2xl text-center">
                            <div className="text-4xl font-extrabold mb-2">50+</div>
                            <div className="text-sm opacity-80">Pengajar Berkompeten</div>
                        </div>
                        <div className="bg-accent-primary text-white p-6 rounded-2xl text-center">
                            <div className="text-4xl font-extrabold mb-2">15</div>
                            <div className="text-sm opacity-80">Angkatan Wisuda</div>
                        </div>
                    </div>
                </AnimatedSection>
            </main>
            <Footer />
        </div>
    );
}

