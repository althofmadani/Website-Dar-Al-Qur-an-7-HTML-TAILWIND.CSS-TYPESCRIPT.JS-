"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/shared/Icons';

// Pengasuh data
const pengasuh = {
    name: "Dr. K.H. Ahsin Sakho Muhammad, MA",
    title: "Pendiri & Pengasuh Utama",
    bio: "Beliau adalah seorang tokoh pendidikan Islam yang telah mengabdikan hidupnya untuk menyebarkan ilmu Al-Qur'an. Dengan latar belakang akademik yang kuat dan pengalaman bertahun-tahun dalam pembinaan generasi muda, beliau menjadi inspirasi bagi seluruh civitas akademika Dar Al-Qur'an.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    specialization: "Ilmu Al-Qur'an & Tafsir"
};

// Teacher data
const teachers = [
    {
        name: "Ustadz Ahmad Fauzi, S.Ag",
        subject: "Tahfidz Al-Qur'an",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
        name: "Ustadzah Fatimah Az-Zahra, M.Psi",
        subject: "Psikologi Pendidikan",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
        name: "Ustadz Muhammad Rizqi, Lc., M.A",
        subject: "Fiqih & Ushul Fiqih",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
        name: "Ustadzah Aisyah Nurul Huda, S.Pdi",
        subject: "Bahasa Arab",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
];

export default function Guru() {
    return (
        <section id="guru" className="py-24 bg-surface-secondary">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-islamic-primary/10 text-islamic-primary rounded-full text-sm font-semibold tracking-wide mb-4">
                        TIM PENDIDIK
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                        Kenali Para <span className="text-islamic-primary">Pembimbing</span> Kami
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
                        Dipimpin oleh pengasuh yang berpengalaman, tim pendidik kami siap membimbing
                        setiap langkah perjalanan spiritual dan akademik santi
                    </p>
                </motion.div>

                {/* Profil Pengasuh - Main Feature */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-islamic-primary/5 to-islamic-primary/10 rounded-3xl p-8 md:p-12 border border-islamic-primary/20">
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            {/* Photo */}
                            <div className="relative flex-shrink-0">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-premium">
                                    <Image
                                        src={pengasuh.image}
                                        alt={pengasuh.name}
                                        fill
                                        sizes="(max-width: 768px) 256px, 320px"
                                        className="object-cover"
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                    />
                                </div>
                                {/* Decorative Badge */}
                                <div className="absolute -bottom-2 -right-2 bg-islamic-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-elevated">
                                    Pengasuh
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">
                                    {pengasuh.name}
                                </h3>
                                <p className="text-xl text-islamic-primary font-semibold mb-4">
                                    {pengasuh.title}
                                </p>
                                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                    {pengasuh.bio}
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
                                    <Icons.BookOpen size={18} className="text-islamic-primary" />
                                    <span className="font-medium text-text-secondary">{pengasuh.specialization}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Teachers Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h4 className="text-2xl font-bold text-black text-center mb-8">
                        Tenaga Pendidik Lainnya
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teachers.map((teacher, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-6 text-center shadow-soft border border-border-light hover:shadow-elevated hover:border-islamic-primary/30 transition-all duration-300"
                            >
                                <div className="relative w-28 h-28 mx-auto mb-4">
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-islamic-primary/20 group-hover:border-islamic-primary transition-all duration-300">
                                        <Image
                                            src={teacher.image}
                                            alt={teacher.name}
                                            fill
                                            sizes="(max-width: 768px) 112px, 128px"
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                        />
                                    </div>
                                </div>
                                <h5 className="text-lg font-bold text-black mb-1 group-hover:text-islamic-primary transition-colors">
                                    {teacher.name}
                                </h5>
                                <p className="text-text-secondary text-sm">
                                    {teacher.subject}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link href="/profil/pengasuh">
                        <Button variant="outline" size="lg" className="flex gap-2 items-center mx-auto">
                            Lihat Semua Profil
                            <Icons.ArrowRight size={20} />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

