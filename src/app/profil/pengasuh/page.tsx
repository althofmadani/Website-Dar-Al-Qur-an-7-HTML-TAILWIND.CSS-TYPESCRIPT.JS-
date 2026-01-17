import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function ProfilPengasuhPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24">
                <AnimatedSection className="max-w-[1200px] mx-auto px-6 py-12">
                    <h1 className="text-5xl font-extrabold mb-12 text-islamic-primary">Profil Pengasuh</h1>
                    
                    <div className="flex flex-col md:flex-row gap-8 mb-12">
                        <div className="relative w-full md:w-80 h-96 rounded-[32px] overflow-hidden shadow-premium flex-shrink-0">
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                                alt="Ustadz Pengasuh"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold text-black mb-2">Ustadz Ahmad Fauzi, M.Hum</h2>
                                <p className="text-islamic-primary font-semibold">Pimpinan & Pengasuh Utama</p>
                            </div>
                            <p className="text-lg leading-relaxed text-text-secondary">
                                Lahir di Jakarta, 15 Maret 1975. Lulusan S2 Humaniora dari Universitas Al-Azhar Kairo ini telah mengabdikan hidupnya untuk pendidikan Al-Qur'an sejak tahun 2000.
                            </p>
                            <p className="text-lg leading-relaxed text-text-secondary">
                                Dengan pengalaman lebih dari 20 tahun di dunia pendidikan Islam, Ustadz Fauzi telah melahirkan ratusan hafidz yang tersebar di berbagai daerah.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-4">
                                <span className="bg-surface-secondary px-4 py-2 rounded-full text-sm">Hafidz Al-Qur'an</span>
                                <span className="bg-surface-secondary px-4 py-2 rounded-full text-sm">Pemateri Nasional</span>
                                <span className="bg-surface-secondary px-4 py-2 rounded-full text-sm">Penulis Buku</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-border-light pt-12">
                        <h3 className="text-2xl font-bold text-black mb-8">Tim Pengasuh</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Ustadzah Aminah", role: "Pembimbing Akhlak", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
                                { name: "Ustadz Yusuf", role: "Pembimbing Tahfidz", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
                                { name: "Ustadzah Sarah", role: "Pembimbing Bahasa Arab", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
                            ].map((pengasuh, idx) => (
                                <div key={idx} className="bg-surface-secondary p-6 rounded-2xl border border-border-light">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                            <Image
                                                src={pengasuh.image}
                                                alt={pengasuh.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black">{pengasuh.name}</h4>
                                            <p className="text-sm text-text-secondary">{pengasuh.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </main>
            <Footer />
        </div>
    );
}

