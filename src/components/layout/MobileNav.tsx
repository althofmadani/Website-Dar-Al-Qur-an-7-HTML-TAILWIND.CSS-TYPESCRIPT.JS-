"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/Button';

const MOBILE_LINKS = [
    { label: 'Beranda', href: '/' },
    {
        label: 'Profil',
        href: '#',
        submenu: [
            { label: 'Visi dan Misi', href: '/profil/visi-misi' },
            { label: 'Profil Pondok', href: '/profil/pesantren' },
            { label: 'Profil Pengasuh', href: '/profil/pengasuh' },
        ]
    },
    {
        label: 'Berita',
        href: '#',
        submenu: [
            { label: 'Kegiatan', href: '/berita/kegiatan' },
            { label: 'Galeri Foto', href: '/berita/galeri' },
        ]
    },
    {
        label: 'Kolom',
        href: '#',
        submenu: [
            { label: "Oase Al-Qur'an", href: '/kolom/oase' },
            { label: 'Kalam Hikmah', href: '/kolom/kalam-hikmah' },
            { label: 'Artikel', href: '/kolom/artikel' },
        ]
    },
    {
        label: 'Pendidikan',
        href: '#',
        submenu: [
            { label: 'Tahsin', href: '/pendidikan/tahsin' },
            { label: 'Tahfidz', href: '/pendidikan/tahfidz' },
            { label: 'Madrasah', href: '/pendidikan/madrasah' },
        ]
    },
    {
        label: 'Pendaftaran',
        href: '#',
        submenu: [
            { label: 'Brosur', href: '/pendaftaran/brosur' },
            { label: 'Formulir Pendaftaran', href: '/pendaftaran/formulir' },
        ]
    },
    { label: 'DQ Mart', href: '/dq-mart' },
    {
        label: 'Kontak',
        href: '#',
        submenu: [
            { label: 'Sosial Media', href: '/kontak/sosial-media' },
            { label: 'Kontak dan Alamat', href: '/kontak/alamat' },
        ]
    },
];

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const toggleSubmenu = (label: string) => {
        setOpenSubmenu(openSubmenu === label ? null : label);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[2000] bg-black/40 backdrop-blur-sm"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 w-[300px] h-full z-[2001] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col"
                    >
                        <div className="p-6 border-b border-border-light flex justify-between items-center bg-islamic-primary text-white">
                            <h3 className="text-lg font-bold">Menu</h3>
                            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
                                <Icons.X size={24} />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-6">
                            <ul className="space-y-1">
                                {MOBILE_LINKS.map((link) => (
                                    <li key={link.label} className="px-4">
                                        {link.submenu ? (
                                            <div className="mb-2">
                                                <button
                                                    onClick={() => toggleSubmenu(link.label)}
                                                    className="w-full flex items-center justify-between p-3 text-base font-semibold border-none bg-transparent hover:bg-black/5 rounded-lg text-black"
                                                >
                                                    {link.label}
                                                    <Icons.ChevronDown
                                                        size={16}
                                                        className={`transition-transform duration-300 ${openSubmenu === link.label ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {openSubmenu === link.label && (
                                                        <motion.ul
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden bg-black/5 rounded-lg mt-1"
                                                        >
                                                            {link.submenu.map((sub) => (
                                                                <li key={sub.label}>
                                                                    <Link
                                                                        href={sub.href}
                                                                        onClick={onClose}
                                                                        className="block p-3 pl-6 text-sm text-text-secondary hover:text-islamic-primary"
                                                                    >
                                                                        {sub.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={onClose}
                                                className="block p-3 text-base font-semibold hover:bg-black/5 rounded-lg text-black"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
