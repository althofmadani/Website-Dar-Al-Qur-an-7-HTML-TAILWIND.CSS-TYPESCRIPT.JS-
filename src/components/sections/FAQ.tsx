"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
    return (
        <div
            className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-islamic-primary shadow-elevated' : 'border-border-light hover:bg-surface-secondary'
                }`}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="text-lg font-semibold text-islamic-primary">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-islamic-secondary"
                >
                    <Icons.ChevronDown size={20} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 py-6 text-text-secondary leading-relaxed border-t border-border-light">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Apakah ada biaya pendaftaran?",
            answer: "Tidak, pendaftaran gratis untuk siswa baru."
        },
        {
            question: "Berapa lama durasi pendidikan?",
            answer: "Durasi pendidikan adalah 5 tahun."
        },
        {
            question: "Fasilitas apa saja yang tersedia?",
            answer: "Asrama, masjid, kantin, perpustakaan, dan ruang belajar."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-surface-secondary">
            <div className="max-w-[700px] mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Pertanyaan Umum</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            {...faq}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
