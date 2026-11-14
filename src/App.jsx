import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx"
import Kartu from "./components/Kartu.jsx";
import TombolFilter from "./components/TombolFilter.jsx";

function App(){
  // Data sekarang disimpan pada server lokal, pada lalu disimpan di state
  // Alasan: Isinya berubah saat fetch selesai, dan React harus membuat ulang halaman
  const [daftarItem, setDaftarItem] = useState([]);
  const [status, setStatus] = useState("memuat");
  const [kategori, setKategori] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");

  useEffect (() => {
    async function ambilItem() {
      try {
        const respon = await fetch ("/fotografi.json");
        // respon.ok diperiksa terlebih dahulu
        // Alasan: tanpa ini halaman HTML akan mengira error sebagai data
        if (!respon.ok) {
          throw new Error("Server menjawab " + respon.status);
        }

        const data = await respon.json();
        setDaftarItem(data);
        setStatus("berhasil");
      }
      catch {
        setStatus("gagal");
      }
    }
    ambilItem();
    // [] fungsi: data hanya diambil sekali saat halaman pertama kali tampil
    // bukan setiap App digambar ulang
  }, []);

  // Membuat variabel baru, yaitu datfarTampil
  // Alasan: Untuk menyimpan data pada daftarItem tanpa mengubah data aslinya  
  let daftarTampil = daftarItem;
  if (kategori !== "Semua"){
    daftarTampil = daftarTampil.filter((item) => item.kategori === kategori);
  }
  
  if (kataKunci !== "") {
    // Menggunakan toLowerCase
    // Alasan: agar item dapat ditemukan walaupun berbeda tipe huruf
    // kAmera = KAMera= KAMERA = kamera = Kamera = kamerA = (dst)
    daftarTampil = daftarTampil.filter((item) =>
      item.nama.toLowerCase().includes(kataKunci.toLowerCase())
    );
  }

  let teksJumlah = null;
  if (status === "berhasil") {
    teksJumlah = (
      <p className = "text-sm text-gray-500 mb-2">
        Menampilkan {daftarTampil.length} dari {daftarItem.length} alat fotografi
      </p>
    );
  }

  let isi;
  if (status === "memuat") {
    isi = <p className = "text-gray-500">Memuat alat fotografi...</p>;
  } else if (status === "gagal") {
    isi = <p className = "text-rose-700">Alat gagal dimuat. Coba muat ulang halaman.</p>;
  } else if (daftarTampil.length === 0) {
    // Percabangan Batas
    // Jika seandainya nanti toko tidak memiliki alat fotografi apa apa (alat kosong)
    isi = <p className = "text-gray-500">Belum ada alat fotografi yang cocok.</p>;
  } else {
    isi = (
      <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {daftarTampil.map((item) => (
          <Kartu key = {item.id} item = {item} />
        ))}
      </div>
    );
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

        <section id = "menu">
          <h2 className = "text-2xl font-bold mb-4">Daftar Alat Fotografi</h2>

          <input 
            type = "text"
            value = {kataKunci}
            onChange = {(e) => setKataKunci(e.target.value)}
            placeholder = "Cari Alat Fotografi..."
            className = "w-full md:w-80 mb-4 px-4 py-2 border border-gray-300 rounded-lg"
            />

            <div className = "flex flex-wrap gap-2 mb-4">
              <TombolFilter teks = "Semua" aktif = {kategori === "Semua"} onPilih = {() =>
                setKategori("Semua")} />
              <TombolFilter teks = "Kamera" aktif = {kategori === "Kamera"} onPilih = {() =>
                setKategori("Kamera")} />
              <TombolFilter teks = "Lensa" aktif = {kategori === "Lensa"} onPilih = {() =>
                setKategori("Lensa")} />
              <TombolFilter teks = "Lighting" aktif = {kategori === "Lighting"} onPilih = {() =>
                setKategori("Lighting")} />
              <TombolFilter teks = "Stabilizer" aktif = {kategori === "Stabilizer"} onPilih = {() =>
                setKategori("Stabilizer")} />
              <TombolFilter teks = "Audio" aktif = {kategori === "Audio"} onPilih = {() =>
                setKategori("Audio")} />
              <TombolFilter teks = "Tripod" aktif = {kategori === "Tripod"} onPilih = {() =>
                setKategori("Tripod")} />
            </div>

            {teksJumlah}
            {isi}
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