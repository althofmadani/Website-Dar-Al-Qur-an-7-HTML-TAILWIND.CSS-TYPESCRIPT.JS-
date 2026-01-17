"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/shared/Icons';
import dynamic from 'next/dynamic';
import RegistrationForm from './RegistrationForm';

const Modal = dynamic(() => import('@/components/ui/Modal'), { ssr: false });

export default function QuickActions() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [extraButtons, setExtraButtons] = useState<number[]>([]);

    const addTestButton = () => {
        setExtraButtons([...extraButtons, Date.now()]);
    };

    const scrollToFAQ = () => {
        const faq = document.getElementById('faq');
        if (faq) {
            faq.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Aksi Cepat</h2>

                <div className="flex flex-wrap justify-center gap-6">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => setIsModalOpen(true)}
                        className="flex gap-2"
                    >
                        <Icons.Plus size={20} />
                        Daftar Sekarang
                    </Button>

                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={scrollToFAQ}
                        className="flex gap-2"
                    >
                        <Icons.CircleHelp size={20} />
                        Tampilkan FAQ
                    </Button>

                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={addTestButton}
                        className="flex gap-2 border border-border-light hover:border-islamic-primary"
                    >
                        <Icons.Plus size={20} />
                        Buat Tombol Baru
                    </Button>

                    {extraButtons.map((id) => (
                        <Button
                            key={id}
                            variant="outline"
                            size="lg"
                            className="animate-in fade-in slide-in-from-bottom-2 duration-500"
                            onClick={() => alert('Interaksi tombol baru!')}
                        >
                            <Icons.Plus size={18} className="mr-2" />
                            Tombol Baru
                        </Button>
                    ))}
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Formulir Pendaftaran"
                >
                    <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
                </Modal>
            </div>
        </section>
    );
}
