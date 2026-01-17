import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProfilPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24">
                <AnimatedSection className="max-w-[1200px] mx-auto px-6 py-12">
                    <h1 className="text-5xl font-extrabold mb-8 text-islamic-primary">Profil Pesantren</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg leading-relaxed text-text-secondary">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-black">Visi & Misi</h2>
                            <p>Mencetak generasi yang berpegang teguh pada Al-Qur'an dan Sunnah dengan pemahaman yang benar serta memiliki wawasan global.</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Menyelenggarakan pendidikan tahfidz Al-Qur'an yang berkualitas.</li>
                                <li>Menanamkan nilai-nilai akhlakul karimah.</li>
                                <li>Membekali santri dengan penguasaan bahasa Arab dan Inggris.</li>
                            </ul>
                        </div>
                        <div className="bg-surface-secondary p-8 rounded-[32px] border border-border-light shadow-soft">
                            <h3 className="text-2xl font-bold mb-4 text-black">Tentang Dar Al-Qur'an</h3>
                            <p>Didirikan dengan semangat pengabdian untuk umat, Dar Al-Qur'an telah menjadi rumah bagi ratusan santri yang ingin mendalami kalam Ilahi.</p>
                        </div>
                    </div>
                </AnimatedSection>
            </main>
            <Footer />
        </div>
    );
}
