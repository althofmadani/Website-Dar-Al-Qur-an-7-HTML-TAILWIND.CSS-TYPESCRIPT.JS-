"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/shared/Icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-border-light pt-20 pb-10">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    {/* Brand */}
                    <Link href="/" className="flex flex-col items-center gap-4 mb-8 group">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Logo"
                            width={64}
                            height={64}
                            className="object-contain group-hover:scale-105 transition-transform"
                        />
                        <h3 className="text-2xl font-bold text-black">Pondok Pesantren Dar Al-Qur'an</h3>
                    </Link>

                    <p className="text-text-secondary max-w-[500px] mb-10 text-lg">
                        Mendidik generasi Qur'ani yang berakhlak mulia dan berwawasan luas
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-6 mb-12">
                        {[
                            { icon: <Icons.Facebook />, href: "https://www.facebook.com/dqkebonbarureview", label: "Facebook" },
                            { icon: <Icons.Instagram />, href: "https://www.instagram.com/dq.kebonbaru/", label: "Instagram" },
                            { icon: <Icons.Twitter />, href: "#", label: "Twitter" },
                            { icon: <Icons.Youtube />, href: "https://www.youtube.com/@dqkebonbaru2369", label: "YouTube" }
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-secondary text-text-secondary hover:bg-islamic-primary hover:text-white hover:shadow-elevated transition-all"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Nav Links */}
                    <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-text-secondary">
                        {[
                            { label: 'Beranda', href: '/' },
                            { label: 'Profil', href: '/profil' },
                            { label: 'Berita', href: '/berita' },
                            { label: 'Pendidikan', href: '/pendidikan' },
                            { label: 'Pendaftaran', href: '/pendaftaran' },
                            { label: 'Kontak', href: '/kontak' },
                        ].map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className="hover:text-islamic-primary transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-10 border-t border-border-light text-center">
                    <p className="text-sm text-text-secondary opacity-60">
                        &copy; {currentYear} Pondok Pesantern Dar Al-Qur'an. Hak Cipta Dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
}

