import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function VisiMisiPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24">
                <AnimatedSection className="max-w-[1200px] mx-auto px-6 py-12">
                    <h1 className="text-5xl font-extrabold mb-8 text-islamic-primary">Visi & Misi</h1>
                    <div className="space-y-8 text-lg leading-relaxed text-text-secondary">
                        <div className="bg-surface-secondary p-8 rounded-[32px] border border-border-light shadow-soft">
                            <h2 className="text-3xl font-bold mb-4 text-black">Visi</h2>
                            <p>Mencetak generasi yang berpegang teguh pada Al-Qur'an dan Sunnah dengan pemahaman yang benar serta memiliki wawasan global.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-black">Misi</h2>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Menyelenggarakan pendidikan tahfidz Al-Qur'an yang berkualitas dengan metode yang teruji.</li>
                                <li>Menanamkan nilai-nilai akhlakul karimah berdasarkan ajaran Islam.</li>
                                <li>Membekali santril dengan penguasaan bahasa Arab dan Inggris untuk wawasan global.</li>
                                <li>Mewujudkan lingkungan pendidikan yang kondusif dan Islami.</li>
                                <li>Mengembangkan potensi akademik dan non-akademik santril secara均衡.</li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-islamic-primary/5 p-6 rounded-2xl border border-islamic-primary/10">
                                <h3 className="text-xl font-bold text-islamic-primary mb-2">Tujuan</h3>
                                <p>Membentuk pribadi yang Hafidz Al-Qur'an, berakhlak mulia, dan bermanfaat bagi masyarakat.</p>
                            </div>
                            <div className="bg-islamic-secondary/5 p-6 rounded-2xl border border-islamic-secondary/10">
                                <h3 className="text-xl font-bold text-islamic-secondary mb-2">Sasaran</h3>
                                <p>Santri yang siap menghadapi tantangan zaman dengan fondasi Al-Qur'an yang kuat.</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </main>
            <Footer />
        </div>
    );
}

