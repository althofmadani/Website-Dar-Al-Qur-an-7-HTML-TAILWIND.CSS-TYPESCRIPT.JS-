"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';

interface FeatureCardProps {
    image: string;
    title: string;
    description: string;
}

function FeatureCard({ image, title, description }: { image: string; title: string; description: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full bg-white rounded-3xl overflow-hidden shadow-soft border border-border-light group transition-all duration-300 hover:shadow-premium hover:border-islamic-primary"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="flex flex-col h-full"
            >
                <div className="relative h-48 w-full overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-8 text-center flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Features() {
    const features = [
        {
            image: "/assets/images/feature_quran.png",
            title: "Pendidikan Al-Qur'an",
            description: "Program intensif hafalan Al-Qur'an dengan metode terstruktur dan pembimbingan personal."
        },
        {
            image: "/assets/images/feature_education.png",
            title: "Ilmu Agama",
            description: "Pengajaran fiqih, hadis, dan tauhid sesuai dengan kitab-kitab salaf yang sholih."
        },
        {
            image: "/assets/images/feature_certificate.png",
            title: "Sertifikasi",
            description: "Santri mendapatkan sertifikat resmi setelah menyelesaikan program pendidikan."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
