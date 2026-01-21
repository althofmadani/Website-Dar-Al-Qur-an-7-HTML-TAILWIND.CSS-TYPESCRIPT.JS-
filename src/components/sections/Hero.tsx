"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function Hero() {
    const [greeting, setGreeting] = useState('Selamat Datang');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting('Selamat Pagi');
        } else if (hour < 18) {
            setGreeting('Selamat Siang');
        } else {
            setGreeting('Selamat Malam');
        }
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center">
            {/* Background with Ken Burns effect */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={{
                    scale: [1, 1.05, 1],
                    x: [0, -5, 0],
                    y: [0, -5, 0]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Image
                    src="/assets/images/pexels-pashal-337904.jpg"
                    alt="Islamic background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/10 via-white/30 to-surface-secondary" />

            {/* Content */}
            <div className="relative z-[2] max-w-[900px] px-6 flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[4rem] font-extrabold leading-[1.1] mb-6 text-white text-shadow-lg"
                >
                    {greeting} di Website <br />
                    Pondok Pesantern <br />
                    <span className="text-islamic-primary">Dar Al-Qur'an <br /> Kebon Baru</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl text-text-secondary font-medium mb-12 max-w-[700px]"
                >
                    Mendidik generasi Qur'ani yang berakhlak mulia dan berwawasan luas
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/pendaftaran/formulir">
                        <Button variant="primary" size="lg" className="min-w-[200px]">
                            Daftar Sekarang
                        </Button>
                    </Link>
                    <Link href="/pendaftaran/brosur">
                        <Button variant="secondary" size="lg" className="min-w-[200px] ml-0 sm:ml-4">
                            Info Lebih Lanjut
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Hero Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-secondary to-transparent z-[2]" />
        </section>
    );
}

