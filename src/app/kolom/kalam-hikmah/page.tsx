import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/shared/Icons";

const KALAM_HIKMAH = [
    {
        id: 1,
        title: "Ketakwaan yang Sejati",
        excerpt: "Betapa banyak manusia yang menyangka dirinya bertakwa, namun hati masih terluka dengan dunia. Ketakwaan yang sejati adalah cahaya yang menyinari hati.",
        content: "Ketakwaan yang sejati bukanlah sekadar tampilan luar yang megah, melainkan cahaya yang menyinari hati dan menggerakkan tindakan. Banyak di antara kita yang menyangka bahwa menjalankan ritual sudah cukup, tanpa memperhatikan apakah hati kita benar-benar terhubung dengan Sang Pencipta.",
        date: "15 Januari 2026"
    },
    {
        id: 2,
        title: "Membangun Harapan di Tengah Kegelapan",
        excerpt: "Ketika ujian datang silih berganti, ingatlah bahwa langit tak selalu mendung. Setelah malam gelap, pasti terbit fajar yang membawa harapan.",
        content: "Kegelisahan adalah bagian dari perjalanan hidup. Namun, di balik setiap ujian tersimpan hikmah yang mungkin tidak langsung kita pahami. Nabi Muhammad shallallahualaihi wasallam pernah menghadapi masa-masa sulit di Gua Hira, dan dari situlah cahaya wahyu pertama turun.",
        date: "10 Januari 2026"
    },
    {
        id: 3,
        title: "Syukur dalam Kesederhanaan",
        excerpt: "Kebahagiaan tak selalu datang dari memiliki banyak. Seorang hamba yang bersyukur dengan apa yang dimilikinya lebih kaya dari yang kaya namun tidak bersyukur.",
        content: "Kita sering terjebak dalam spiral keinginan yang tak terbatas. Setiap pencapaian hanya membawa kesementaraan, dan kita terus mengejar apa yang belum kita miliki. Namun, ketenangan sejati justru hadir ketika kita mampu mensyukuri apa yang sudah ada.",
        date: "5 Januari 2026"
    },
    {
        id: 4,
        title: "Keikhlasan dalam Beramal",
        excerpt: "Suatu amalan yang tampak indah namun tanpa keikhlasan bagaikan bangunan tanpa pondasi. Ia akan runtuh saat vento datang.",
        content: "Keikhlasan adalah ruh dari setiap amalan. Tanpa keikhlasan, bahkan ibadah yang tampak besar di mata manusia tidak berarti apa-apa di hadapan Allah. Imam Al-Ghazali mengingatkan kita untuk memeriksa motivasi di balik setiap tindakan.",
        date: "1 Januari 2026"
    }
];

export default function KalamHikmahPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-islamic-primary py-20 text-white">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Kalam Hikmah</h1>
                            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                                Renungan dan nasihat bijak untuk menemani perjalanan spiritual kita.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-surface-secondary">
                    <div className="max-w-[800px] mx-auto px-6">
                        <div className="space-y-8">
                            {KALAM_HIKMAH.map((item, idx) => (
                                <AnimatedSection key={item.id} delay={idx * 0.1}>
                                    <article className="bg-white p-8 rounded-[24px] border border-border-light shadow-soft hover:shadow-premium transition-shadow">
                                        <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                                            <span>{item.date}</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-black mb-4 hover:text-islamic-primary transition-colors">
                                            {item.title}
                                        </h2>
                                        <p className="text-text-secondary italic mb-4 border-l-4 border-islamic-primary pl-4">
                                            "{item.excerpt}"
                                        </p>
                                        <p className="text-text-secondary leading-relaxed mb-6">
                                            {item.content}
                                        </p>
                                        <Link href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-islamic-primary">
                                            Baca Lengkap <Icons.ChevronRight size={14} />
                                        </Link>
                                    </article>
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

