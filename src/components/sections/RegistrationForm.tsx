"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';

const registrationSchema = z.object({
    fullName: z.string().min(2, 'Nama minimal 2 karakter'),
    email: z.string().email('Email tidak valid'),
    phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
    program: z.string().min(1, 'Pilih program pendidikan'),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
    onSuccess?: () => void;
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema),
    });

    const onSubmit = async (data: RegistrationFormValues) => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert('Pendaftaran berhasil dikirim! Kami akan menghubungi Anda segera.');
        reset();
        if (onSuccess) onSuccess();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
            <div className="space-y-1.5">
                <label className="text-sm font-semibold text-text-primary px-1">Nama Lengkap</label>
                <input
                    {...register('fullName')}
                    placeholder="Nama Lengkap"
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none bg-surface-secondary focus:bg-white transition-all ${errors.fullName ? 'border-red-500' : 'border-border-light focus:border-islamic-primary'
                        }`}
                />
                {errors.fullName && <p className="text-red-500 text-xs px-1">{errors.fullName.message}</p>}
            </div>

            <div className="space-y-1.5">
                <label className="text-sm font-semibold text-text-primary px-1">Email</label>
                <input
                    {...register('email')}
                    type="email"
                    placeholder="email@example.com"
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none bg-surface-secondary focus:bg-white transition-all ${errors.email ? 'border-red-500' : 'border-border-light focus:border-islamic-primary'
                        }`}
                />
                {errors.email && <p className="text-red-500 text-xs px-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-1.5">
                <label className="text-sm font-semibold text-text-primary px-1">Nomor Telepon</label>
                <input
                    {...register('phone')}
                    placeholder="0812..."
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none bg-surface-secondary focus:bg-white transition-all ${errors.phone ? 'border-red-500' : 'border-border-light focus:border-islamic-primary'
                        }`}
                />
                {errors.phone && <p className="text-red-500 text-xs px-1">{errors.phone.message}</p>}
            </div>

            <div className="space-y-1.5">
                <label className="text-sm font-semibold text-text-primary px-1">Pilih Program</label>
                <select
                    {...register('program')}
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none bg-surface-secondary focus:bg-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat transition-all ${errors.program ? 'border-red-500' : 'border-border-light focus:border-islamic-primary'
                        }`}
                >
                    <option value="">Pilih Program</option>
                    <option value="tahfidz">Program Tahfidz</option>
                    <option value="umum">Program Umum</option>
                    <option value="bahasa-arab">Program Bahasa Arab</option>
                </select>
                {errors.program && <p className="text-red-500 text-xs px-1">{errors.program.message}</p>}
            </div>

            <div className="pt-4 flex flex-col gap-3">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl"
                >
                    {isSubmitting ? 'Memproses...' : 'Daftar Sekarang'}
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    onClick={() => reset()}
                    className="w-full py-4 rounded-xl text-text-secondary"
                >
                    Reset
                </Button>
            </div>
        </form>
    );
}
