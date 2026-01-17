"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';

interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
    description: string;
    color: string;
}

const categories: Category[] = [
    {
        id: 'kitab',
        name: 'Kitab',
        icon: <Icons.BookOpen size={32} />,
        description: 'Buku pelajaran & kitab kuning',
        color: 'from-islamic-primary to-islamic-secondary',
    },
    {
        id: 'seragam',
        name: 'Seragam',
        icon: <Icons.GraduationCap size={32} />,
        description: 'Seragam pesantren & Madrasah',
        color: 'from-accent-primary to-accent-hover',
    },
    {
        id: 'kebutuhan',
        name: 'Kebutuhan Harian',
        icon: <Icons.ShoppingBag size={32} />,
        description: 'Perlengkapan sehari-hari',
        color: 'from-islamic-secondary to-islamic-primary',
    },
    {
        id: 'karya',
        name: 'Karya Santri',
        icon: <Icons.ArrowRight size={32} />,
        description: 'Produk kreasi Santri',
        color: 'from-accent-hover to-accent-primary',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DQMartCategories() {
    return (
        <section className="py-20 md:py-28 bg-surface-secondary">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Kategori Produk
                    </h2>
                    <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
                        Temukan berbagai kebutuhan pesantren dalam satu tempat
                    </p>
                </motion.div>

                {/* Category Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="relative bg-white rounded-2xl p-8 h-full shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden">
                                {/* Gradient background on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                />

                                {/* Icon container */}
                                <div className="relative mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        {category.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-islamic-primary transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Arrow indicator */}
                                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                                        <Icons.ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

