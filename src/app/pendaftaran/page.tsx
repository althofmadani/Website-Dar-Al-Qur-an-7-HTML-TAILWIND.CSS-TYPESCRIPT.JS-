import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegistrationForm from "@/components/sections/RegistrationForm";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function PendaftaranPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24 bg-surface-secondary">
                <AnimatedSection className="max-w-[1200px] mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-5xl font-extrabold mb-8 text-islamic-primary">Pendaftaran Santri Baru</h1>
                            <p className="text-xl text-text-secondary leading-relaxed mb-10">
                                Pilih masa depan terbaik untuk putra-putri Anda. Bergabunglah bersama kami untuk mencetak generasi Qur'ani yang unggul.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-islamic-primary/10 p-3 rounded-full text-islamic-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black">Proses Mudah</h4>
                                        <p className="text-text-secondary">Pendaftaran dapat dilakukan secara online melalui formulir ini.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-islamic-primary/10 p-3 rounded-full text-islamic-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black">Seleksi Terpadu</h4>
                                        <p className="text-text-secondary">Tes masuk meliputi bacaan Al-Qur'an dan wawancara.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-premium border border-border-light">
                            <RegistrationForm />
                        </div>
                    </div>
                </AnimatedSection>
            </main>
            <Footer />
        </div>
    );
}
