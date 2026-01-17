"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import RegistrationForm from '@/components/sections/RegistrationForm';

const Modal = dynamic(() => import('@/components/ui/Modal'), { ssr: false });

export default function RegistrationModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-registration-modal', handleOpen);
        return () => window.removeEventListener('open-registration-modal', handleOpen);
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Formulir Pendaftaran"
        >
            <RegistrationForm onSuccess={() => setIsOpen(false)} />
        </Modal>
    );
}
