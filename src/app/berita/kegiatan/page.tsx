
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/shared/Icons";

const KEGIATAN = [
    {
        id: 1,
        title: "Kunjungan Studi Banding dari Pekan Santri Al-Ikhlas",
        excerpt: "Pondok Pelabuhan Dar Al-Qur'an menyambut hangat kunjungan dari Pekan Santri Al-Ikhlas dalam rangka berbagi metode tahfidz yang efektif.",
        date: "12 Januari 2026",
        image: "https://images.unsplash.com/photo-1523050853063-bd8012fec0c8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Wisuda Tahfidz Angkatan Ke-15",
        excerpt: "Momen haru dan bahagia menyelimuti aula utama saat 50 santril resmi diwisuda sebagai Hafidz Al-Qur'an dengan berbagai prestasi gemilang.",
        date: "5 Januari 2026",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Kajian Rutin Bulanan bersama Ustadz Fauzi",
        excerpt: "Rangkaian kajian bulanan yang membahas tafsir Al-Qur'an dan penerapan nilai-nilai Islam dalam kehidupan modern.",
        date: "28 Desember 2025",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa1b4233?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Lomba MTQ Tingkat Pelajar",
        excerpt: "Pondok menjadi tuan rumah perlombaan Musabaqah Tilawatil Quran tingkat pelajar se-kabupaten dengan partisipasi aktif.",
        date: "20 Desember 2025",
        image: "https://images.unsplash.com/photo-1591123720164-de1348028a82?auto=format&fit=crop&q=80&w=800"
    }
];

export default function KegiatanPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Kegiatan</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Informasikan kegiatan dan aktivitas terkini dari Pondok Pesantren Dar Al-Qur'an.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {KEGIATAN.map((item, idx) => (
                                <AnimatedSection key={item.id} delay={idx * 0.1}>
                                    <div className="group cursor-pointer">
                                        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] mb-6 shadow-soft">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm text-text-secondary">{item.date}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-black group-hover:text-islamic-primary transition-colors leading-snug whitespace-normal">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-secondary">
                                                {item.excerpt}
                                            </p>
                                            <Link href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-islamic-primary">
                                                Baca Selengkapnya <Icons.ChevronRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

