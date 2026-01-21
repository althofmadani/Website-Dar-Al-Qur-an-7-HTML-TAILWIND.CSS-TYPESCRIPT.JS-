"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/shared/Icons';

export default function Profil() {
    return (
        <section id="profil" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-islamic-primary/10 text-islamic-primary rounded-full text-sm font-semibold tracking-wide">
                                TENTANG KAMI
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
                            Mendidik Generasi Qur'ani<br />
                            <span className="text-islamic-primary">yang Berakhlak Mulia</span>
                        </h2>

                        <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                            <p>
                                <strong>Pondok pesantren Dar Al-Qur'an</strong> merupakan institusi pendidikan
                                yang berkomitmen untuk membina generasi muslim yang tidak hanya menguasai
                                ilmu agama, tetapi juga memiliki akhlak mulia dan wawasan luas.
                            </p>

                            <p>
                                Didirikan dengan semangat menyebarkan cahaya Al-Qur'an, kami menyediakan
                                program pendidikan yang terintegrasi antara pembentukan karakter
                                islami dan pengembangan intelektual. Dengan pendekatan yang
                                menyeluruh, kami berusaha mewujudkan generasi yang
                                <em> khairu ummah </em>(sebaik-baik umat).
                            </p>

                            <p>
                                Fasilitas modern, metode pembelajaran yang efektif, dan suasana
                                yang kondusif menjadilandasan utama kami dalam memberikan
                                pendidikan terbaik bagi setiap santi.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link href="/profil/visi-misi">
                                <Button variant="primary" size="lg" className="flex gap-2 items-center">
                                    Pelajari Lebih Lanjut
                                    <Icons.ArrowRight size={20} />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Content - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-elevated">
                                <Image
                                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80"
                                    alt="Pondok Pesanren Dar Al-Qur'an"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-islamic-primary/20 to-transparent" />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-premium border border-border-light"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-islamic-primary/10 rounded-full flex items-center justify-center">
                                        <Icons.GraduationCap size={28} className="text-islamic-primary" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-islamic-primary">15+</div>
                                        <div className="text-sm text-text-secondary">Tahun Pengalaman</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Element */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-islamic-primary/10 rounded-full blur-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

