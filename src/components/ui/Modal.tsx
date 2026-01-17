"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/Button';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
    // Close on escape
    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

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
                        className="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-md"
                    />

                    {/* Content */}
                    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="bg-white rounded-3xl w-full max-w-[480px] shadow-premium pointer-events-auto overflow-hidden"
                        >
                            {/* Header */}
                            <div className="px-8 py-6 flex items-center justify-between border-b border-border-light">
                                <h3 className="text-xl font-bold text-black">{title}</h3>
                                <Button variant="ghost" size="icon" onClick={onClose}>
                                    <Icons.X size={24} />
                                </Button>
                            </div>

                            {/* Body */}
                            <div className="px-8 py-8 max-h-[70vh] overflow-y-auto">
                                {children}
                            </div>

                            {/* Footer */}
                            {footer && (
                                <div className="px-8 py-6 bg-surface-secondary border-t border-border-light flex flex-col sm:flex-row gap-3">
                                    {footer}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
