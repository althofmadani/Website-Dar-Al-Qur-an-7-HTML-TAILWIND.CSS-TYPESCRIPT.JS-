"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/shared/Icons';

export default function PendaftaranCTA() {
    return (
        <section className="py-20 bg-islamic-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Decorative Circles */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
            />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left flex-1"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
                            <Icons.FileText size={16} />
                            <span>Tahun Ajaran Baru Segera Dimulai</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            Pendaftaran Santri Baru<br />
                            <span className="text-white/90">Telah Dibuka!</span>
                        </h2>

                        <p className="text-white/80 text-lg max-w-[500px] mx-auto lg:mx-0 mt-4">
                            Mari bergabung bersama kami dalam perjalanan spiritual dan intelektual.
                            Daftar sekarang dan raih masa depan cemerlang bersama Dar Al-Qur'an.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">150+</div>
                                <div className="text-white/70 text-sm">Kuota Tersedia</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">5</div>
                                <div className="text-white/70 text-sm">Jenjang Pendidikan</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-white/70 text-sm">Beasiswa Akademik</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/pendaftaran/formulir">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="min-w-[220px] bg-white text-islamic-primary hover:bg-gray-100 border-white shadow-lg hover:shadow-xl text-lg"
                            >
                                <Icons.GraduationCap size={24} className="mr-2" />
                                Daftar Sekarang
                            </Button>
                        </Link>

                        <Link href="/pendaftaran/brosur">
                            <Button
                                variant="outline"
                                size="lg"
                                className="min-w-[220px] border-2 border-white text-white hover:bg-white hover:text-islamic-primary text-lg"
                            >
                                <Icons.FileText size={20} className="mr-2" />
                                Unduh Brosur
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Deadline Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Icons.Clock size={20} />
                        </div>
                        <div>
                            <div className="font-semibold">Batas Waktu Pendaftaran</div>
                            <div className="text-white/70 text-sm">31 Juli 2025 - Pukul 16.00 WIB</div>
                        </div>
                    </div>

                    <Link
                        href="/pendaftaran/brosur"
                        className="flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors"
                    >
                        Lihat Jadwal Lengkap
                        <Icons.ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

