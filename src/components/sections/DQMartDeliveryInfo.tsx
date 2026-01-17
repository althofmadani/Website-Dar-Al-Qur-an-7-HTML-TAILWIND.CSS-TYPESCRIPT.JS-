"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';

export default function DQMartDeliveryInfo() {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-r from-islamic-primary to-islamic-secondary">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
                >
                    {/* Icon */}
                    <div className="shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <Icons.MapPin size={32} className="text-white" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                            Pengiriman ke Asrama
                        </h3>
                        <p className="text-white/80 text-sm md:text-base max-w-[800px]">
                            Barang yang dipesan oleh orang tua akan dikirim langsung ke asrama siswa.
                            Sistem ini memudahkan wali santn untuk mengirimkan kebutuhan kepada putra-putrinya
                            tanpa perlu repot datang ke pondok.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="shrink-0 mt-4 md:mt-0">
                        <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent-primary animate-pulse"></span>
                            <span className="text-sm font-semibold text-islamic-primary">
                                Tersedia di Semua Asrama
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

