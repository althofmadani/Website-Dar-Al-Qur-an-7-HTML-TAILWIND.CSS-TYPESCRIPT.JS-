"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/hooks/useScroll';
import { Icons } from '@/components/shared/Icons';

export default function FloatingCTA() {
    const isVisible = useScroll(500);

    const handleClick = () => {
        // Dispatch custom event to open registration modal
        window.dispatchEvent(new CustomEvent('open-registration-modal'));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                    className="fixed bottom-8 right-8 z-[9000] w-14 h-14 bg-islamic-primary text-white rounded-full shadow-elevated flex items-center justify-center hover:bg-islamic-secondary transition-colors"
                    aria-label="Daftar Sekarang"
                >
                    <Icons.Send size={24} className="rotate-[-25deg] translate-x-0.5 -translate-y-0.5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
