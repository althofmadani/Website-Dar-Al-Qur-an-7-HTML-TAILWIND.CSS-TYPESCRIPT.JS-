"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/hooks/useScroll';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/shared/Icons';

interface NavLink {
    label: string;
    href?: string;
    menuId?: string;
}

const NAV_LINKS: NavLink[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Profil', menuId: 'profil' },
    { label: 'Berita', menuId: 'berita' },
    { label: 'Kolom', menuId: 'kolom' },
    { label: 'Pendidikan', menuId: 'pendidikan' },
    { label: 'Pendaftaran', menuId: 'pendaftaran' },
    { label: 'DQ Mart', href: '/dq-mart' },
    { label: 'Kontak', menuId: 'kontak' },
];

const MEGA_MENU_CONTENT: Record<string, { label: string; links: { label: string; href: string }[] }[]> = {
    profil: [
        {
            label: 'Profil Institusi',
            links: [
                { label: 'Visi dan Misi', href: '/profil/visi-misi' },
                { label: 'Profil Pondok', href: '/profil/pesantren' },
                { label: 'Profil Pengasuh', href: '/profil/pengasuh' },
            ],
        },
    ],
    berita: [
        {
            label: 'Berita & Media',
            links: [
                { label: 'Kegiatan', href: '/berita/kegiatan' },
                { label: 'Galeri Foto', href: '/berita/galeri' },
            ],
        },
    ],
    kolom: [
        {
            label: 'Karya Tulis',
            links: [
                { label: 'Oase Al-Qur\'an', href: '/kolom/oase' },
                { label: 'Kalam Hikmah', href: '/kolom/kalam-hikmah' },
                { label: 'Artikel', href: '/kolom/artikel' },
            ],
        },
    ],
    pendidikan: [
        {
            label: 'Program Pendidikan',
            links: [
                { label: 'Tahsin', href: '/pendidikan/tahsin' },
                { label: 'Tahfidz', href: '/pendidikan/tahfidz' },
                { label: 'Madrasah', href: '/pendidikan/madrasah' },
            ],
        },
    ],
    pendaftaran: [
        {
            label: 'Informasi Pendaftaran',
            links: [
                { label: 'Brosur', href: '/pendaftaran/brosur' },
                { label: 'Formulir Pendaftaran', href: '/pendaftaran/formulir' },
            ],
        },
    ],
    kontak: [
        {
            label: 'Hubungi Kami',
            links: [
                { label: 'Sosial Media', href: '/kontak/sosial-media' },
                { label: 'Kontak dan Alamat', href: '/kontak/alamat' },
            ],
        },
    ],
};

import MobileNav from '@/components/layout/MobileNav';

