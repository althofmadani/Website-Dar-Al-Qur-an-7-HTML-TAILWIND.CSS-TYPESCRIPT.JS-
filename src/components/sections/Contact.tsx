"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const contactSchema = z.object({
    name: z.string().min(2, 'Nama minimal 2 karakter'),
    email: z.string().email('Email tidak valid'),
    message: z.string().min(10, 'Pesan minimal 10 karakter'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        console.log(data);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert('Pesan Anda telah dikirim! Terima kasih.');
        reset();
    };

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-islamic-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="max-w-[640px] mx-auto bg-white rounded-[32px] p-8 md:p-12 shadow-elevated border border-gray-100">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold mb-4 text-black">Hubungi Kami</h2>
                        <p className="text-gray-500 text-lg">
                            Untuk informasi lebih lanjut, silakan mengisi formulir di bawah ini:
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 px-1">Nama Lengkap</label>
                            <input
                                {...register('name')}
                                placeholder="Masukkan nama Anda"
                                className={`w-full px-6 py-4 rounded-xl border transition-all outline-none bg-gray-50 text-black focus:shadow-soft ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-islamic-primary'
                                    }`}
                            />
                            {errors.name && <p className="text-red-500 text-xs px-1">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 px-1">Email</label>
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="Masukkan email Anda"
                                className={`w-full px-6 py-4 rounded-xl border transition-all outline-none bg-gray-50 text-black focus:shadow-soft ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-islamic-primary'
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-xs px-1">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 px-1">Pesan</label>
                            <textarea
                                {...register('message')}
                                rows={4}
                                placeholder="Tulis pesan Anda di sini"
                                className={`w-full px-6 py-4 rounded-xl border transition-all outline-none bg-gray-50 text-black focus:shadow-soft resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-islamic-primary'
                                    }`}
                            />
                            {errors.message && <p className="text-red-500 text-xs px-1">{errors.message.message}</p>}
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-5 rounded-2xl shadow-elevated"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    Mengirim...
                                </div>
                            ) : 'Kirim Pesan'}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
