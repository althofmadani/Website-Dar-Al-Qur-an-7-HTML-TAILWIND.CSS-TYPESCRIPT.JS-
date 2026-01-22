"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
        alt: "Pembacaan Al-Qur'an",
        title: "Pembacaan Al-Qur'an",
    },
    {
        src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80",
        alt: "Kegiatan Santri",
        title: "Kegiatan Santri",
    },
    {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
        alt: "Pembelajaran di Kelas",
        title: "Pembelajaran di Kelas",
    },
    {
        src: "https://images.unsplash.com/photo-1591123720164-de1348028a82?w=600&q=80",
        alt: "Masjid pesantren",
        title: "Masjid Masjid",
    },
    {
        src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
        alt: "Kegiatan Sosial",
        title: "Kegiatan Sosial",
    },
    {
        src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
        alt: "Perpustakaan",
        title: "Perpustakaan",
    },
    {
        src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
        alt: "Kajian Rutin",
        title: "Kajian Rutin",
    },
    {
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
        alt: "Sarana Prasarana",
        title: "Sarana Prasarana",
    },
];

export default function Galeri() {
    return (
        <section id="galeri" className="py-24 bg-white">
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
                        GALERI KEGIATAN
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                        Momen Berharga di <span className="text-islamic-primary">Dar Al-Qur'an</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[600px] mx-auto">
                        Dokumentasi kegiatan dan suasana kampus yang mencerminkan kehidupan
                        islami dan semangat menuntut ilmu
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden shadow-soft cursor-pointer ${
                                index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2' : ''
                            } ${index === 6 ? 'lg:col-span-2' : ''}`}
                        >
                            {/* Card Container - Properly clips overlay to rounded corners */}
                            <div className="relative w-full h-full min-h-[250px] sm:min-h-[200px] lg:min-h-[200px] overflow-hidden rounded-2xl">
                                {/* Image - Fills entire container */}
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes={
                                        index === 0 || index === 5
                                            ? '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw'
                                            : index === 6
                                                ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw'
                                                : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                                    }
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                />

                                {/* Badge for larger images */}
                                {(index === 0 || index === 5) && (
                                    <div className="absolute top-4 left-4 z-20 bg-islamic-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Unggulan
                                    </div>
                                )}

                                {/* Hover Overlay - Perfectly contained with absolute inset-0 */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex flex-col items-center justify-center p-6">
                                        <Icons.Image size={32} className="text-white mb-3" />
                                        <h3 className="text-xl font-bold text-white text-center">
                                            {image.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/berita/galeri"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-islamic-primary text-white rounded-full font-semibold hover:bg-islamic-secondary hover:shadow-lg hover:shadow-islamic-primary/25 hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        <Icons.Image size={20} />
                        Lihat Galeri Lengkap
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

