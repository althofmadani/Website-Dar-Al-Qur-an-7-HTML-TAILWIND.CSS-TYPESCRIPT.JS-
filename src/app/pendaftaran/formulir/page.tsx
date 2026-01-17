"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useState, useRef } from "react";
import { Icons } from "@/components/shared/Icons";

export default function FormulirPage() {
    const [formData, setFormData] = useState({
        namaLengkap: "",
        jenisKelamin: "",
        tempatLahir: "",
        tanggalLahir: "",
        alamat: "",
        noHp: "",
        email: "",
        namaAyah: "",
        pekerjaanAyah: "",
        namaIbu: "",
        pekerjaanIbu: "",
        program: "",
        kelas: "",
        asalSekolah: "",
    });

    const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>({
        kk: null,
        akta: null,
        raport: null,
        foto: null,
    });

    const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({
        kk: null,
        akta: null,
        raport: null,
        foto: null,
    });

    const handleFileChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setUploadedFiles(prev => ({ ...prev, [key]: file }));
    };

    const handleUploadClick = (key: string) => {
        fileInputRefs.current[key]?.click();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Formulir pendaftaran akan segera tersedia!");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-12">
                <section className="bg-surface-secondary py-20 border-b border-border-light">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h1 className="text-5xl font-extrabold mb-6 text-black tracking-tight">Formulir Pendaftaran</h1>
                            <p className="text-xl text-text-secondary leading-relaxed">
                                Isi formulir di bawah ini untuk mendaftar sebagai santri baru di Pondok Pesantren Dar Al-Qur'an.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Data Santri */}
                            <div className="bg-surface-secondary rounded-[24px] p-8 border border-border-light">
                                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-islamic-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                                    Data Santri
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            placeholder="Nama lengkap"
                                            value={formData.namaLengkap}
                                            onChange={(e) => setFormData({...formData, namaLengkap: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Jenis Kelamin</label>
                                        <select
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            value={formData.jenisKelamin}
                                            onChange={(e) => setFormData({...formData, jenisKelamin: e.target.value})}
                                        >
                                            <option value="">Pilih</option>
                                            <option value="laki">Laki-laki</option>
                                            <option value="perempuan">Perempuan</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Tempat Lahir</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            placeholder="Tempat lahir"
                                            value={formData.tempatLahir}
                                            onChange={(e) => setFormData({...formData, tempatLahir: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Tanggal Lahir</label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            value={formData.tanggalLahir}
                                            onChange={(e) => setFormData({...formData, tanggalLahir: e.target.value})}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-black mb-2">Alamat Lengkap</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            rows={3}
                                            placeholder="Alamat lengkap"
                                            value={formData.alamat}
                                            onChange={(e) => setFormData({...formData, alamat: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">No. HP</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            placeholder="0812xxxxx"
                                            value={formData.noHp}
                                            onChange={(e) => setFormData({...formData, noHp: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            placeholder="email@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Data Orang Tua */}
                            <div className="bg-surface-secondary rounded-[24px] p-8 border border-border-light">
                                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-islamic-secondary text-white rounded-full flex items-center justify-center text-sm">2</span>
                                    Data Orang Tua / Wali
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Nama Ayah</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            placeholder="Nama ayah"
                                            value={formData.namaAyah}
                                            onChange={(e) => setFormData({...formData, namaAyah: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Pekerjaan Ayah</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            placeholder="Pekerjaan"
                                            value={formData.pekerjaanAyah}
                                            onChange={(e) => setFormData({...formData, pekerjaanAyah: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Nama Ibu</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            placeholder="Nama ibu"
                                            value={formData.namaIbu}
                                            onChange={(e) => setFormData({...formData, namaIbu: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Pekerjaan Ibu</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            placeholder="Pekerjaan"
                                            value={formData.pekerjaanIbu}
                                            onChange={(e) => setFormData({...formData, pekerjaanIbu: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Pilihan Program */}
                            <div className="bg-surface-secondary rounded-[24px] p-8 border border-border-light">
                                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-accent-primary text-white rounded-full flex items-center justify-center text-sm">3</span>
                                    Pilihan Program
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Program</label>
                                        <select
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            value={formData.program}
                                            onChange={(e) => setFormData({...formData, program: e.target.value})}
                                        >
                                            <option value="">Pilih Program</option>
                                            <option value="tahsin">Program Tahsin</option>
                                            <option value="tahfidz">Program Tahfidz</option>
                                            <option value="madrasah-sd">Madrasah SD</option>
                                            <option value="madrasah-smp">Madrasah SMP</option>
                                            <option value="madrasah-sma">Madrasah SMA</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-black mb-2">Kelas (Untuk Madrasah)</label>
                                        <select
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            value={formData.kelas}
                                            onChange={(e) => setFormData({...formData, kelas: e.target.value})}
                                        >
                                            <option value="">Pilih Kelas</option>
                                            <option value="1">Kelas 1</option>
                                            <option value="2">Kelas 2</option>
                                            <option value="3">Kelas 3</option>
                                            <option value="4">Kelas 4</option>
                                            <option value="5">Kelas 5</option>
                                            <option value="6">Kelas 6</option>
                                            <option value="7">Kelas 7</option>
                                            <option value="8">Kelas 8</option>
                                            <option value="9">Kelas 9</option>
                                            <option value="10">Kelas 10</option>
                                            <option value="11">Kelas 11</option>
                                            <option value="12">Kelas 12</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-bold text-black mb-2">Asal Sekolah</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-[12px] border border-border-light bg-white focus:outline-none focus:ring-2 focus:ring-islamic-primary/20"
                                            placeholder="Nama sekolah asal"
                                            value={formData.asalSekolah}
                                            onChange={(e) => setFormData({...formData, asalSekolah: e.target.value})}
                                        />
                            </div>
                            </div>
                            </div>

                            {/* Dokumen yang Diperlukan - Step 4 */}
                            <div className="bg-surface-secondary rounded-[24px] p-8 border border-border-light">
                                <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-islamic-primary text-white rounded-full flex items-center justify-center text-sm">4</span>
                                    Upload Dokumen
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {/* KK Upload */}
                                    <div>
                                        <input
                                            ref={(el) => { fileInputRefs.current.kk = el }}
                                            type="file"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            className="hidden"
                                            onChange={(e) => handleFileChange('kk', e)}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleUploadClick('kk')}
                                            className={`w-full p-6 rounded-[20px] border-2 border-dashed transition-all text-center ${
                                                uploadedFiles.kk
                                                    ? 'border-islamic-primary bg-islamic-primary/5'
                                                    : 'border-border-light bg-white hover:border-islamic-primary/50'
                                            }`}
                                        >
                                            <div className={`mb-3 ${uploadedFiles.kk ? 'text-islamic-primary' : 'text-text-secondary'}`}>
                                                <Icons.FileText size={40} />
                                            </div>
                                            <p className="text-lg font-bold text-islamic-primary mb-2">Kartu Keluarga</p>
                                            <p className={`font-medium text-sm mb-2 ${uploadedFiles.kk ? 'text-islamic-primary' : 'text-black'}`}>
                                                {uploadedFiles.kk ? uploadedFiles.kk.name : 'Klik untuk Upload'}
                                            </p>
                                            {uploadedFiles.kk && (
                                                <p className="text-xs text-islamic-primary font-medium">✓ Terupload</p>
                                            )}
                                        </button>
                                    </div>

                                    {/* Akta Upload */}
                                    <div>
                                        <input
                                            ref={(el) => { fileInputRefs.current.akta = el }}
                                            type="file"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            className="hidden"
                                            onChange={(e) => handleFileChange('akta', e)}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleUploadClick('akta')}
                                            className={`w-full p-6 rounded-[20px] border-2 border-dashed transition-all text-center ${
                                                uploadedFiles.akta
                                                    ? 'border-islamic-primary bg-islamic-primary/5'
                                                    : 'border-border-light bg-white hover:border-islamic-primary/50'
                                            }`}
                                        >
                                            <div className={`mb-3 ${uploadedFiles.akta ? 'text-islamic-primary' : 'text-text-secondary'}`}>
                                                <Icons.FileText size={40} />
                                            </div>
                                            <p className="text-lg font-bold text-islamic-primary mb-2">Akta Kelahiran</p>
                                            <p className={`font-medium text-sm mb-2 ${uploadedFiles.akta ? 'text-islamic-primary' : 'text-black'}`}>
                                                {uploadedFiles.akta ? uploadedFiles.akta.name : 'Klik untuk Upload'}
                                            </p>
                                            {uploadedFiles.akta && (
                                                <p className="text-xs text-islamic-primary font-medium">✓ Terupload</p>
                                            )}
                                        </button>
                                    </div>

                                    {/* Raport Upload */}
                                    <div>
                                        <input
                                            ref={(el) => { fileInputRefs.current.raport = el }}
                                            type="file"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            className="hidden"
                                            onChange={(e) => handleFileChange('raport', e)}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleUploadClick('raport')}
                                            className={`w-full p-6 rounded-[20px] border-2 border-dashed transition-all text-center ${
                                                uploadedFiles.raport
                                                    ? 'border-islamic-primary bg-islamic-primary/5'
                                                    : 'border-border-light bg-white hover:border-islamic-primary/50'
                                            }`}
                                        >
                                            <div className={`mb-3 ${uploadedFiles.raport ? 'text-islamic-primary' : 'text-text-secondary'}`}>
                                                <Icons.FileText size={40} />
                                            </div>
                                            <p className="text-lg font-bold text-islamic-primary mb-2">Raport Terakhir</p>
                                            <p className={`font-medium text-sm mb-2 ${uploadedFiles.raport ? 'text-islamic-primary' : 'text-black'}`}>
                                                {uploadedFiles.raport ? uploadedFiles.raport.name : 'Klik untuk Upload'}
                                            </p>
                                            {uploadedFiles.raport && (
                                                <p className="text-xs text-islamic-primary font-medium">✓ Terupload</p>
                                            )}
                                        </button>
                                    </div>

                                    {/* Foto Upload */}
                                    <div>
                                        <input
                                            ref={(el) => { fileInputRefs.current.foto = el }}
                                            type="file"
                                            accept=".jpg,.jpeg,.png"
                                            className="hidden"
                                            onChange={(e) => handleFileChange('foto', e)}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleUploadClick('foto')}
                                            className={`w-full p-6 rounded-[20px] border-2 border-dashed transition-all text-center ${
                                                uploadedFiles.foto
                                                    ? 'border-islamic-primary bg-islamic-primary/5'
                                                    : 'border-border-light bg-white hover:border-islamic-primary/50'
                                            }`}
                                        >
                                            <div className={`mb-3 ${uploadedFiles.foto ? 'text-islamic-primary' : 'text-text-secondary'}`}>
                                                <Icons.Image size={40} />
                                            </div>
                                            <p className="text-lg font-bold text-islamic-primary mb-2">Foto 3x4</p>
                                            <p className={`font-medium text-sm mb-2 ${uploadedFiles.foto ? 'text-islamic-primary' : 'text-black'}`}>
                                                {uploadedFiles.foto ? uploadedFiles.foto.name : 'Klik untuk Upload'}
                                            </p>
                                            {uploadedFiles.foto && (
                                                <p className="text-xs text-islamic-primary font-medium">✓ Terupload</p>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-islamic-primary text-white py-4 rounded-[20px] font-bold text-lg hover:bg-opacity-90 transition-colors"
                            >
                                Kirim Formulir
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

