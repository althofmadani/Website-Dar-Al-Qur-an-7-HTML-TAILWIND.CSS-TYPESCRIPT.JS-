"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';

export default function DQMartHero() {
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center text-center">
            {/* Background with Ken Burns effect */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -3, 0],
                    y: [0, -3, 0]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Image
                    src="/assets/images/pexels-pashal-337904.jpg"
                    alt="DQ Mart background"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-islamic-primary/80 via-islamic-primary/60 to-islamic-primary/80" />

            {/* Decorative elements */}
            <div className="absolute inset-0 z-[2] overflow-hidden">
                <div className="absolute top-10 left-10 opacity-20">
                    <Icons.ShoppingBag size={200} className="text-white" />
                </div>
                <div className="absolute bottom-10 right-10 opacity-20">
                    <Icons.ShoppingBag size={150} className="text-white" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-[3] max-w-[900px] px-6 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/20 backdrop-blur-md rounded-full p-4 mb-8"
                >
                    <Icons.ShoppingBag size={48} className="text-white" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-[1.1] mb-6 text-white text-shadow-lg"
                >
                    Kope<span className="text-accent-primary">rasi</span> & <br />
                    Merchandise
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-[600px]"
                >
                    Pendapatan membantu operasional pesantren dan mendukung kegiatan belajar mengajar
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-sm font-semibold text-islamic-primary shadow-elevated">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-primary animate-pulse"></span>
                        Pengiriman ke Asrama
                    </span>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </motion.div>
            </motion.div>
        </section>
    );
}

