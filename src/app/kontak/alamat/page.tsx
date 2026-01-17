import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Icons } from "@/components/shared/Icons";

export default function AlamatPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Kontak & Alamat</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Hubungi kami atau datang langsung ke lokasi Pondok Pesantren Dar Al-Qur'an.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                            {/* Info Kontak */}
                            <div className="space-y-6">
                                <div className="bg-surface-secondary rounded-[24px] p-8 border border-border-light">
                                    <h2 className="text-2xl font-bold text-black mb-6">Informasi Kontak</h2>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-islamic-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icons.MapPin size={24} className="text-islamic-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-black">Alamat</h3>
                                                <p className="text-text-secondary">
                                                    Jl. KH. No. 123, Desa Kebon Baru<br />
                                                    Kecamatan Ciparay, Kabupaten Bandung<br />
                                                    Jawa Barat 40381
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-islamic-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icons.Phone size={24} className="text-islamic-secondary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-black">Telepon</h3>
                                                <p className="text-text-secondary">
                                                    +62 22 1234 5678<br />
                                                    +62 812 3456 7890 (WhatsApp)
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icons.Mail size={24} className="text-accent-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-black">Email</h3>
                                                <p className="text-text-secondary">
                                                    info@daralquran.id<br />
                                                    pendaftaran@daralquran.id
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icons.Clock size={24} className="text-gray-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-black">Jam Operasional</h3>
                                                <p className="text-text-secondary">
                                                    Senin - Minggu: 08.00 - 17.00 WIB<br />
                                                    (Kecuali hari besar nasional)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-islamic-primary text-white rounded-[24px] p-8">
                                    <h3 className="text-xl font-bold mb-4">Penting!</h3>
                                    <p className="opacity-90 mb-4">
                                        Untuk kunjungan ke pondok, silakan hubungi kami terlebih dahulu untuk penjadwalan.
                                    </p>
                                    <button className="bg-white text-islamic-primary px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                        Hubungi Kami
                                    </button>
                                </div>
                            </div>

                            {/* Peta (Placeholder) */}
                            <div className="bg-surface-secondary rounded-[32px] overflow-hidden border border-border-light h-[500px]">
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <Icons.MapPin size={48} className="text-islamic-primary mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-black mb-2">Peta Lokasi</h3>
                                        <p className="text-text-secondary">
                                            Jl. KH. No. 123, Desa Kebon Baru<br />
                                            Kecamatan Ciparay, Kabupaten Bandung
                                        </p>
                                        <button className="mt-4 text-islamic-primary font-bold hover:underline">
                                            Buka di Google Maps
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fasilitas Sekitar */}
                        <div className="border-t border-border-light pt-12">
                            <h2 className="text-2xl font-bold text-black mb-8 text-center">Fasilitas Sekitar</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { name: "Masjid", distance: "50 meter" },
                                    { name: "Puskesmas", distance: "1 km" },
                                    { name: "Stasiun", distance: "3 km" },
                                    { name: "Terminal", distance: "4 km" },
                                ].map((facility, idx) => (
                                    <div key={idx} className="bg-surface-secondary p-6 rounded-[20px] border border-border-light text-center">
                                        <Icons.MapPin size={24} className="text-islamic-primary mx-auto mb-2" />
                                        <h3 className="font-bold text-black">{facility.name}</h3>
                                        <p className="text-sm text-text-secondary">{facility.distance}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

