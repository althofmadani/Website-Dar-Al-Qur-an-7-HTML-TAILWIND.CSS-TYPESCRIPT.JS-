"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Icons } from '@/components/shared/Icons';

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
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert('Pesan Anda telah dikirim! Terima kasih.');
        reset();
    };

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-islamic-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-islamic-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-black">Kontak & Alamat</h2>
                    <p className="text-gray-500 text-lg">
                        Hubungi kami atau kunjungi lokasi Pondok Pesanten Dar Al-Qur'an
                    </p>
                </div>

                {/* Three Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Box 1: Informasi Kontak */}
                    <div className="bg-white rounded-[24px] p-8 shadow-elevated border border-gray-100 hover:shadow-premium transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-islamic-primary/10 rounded-2xl flex items-center justify-center">
                                <Icons.MapPin className="w-6 h-6 text-islamic-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-black">Informasi Kontak</h3>
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Icons.MapPin className="w-5 h-5 text-islamic-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Alamat</p>
                                    <p className="text-gray-800 font-medium">
                                        Jl. KH. Ahmad Dahlan No. 19<br />
                                        Kebon Baru, Cipayung, Jakarta Timur<br />
                                        DKI Jakarta 13890
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Icons.Phone className="w-5 h-5 text-islamic-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Telepon</p>
                                    <p className="text-gray-800 font-medium">+62 21 1234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Icons.Mail className="w-5 h-5 text-islamic-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Email</p>
                                    <p className="text-gray-800 font-medium">info@daralquran.id</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Icons.Clock className="w-5 h-5 text-islamic-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Jam Operasional</p>
                                    <p className="text-gray-800 font-medium">
                                        Senin - Minggu: 08.00 - 16.00 WIB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Box 2: Peta Lokasi */}
                    <div className="bg-white rounded-[24px] p-8 shadow-elevated border border-gray-100 hover:shadow-premium transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-islamic-primary/10 rounded-2xl flex items-center justify-center">
                                <Icons.MapPin className="w-6 h-6 text-islamic-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-black">Peta Lokasi</h3>
                        </div>

                        <div className="bg-gray-100 rounded-[16px] overflow-hidden h-[280px] relative">
                            {/* Map Placeholder - Replace with actual Google Maps embed */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                <div className="w-16 h-16 bg-islamic-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Icons.MapPin className="w-8 h-8 text-islamic-primary" />
                                </div>
                                <p className="text-gray-500 font-medium mb-2">Peta Lokasi</p>
                                <p className="text-gray-400 text-sm text-center px-8">
                                    Jl. KH. Ahmad Dahlan No. 19<br />
                                    Kebon Baru, Cipayung, Jakarta Timur
                                </p>
                            </div>
                            
                            {/* Overlay Button */}
                            <a 
                                href="https://maps.google.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl shadow-soft text-sm font-semibold text-islamic-primary hover:bg-islamic-primary hover:text-white transition-colors"
                            >
                                Buka di Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Box 3: Hubungi Kami */}
                    <div className="bg-white rounded-[24px] p-8 shadow-elevated border border-gray-100 hover:shadow-premium transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-islamic-primary/10 rounded-2xl flex items-center justify-center">
                                <Icons.Send className="w-6 h-6 text-islamic-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-black">Hubungi Kami</h3>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 px-1">Nama Lengkap</label>
                                <input
                                    {...register('name')}
                                    placeholder="Masukkan nama Anda"
                                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none bg-gray-50 text-black focus:shadow-soft ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-islamic-primary'
                                        }`}
                                />
                                {errors.name && <p className="text-red-500 text-xs px-1">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 px-1">Email</label>
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="Masukkan email Anda"
                                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none bg-gray-50 text-black focus:shadow-soft ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-islamic-primary'
                                        }`}
                                />
                                {errors.email && <p className="text-red-500 text-xs px-1">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 px-1">Pesan</label>
                                <textarea
                                    {...register('message')}
                                    rows={3}
                                    placeholder="Tulis pesan Anda di sini"
                                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none bg-gray-50 text-black focus:shadow-soft resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-islamic-primary'
                                        }`}
                                />
                                {errors.message && <p className="text-red-500 text-xs px-1">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3.5 rounded-xl bg-islamic-primary text-white font-bold shadow-soft hover:bg-islamic-secondary hover:shadow-elevated transition-all disabled:opacity-50 disabled:pointer-events-none active:scale-95"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2 justify-center">
                                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                        Mengirim...
                                    </div>
                                ) : 'Kirim Pesan'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
