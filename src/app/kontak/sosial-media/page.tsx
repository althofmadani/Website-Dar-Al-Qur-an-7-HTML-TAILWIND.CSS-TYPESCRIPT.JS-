import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Icons } from "@/components/shared/Icons";
import Link from "next/link";

export default function SosialMediaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Sosial Media</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">   
                                Ikuti kami di sosial media untuk mendapatkan informasi terbaru dan terbaru.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { 
                                    name: "Facebook", 
                                    icon: Icons.Facebook, 
                                    handle: "DQ Kebon Baru Review",
                                    url: "https://www.facebook.com/dqkebonbarureview",
                                    color: "hover:bg-blue-600",
                                    bg: "bg-blue-600/10",
                                    text: "text-blue-600"
                                },
                                 { 
                                    name: "Instagram", 
                                    icon: Icons.Instagram, 
                                    handle: "@dq.kebonbaru",
                                    url: "https://www.instagram.com/dq.kebonbaru/",
                                    color: "hover:bg-pink-600",
                                    bg: "bg-pink-600/10",
                                    text: "text-pink-600"
                                },
                                { 
                                    name: "TikTok", 
                                    icon: Icons.Tiktok, 
                                    handle: "@dqkebonbaru",
                                    url: "https://www.tiktok.com/@dqkebonbaru",
                                    color: "hover:bg-black",
                                    bg: "bg-black/10",
                                    text: "text-black"
                                },
                                { 
                                    name: "Youtube", 
                                    icon: Icons.Youtube, 
                                    handle: "@dqkebonbaru2369",
                                    url: "https://www.youtube.com/@dqkebonbaru2369",
                                    color: "hover:bg-red-600",
                                    bg: "bg-red-600/10",
                                    text: "text-red-600"
                                },
                                { 
                                    name: "X (Twitter)", 
                                    icon: Icons.XPlatform, 
                                    handle: "@dqkebonbaru",
                                    url: "https://x.com/dqkebonbaru",
                                    color: "hover:bg-black",
                                    bg: "bg-black/10",
                                    text: "text-black"
                                },
                            ].map((social, idx) => (
                                <AnimatedSection key={idx} delay={idx * 0.1}>
                                    <Link 
                                        href={social.url}
                                        target="_blank"
                                        className={`block bg-surface-secondary p-8 rounded-[24px] border border-border-light hover:shadow-premium transition-all group text-center`}
                                    >
                                        <div className={`w-16 h-16 ${social.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <social.icon size={32} className={social.text} />
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-2 whitespace-normal">{social.name}</h3>
                                        <p className={`${social.text} font-medium`}>{social.handle}</p>
                                        <div className={`mt-4 inline-flex items-center gap-2 text-sm font-bold ${social.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                                            Kunjungi <Icons.ArrowRight size={14} />
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>

                        <div className="mt-16 bg-surface-secondary rounded-[32px] p-8 border border-border-light">
                            <h2 className="text-2xl font-bold text-black mb-6 text-center">Tagar Resmi</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["#DarAlQuran", "#PesantrenQuran", "#TahfidzIndonesia", "#GenerasiQuran", "#AkhlakMulia"].map((tag, idx) => (
                                    <span 
                                        key={idx}
                                        className="bg-islamic-primary/10 text-islamic-primary px-6 py-3 rounded-full font-bold hover:bg-islamic-primary hover:text-white transition-colors cursor-pointer"
                                    >
                                        {tag}
                                    </span>
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

