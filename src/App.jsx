import { useState } from "react";
import { daftarItem } from "./data.js";
import Navbar from "./components/Navbar.jsx"
import Kartu from "./components/Kartu.jsx";
import TombolFilter from "./components/TombolFilter.jsx";

function App(){
  // Kategori disimpan di App
  // Alasan: Agar dapat diakses oleh TombolFilter dan Kartu
  // Jika di salah satu, yang lain tidak bisa membacanya nanti
  const [kategori, setKategori] = useState("Semua");

  // Membuat variabel baru, yaitu datfarTampil
  // Alasan: Untuk menyimpan data pada daftarItem tanpa mengubah data aslinya  
  let daftarTampil = daftarItem;
  if (kategori !== "Semua"){
    daftarTampil = daftarItem.filter((item) => item.kategori === kategori);
  }
  
  // Percabangan Batas
  // Jika seandainya nanti toko tidak memiliki alat fotografi apa apa (alat kosong)
  let tokoKosong = null;
  if (daftarTampil.length === 0){
    tokoKosong = <p className = "text-gray-500">Belum ada alat fotografi yang cocok.</p>;
  }

  // Penting
  // Komentar dibuat menggunakan "{/* Komentar */" yaaaaaa....
  // Bukan dengan "// Komentar"
  // #IlmuBaruYGY
  return (
    <div className = "min-h-screen bg-gray-50 text-gray-900">
      <header>
        <Navbar />
      </header>

      <main className = "max-w-5xl mx-auto px-6 py-10">
        <section className = "mb-10">
          <h1 className = "text-3xl font-bold text-sky-900">Katalog Alat Fotografi</h1>
          <p className = "mt-2 text-gray-600">
            Coyy Suka Foto menyediakan beragam koleksi dan perlengkapan fotografi dari berbagai merek untuk memenuhi segala kebutuhan Anda
          </p>
        </section>

        <section id="menu">
          <h2 className = "text-2xl font-bold mb-4">Daftar Alat Fotografi</h2>

          <div className = "flex gap-2 mb-4">
            <TombolFilter teks="Semua" aktif={kategori === "Semua"} onPilih={() => setKategori("Semua")} />
            <TombolFilter teks="Kamera" aktif={kategori === "Kamera"} onPilih={() => setKategori("Kamera")} />
            <TombolFilter teks="Lensa" aktif={kategori === "Lensa"} onPilih={() => setKategori("Lensa")} />
            <TombolFilter teks="Lighting" aktif={kategori === "Lighting"} onPilih={() => setKategori("Lighting")} />
            <TombolFilter teks="Stabilizer" aktif={kategori === "Stabilizer"} onPilih={() => setKategori("Stabilizer")} />
            <TombolFilter teks="Audio" aktif={kategori === "Audio"} onPilih={() => setKategori("Audio")} />
            <TombolFilter teks="Tripod" aktif={kategori === "Tripod"} onPilih={() => setKategori("Tripod")} />
          </div>

          {/* Membuat total daftarItem yang tampil untuk setiap kategorinya */}
          {/* Alasan: Untuk mengetahui banyak produk keseluruhan dan tiap kategorinya */}
          <p className = "text-sm text-gray-500 mb-2">
            Menampilkan {daftarTampil.length} dari {daftarItem.length} alat fotografi
          </p>

          {/* Fungsinya, Menampilkan hasil percabangan toko Kosong yang dibuat diatas */}
          {tokoKosong}

          <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Menggunakan id untuk daftarTampil */}
            {/* Alasan: id tidak akan pernah berubah karena ia Primary key */}
            {/* Jadi, filter nanti tetap dapat menampilkan item sesuai kebutuhan */}
            {daftarTampil.map((item) => (
              <Kartu key = {item.id} item={item} />  
            ))}
          </div>
        </section>
      </main>

      <footer id="kontak" className="px-6 py-6 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>Jl. Puncak 2, Limau Manis, Kec. Pauh, Kota Padang, Sumatera Barat 25166</p>
        <p>Buka setiap hari pukul 07.30 sampai 16.00</p>
      </footer>
    </div>
  );
}

export default App;