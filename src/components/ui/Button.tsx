"use client";

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const variants = {
            primary: 'bg-islamic-primary text-white hover:bg-islamic-secondary shadow-soft hover:shadow-elevated',
            secondary: 'bg-white/10 text-text-secondary backdrop-blur-md border border-white/30 hover:bg-white/20',
            ghost: 'bg-transparent hover:bg-black/5 text-text-secondary',
            outline: 'bg-transparent border border-islamic-primary text-islamic-primary hover:bg-islamic-primary hover:text-white',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-6 py-3 text-base font-bold',
            lg: 'px-8 py-4 text-lg font-bold',
            icon: 'p-2 rounded-full w-10 h-10 flex items-center justify-center',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-xl transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
