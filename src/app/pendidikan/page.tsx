import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Icons } from "@/components/shared/Icons";

export default function PendidikanPage() {
    const programs = [
        { title: "Tahsin Al-Qur'an", desc: "Perbaikan bacaan Al-Qur'an sesuai kaidah tajwid.", icon: "📖" },
        { title: "Tahfidz Al-Qur'an", desc: "Program hafalan 30 juz dengan sistem setoran harian.", icon: "🕌" },
        { title: "Madrasah Diniyah", desc: "Pelajaran ilmu agama (Fiqih, Tauhid, Hadits) berbasis kitab kuning.", icon: "📚" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24">
                <AnimatedSection className="max-w-[1200px] mx-auto px-6 py-12">
                    <h1 className="text-5xl font-extrabold mb-12 text-islamic-primary">Program Pendidikan</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((p) => (
                            <div key={p.title} className="bg-white p-8 rounded-[32px] border border-border-light shadow-soft hover:shadow-premium transition-all">
                                <div className="text-4xl mb-6">{p.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-black">{p.title}</h3>
                                <p className="text-text-secondary">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </main>
            <Footer />
        </div>
    );
}
