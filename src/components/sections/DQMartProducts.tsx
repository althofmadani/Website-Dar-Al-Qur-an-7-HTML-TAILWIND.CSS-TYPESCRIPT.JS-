"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/Button';

interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
    badge?: string;
}

const products: Product[] = [
    {
        id: 'kitab-1',
        name: 'Kitab Bulughul Maram',
        category: 'Kitab',
        price: 'Rp 35.000',
        image: '/assets/images/kitab-bulughul-maram.jpg',
    },
    {
        id: 'kitab-2',
        name: 'Kitab Riyadhus Shalihin',
        category: 'Kitab',
        price: 'Rp 42.000',
        image: '/assets/images/kitab-riyadhus.jpg',
    },
    {
        id: 'seragam-1',
        name: 'Seragam Putih Madrasah',
        category: 'Seragam',
        price: 'Rp 125.000',
        image: '/assets/images/seragam-putih.jpg',
    },
    {
        id: 'seragam-2',
        name: 'Seragam Batik Madrasah',
        category: 'Seragam',
        price: 'Rp 150.000',
        image: '/assets/images/seragam-batik.jpg',
    },
    {
        id: 'barang-1',
        name: 'Sajadah Premium',
        category: 'Barang',
        price: 'Rp 75.000',
        image: '/assets/images/sajadah.jpg',
        badge: 'Baru',
    },
    {
        id: 'barang-2',
        name: 'Kopiah Santri',
        category: 'Barang',
        price: 'Rp 25.000',
        image: '/assets/images/kopiah.jpg',
    },
    {
        id: 'barang-3',
        name: 'Tas Rajut',
        category: 'Barang',
        price: 'Rp 55.000',
        image: '/assets/images/tas-rajut.jpg',
    },
    {
        id: 'barang-4',
        name: 'Buku Tulis DQ',
        category: 'Barang',
        price: 'Rp 12.000',
        image: '/assets/images/buku-tulis.jpg',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DQMartProducts() {
    return (
        <section className="py-20 md:py-28 bg-surface-secondary">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/10 rounded-full text-accent-primary text-sm font-semibold mb-4">
                            <Icons.ShoppingBag size={16} />
                            Katalog
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                            Produk Terbaru
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Berbagai merchandise dan perlengkapan pesantren
                        </p>
                    </div>
                    <Button variant="outline" size="md" className="shrink-0">
                        Lihat Semua
                        <Icons.ArrowRight size={18} className="ml-2" />
                    </Button>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                {product.badge && (
                                    <span className="absolute top-3 left-3 z-10 bg-accent-primary text-white text-xs font-bold px-2.5 py-1 rounded-md">
                                        {product.badge}
                                    </span>
                                )}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <Icons.ShoppingBag size={40} />
                                </div>
                                {/* Quick actions overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                                    <Button variant="secondary" size="icon" className="w-10 h-10 bg-white/90 hover:bg-white">
                                        <Icons.Search size={18} className="text-text-primary" />
                                    </Button>
                                    <Button variant="secondary" size="icon" className="w-10 h-10 bg-white/90 hover:bg-white">
                                        <Icons.Plus size={18} className="text-text-primary" />
                                    </Button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <p className="text-xs text-islamic-primary font-semibold uppercase tracking-wider mb-1">
                                    {product.category}
                                </p>
                                <h3 className="text-base font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-islamic-primary transition-colors">
                                    {product.name}
                                </h3>
                                <div className="flex items-center justify-between pt-3">
                                    <p className="text-lg font-bold text-accent-primary">
                                        {product.price}
                                    </p>
                                    <Button variant="primary" size="sm" className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                        Tambah
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button (Mobile) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center md:hidden"
                >
                    <Button variant="outline" size="lg">
                        Lihat Semua Produk
                        <Icons.ArrowRight size={20} className="ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