export default function Navbar() {
    const isScrolled = useScroll(20);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (menuId: string) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setActiveMenu(menuId);
        setIsSearchOpen(false);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setActiveMenu(null);
            setIsSearchOpen(false);
        }, 100); // Faster close when leaving dropdown area
        setHoverTimeout(timeout);
    };

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isSearchOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveMenu(null);
                setIsSearchOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
            if (hoverTimeout) clearTimeout(hoverTimeout);
        };
    }, [hoverTimeout]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[1000] h-12 transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeMenu || isSearchOpen
                    ? 'bg-white backdrop-blur-xl shadow-lg border-b border-white/20'
                    : isScrolled
                        ? 'bg-white/60 backdrop-blur-xl shadow-xl/10 rgba(0, 0, 0, 0.25) border-b border-white/20'
                        : 'bg-white border-b border-gray-100'
                    }`}
            >
                <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between relative">
                    {/* Logo + Branch Text */}
                    <Link href="/" className="relative flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Pondok Pesantern Dar Al-Qur'an"
                            width={160}
                            height={20}
                            className="h-5 w-auto object-contain"
                            style={{ width: 'auto' }}
                            priority
                        />
                        <div className="relative">
                            <span className="text-sm font-extrabold text-islamic-primary tracking-tight relative z-10">
                                DQ Kebon Baru
                            </span>
                            <span></span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.label}
                                className="relative flex items-center"
                            >
                                {link.href ? (
                                    <Link
                                        href={link.href}
                                        onMouseEnter={() => link.menuId && handleMouseEnter(link.menuId)}
                                        className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-1.5 whitespace-nowrap py-2"
                                    >
                                        {link.label}
                                        {link.menuId && (
                                            <Icons.ChevronDown
                                                size={9}
                                                className={`opacity-60 transition-transform duration-300 ${activeMenu === link.menuId ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </Link>
                                ) : (
                                    <span
                                        onMouseEnter={() => link.menuId && handleMouseEnter(link.menuId)}
                                        className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer py-2"
                                    >
                                        {link.label}
                                        {link.menuId && (
                                            <Icons.ChevronDown
                                                size={9}
                                                className={`opacity-60 transition-transform duration-300 ${activeMenu === link.menuId ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Nav Icons */}
                    <div className="flex items-center gap-3 ml-auto">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`w-9 h-9 text-gray-500 rounded-full transition-all duration-200 ${isSearchOpen
                                ? 'bg-black text-white'
                                : isScrolled
                                    ? 'bg-black/10 backdrop-blur-xl border border-none'
                                    : 'bg-white border-none'
                                }`}
                            onClick={() => {
                                setIsSearchOpen(!isSearchOpen);
                                setActiveMenu(null);
                            }}
                            aria-label="Search"
                        >
                            <Icons.Search size={16} />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`md:hidden w-9 h-9 text-gray-500 rounded-full transition-all duration-200 ${isMobileMenuOpen
                                ? 'bg-black text-white'
                                : isScrolled
                                    ? 'bg-black/10 backdrop-blur-xl border border-none'
                                    : 'bg-white border-none'
                                }`}
                            aria-label="Menu"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Icons.Menu size={16} />
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Backdrop - Always rendered, controlled by CSS */}
            <div
                className={`fixed inset-0 top-12 z-[40] bg-white/10 backdrop-blur-sm transition-opacity duration-200 ease-in-out pointer-events-none ${activeMenu || isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
                    }`}
                onClick={() => {
                    setActiveMenu(null);
                    setIsSearchOpen(false);
                }}
                onMouseEnter={() => {
                    if (hoverTimeout) clearTimeout(hoverTimeout);
                }}
                onMouseLeave={handleMouseLeave}
            />

            {/* Mega Menu Panel */}
            <AnimatePresence mode="sync">
                {(activeMenu || isSearchOpen) && (
                    <motion.div
                        key={`mega-menu-${activeMenu || 'search'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed inset-0 top-12 z-[998]"
                    >
                        {/* Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeOut" } }}
                            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute top-0 left-0 w-full z-[999] bg-white backdrop-blur-2xl border-b border-gray-100 shadow-xl max-h-[70vh] overflow-y-auto py-12"
                            onMouseEnter={() => {
                                if (hoverTimeout) clearTimeout(hoverTimeout);
                            }}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="max-w-[1200px] mx-auto px-6">
                                {isSearchOpen ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.15, ease: "easeOut", delay: 0.05 }}
                                    >
                                        <div className="max-w-[600px] mx-auto">
                                            <div className="mb-8">
                                                <input
                                                    type="text"
                                                    placeholder="Cari di Dar Al-Qur'an..."
                                                    autoFocus
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-full px-10 py-4.5 text-2xl font-medium outline-none focus:ring-2 focus:ring-islamic-primary/20 transition-all text-text-secondary"
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-[13px] font-semibold text-gray-500 uppercase tracking-widest mb-4">Quick Links</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Visi & Misi', 'Pendaftaran', 'Galeri', 'Kontak'].map((tag) => (
                                                        <Link
                                                            key={tag}
                                                            href="#"
                                                            className="bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 hover:bg-islamic-primary hover:text-white transition-all"
                                                        >
                                                            {tag}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : activeMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.15, ease: "easeOut", delay: 0.05 }}
                                        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
                                    >
                                        {MEGA_MENU_CONTENT[activeMenu]?.map((section) => (
                                            <div key={section.label}>
                                                <h4 className="text-[12px] font-bold text-islamic-primary uppercase tracking-wider mb-6">
                                                    {section.label}
                                                </h4>
                                                <ul className="space-y-4">
                                                    {section.links.map((link) => (
                                                        <li key={link.label}>
                                                            <Link
                                                                href={link.href}
                                                                className="text-lg font-medium text-gray-700 hover:text-islamic-primary transition-all inline-block hover:translate-x-1"
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
}


