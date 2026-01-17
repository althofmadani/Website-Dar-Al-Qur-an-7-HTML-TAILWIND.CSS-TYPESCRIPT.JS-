"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion';

interface StatProps {
    number: number;
    label: string;
    suffix?: string;
}

function Stat({ number, label, suffix = '+' }: StatProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView && ref.current) {
            const controls = animate(0, number, {
                duration: 2,
                onUpdate(value) {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(value).toString();
                    }
                },
            });
            return () => controls.stop();
        }
    }, [isInView, number]);

    return (
        <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-islamic-primary mb-2 flex items-center justify-center">
                <span ref={ref}>0</span>
                <span>{suffix}</span>
            </div>
            <div className="text-text-secondary text-lg">{label}</div>
        </div>
    );
}

export default function Welcome() {
    const [greeting, setGreeting] = React.useState('Selamat Datang');

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
        <section className="py-24 bg-surface-secondary">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    {greeting}!
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-text-secondary max-w-[700px] mx-auto mb-16"
                >
                    Mendidik generasi Qur'ani yang berakhlak mulia dan berwawasan luas
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
                    <Stat number={15} label="Tahun Pengalaman" />
                    <Stat number={500} label="Santri Lulus" />
                    <Stat number={25} label="Guru Terlatih" />
                </div>

                <div className="max-w-[400px] mx-auto">
                    <div className="h-1.5 bg-border-light rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '65%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-islamic-primary"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
