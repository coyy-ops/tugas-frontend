# Katalog Alat Fotografi

Kelas Frontend Web Development
Metro Institute Season 2

## Tentang saya

- **Nama:** Ammar Qussoyyi Akmal
- **GitHub:** [coyy-ops](https://github.com/coyy-ops)

## Tema

**Katalog Alat Fotografi** adalah halaman katalog yang melayani persewaan perlengkapan fotografi dengan nama toko, yaitu **Coyy Suka Foto**. Halaman menampilkan daftar alat yang bisa disewa, mulai dari kamera, lensa, lighting, stabilizer, audio, sampai tripod. Selain itu, halaman juga menampilkan keterangan dari alat-alat fotografi yang ada, seperti tarif sewa dan status ketersediaan alat tersebut.

## Teknologi

- [React](https://react.dev/): membangun tampilan dari komponen
- [Vite](https://vite.dev/): menjalankan dan membangun proyek
- [Tailwind CSS](https://tailwindcss.com/): styling, dipasang lewat `@tailwindcss/vite`

## Struktur proyek

```
src/
├── main.jsx                  titik masuk, menempelkan App ke halaman
├── App.jsx                   komponen utama, menyimpan state kategori
├── data.js                   data alat fotografi (daftarItem)
├── index.css                 mengimpor Tailwind
└── components/
    ├── Navbar.jsx            navigasi bagian atas
    ├── Kartu.jsx             satu kartu alat fotografi
    └── TombolFilter.jsx      tombol filter kategori
```

## Cara menjalankan

Pastikan [Node.js](https://nodejs.org/) sudah terpasang, minimal versi 20.19 atau 22.12. Cek dengan `node -v`.

1. Pasang sekali semua paket:

   ```bash
   npm.cmd install
   ```

2. Jalankan server pengembangan:

   ```bash
   npm.cmd run dev
   ```

3. Buka alamat yang muncul di terminal, biasanya <http://localhost:5173>.

Untuk menghentikan server, tekan `Ctrl + C` di terminal.

### Membangun untuk produksi (opsional)

```bash
npm.cmd run build
```

Hasilnya ada di folder `dist`.