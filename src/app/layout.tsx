import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Amiri, Scheherazade_New } from "next/font/google";
import "./globals.css";
import RegistrationModal from "@/components/layout/RegistrationModal";
import { Analytics } from "@vercel/analytics/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
});

const scheherazade = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "DQ Kebon Baru",
  description: "Mendidik generasi Qur'ani yang berakhlak mulia dan berwawasan luas. Lembaga pendidikan Islam terpadu dengan fokus Tahfidz dan Akhlak.",
  keywords: ["pesantren", "tahfidz al-qur'an", "pendidikan islam", "dar al-qur'an", "sekolah islam"],
  openGraph: {
    title: "DQ Kebon Baru",
    description: "Mencetak generasi Qur'ani yang berwawasan luas.",
    type: "website",
    locale: "id_ID",
    url: "https://daralquran.id", // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${plusJakartaSans.variable} ${amiri.variable} ${scheherazade.variable} antialiased`}
      >
        {children}
        <RegistrationModal />
        <Analytics />
      </body>
    </html>
  );
}

