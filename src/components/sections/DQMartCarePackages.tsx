"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/Button';

interface CarePackage {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    items: string[];
    popular: boolean;
}

const carePackages: CarePackage[] = [
    {
        id: 'paket-basic',
        name: 'Paket Harian',
        description: 'Perlengkapan kebutuhan sehari-hari untuk 1 bulan',
        price: 'Rp 150.000',
        image: '/assets/images/care-package-basic.jpg',
        items: ['Pasta gigi 2x', 'Sabun mandi 3x', 'Shampoo 1x', 'Sikat gigi 2x'],
        popular: false,
    },
    {
        id: 'paket-standard',
        name: 'Paket Standard',
        description: 'Paket lengkap kebutuhan utama selama 1 bulan',
        price: 'Rp 250.000',
        image: '/assets/images/care-package-standard.jpg',
        items: ['Paket Harian +', 'Kopi & Gula', 'Snack 2x', 'Perlengkapan Ibadah'],
        popular: true,
    },
    {
        id: 'paket-premium',
        name: 'Paket Premium',
        description: 'Paket mewah dengan berbagai kebutuhan lengkap',
        price: 'Rp 400.000',
        image: '/assets/images/care-package-premium.jpg',
        items: ['Paket Standard +', 'Susu 1 Liter', 'Buah-buahan', 'Vitamin & Obat'],
        popular: false,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DQMartCarePackages() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-islamic-primary/10 rounded-full text-islamic-primary text-sm font-semibold mb-4">
                        <Icons.ShoppingBag size={16} />
                        DQ Mart
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Paket Kiriman Wali Santri
                    </h2>
                    <p className="text-lg text-text-secondary max-w-[700px] mx-auto">
                        Kirimkan kebahagiaan kepada putra-putri Anda di pondok.
                        Pesanan orang tua akan dikirim langsung ke asrama.
                    </p>
                </motion.div>

                {/* Care Packages Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {carePackages.map((pkg) => (
                        <motion.div
                            key={pkg.id}
                            variants={itemVariants}
                            className={`relative bg-surface-secondary rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 ${pkg.popular ? 'ring-2 ring-islamic-primary' : ''
                                }`}
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="bg-islamic-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Paling Populer
                                    </span>
                                </div>
                            )}

                            {/* Image Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-islamic-primary/20 to-islamic-secondary/20 flex items-center justify-center">
                                <div className="text-center">
                                    <Icons.ShoppingBag size={48} className="text-islamic-primary mx-auto mb-2" />
                                    <span className="text-sm text-text-secondary">Gambar Paket</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-text-primary mb-2">
                                    {pkg.name}
                                </h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    {pkg.description}
                                </p>

                                {/* Items List */}
                                <div className="mb-6">
                                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
                                        Terdapat:
                                    </p>
                                    <ul className="space-y-2">
                                        {pkg.items.map((item, index) => (
                                            <li key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between pt-4 border-t border-border-light">
                                    <div>
                                        <p className="text-xs text-text-secondary">Mulai dari</p>
                                        <p className="text-2xl font-bold text-islamic-primary">
                                            {pkg.price}
                                        </p>
                                    </div>
                                    <Button variant="primary" size="md">
                                        Pesan
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 p-6 bg-gradient-to-r from-islamic-primary/5 to-accent-primary/5 rounded-2xl border border-islamic-primary/10"
                >
                    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                        <div className="w-12 h-12 rounded-full bg-islamic-primary flex items-center justify-center text-white shrink-0">
                            <Icons.Clock size={24} />
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-bold text-text-primary mb-1">
                                Pengiriman ke Asrama
                            </h4>
                            <p className="text-text-secondary text-sm">
                                Barang yang dipesan orang tua akan dikirim langsung ke asrama siswa.
                                Sistem pembayaran dapat dilakukan via transfer atau datang langsung ke kantor.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

