// Tugas 1A — Data & Logika
// ATURAN: untuk TIAP fungsi, tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.
// Pakai for...of + if. JANGAN pakai .map / .filter / .find / .reduce dulu (lihat soal.md).

console.table(daftarItem);

// ─────────────────────────────────────────────
// FUNGSI 1 — hitungTersedia(daftar)
// Berapa banyak item yang properti true/false-nya bernilai true?
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI
// LANGKAH 2 — CONTOH (termasuk kasus tepi)
// LANGKAH 3 — LANGKAH (pseudocode)
// LANGKAH 4 — TERJEMAHKAN

// Fungsi 1 : Menghitung Alat Fotografi yang Tersedia.
// Langkah-langkah:
// 1. Mulai variabel penghitung jumlah dari 0
// 2. Gunakan perulangan for untuk mengecek seluruh item di daftarItem
// 3. Cek item dengan kode "item.tersedia". Nilai true = +1 jumlah dan nilai false = +0 jumlah
// 4. Nilai jumlah dikembalikan

function hitungSiapSewa(daftar) {
  let jumlah = 0;
  for (const item of daftar) {
    if (item.tersedia === true) {
      jumlah++;
    }
  }
  return jumlah;
}

// ─────────────────────────────────────────────
// FUNGSI 2 — cariBerdasarkanId(daftar, id)
// Kembalikan item yang id-nya cocok. Kalau tidak ada, kembalikan null.
// ─────────────────────────────────────────────

// Fungsi 2 : Mencari Alat Fotografi berdasarkan ID item pada daftarItem
// Langkah-langkah:
// 1. Melakukan perulangan kepada seluruh item pada daftarItem
// 2. Menyamakan id yang dicari dengan id yang cocok dengan item pada daftarItem
// 3. Jika ada, maka item dikembalikan. Jika tidak ada, maka nilai null dikembalikan

function cariBerdasarkanId(daftar, id) {
  for (const item of daftar) {
    if (item.id === id) {
      return item;
    }
  }
  return null;
}

// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────

// Fungsi 3 : Menyortir Alat Fotografi berdasarkan Kategorinya
// Langkah-langkah:
// 1. Buat sebuah array kosong untuk menampung item dari daftarItem
// 2. Melakukan perulangan kepada seluruh item pada daftarItem
// 3. Mengecek item pada daftarItem cocok dengan kategori yang dicari
// 4. Jika cocok, item dimasukkan kedalam array.
// 5. Mengembalikan nilai array

function saringKategori(daftar, kategori) {
  let hasil = [];
  for (const item of daftar) {
    if (item.kategori === kategori) {
      hasil.push(item);
    }
  }
  return hasil;
}

// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────

// Fungsi 4 : Menghitung rata-rata total tarif untuk Alat Fotografi yang Tersedia
// Langkah-langkah:
// 1. Inisialisasi dua variabel baru untuk menampung Total Tarif dan Jumlah Item
// 2. Melakukan perulangan for untuk mengecek ketersediaan item di daftarItem
// 3. Jika item tersedia (true), maka harga sewa akan dimasukkan ke variabel Total Tarif dan Jumlah Item ditambah 1
// 4. Membuat logika seandainya tidak ada item yang tersedia dengan mengembalikan nilai Null
// 5. Menghitung rata-rata tarif total

function rataRataSiapSewa(daftar) {
  let totalTarif = 0;
  let jumlahItem = 0;
  for (const item of daftar) {
    if (item.tersedia === true) {
      totalTarif += item.tarifSewa;
      jumlahItem++;
    }
  }

  if (jumlahItem === 0) {
    return null;
  }
  return totalTarif / jumlahItem;
}

// ─────────────────────────────────────────────
// UJI — minimal 2 panggilan per fungsi: satu kasus normal, satu kasus tepi
// ─────────────────────────────────────────────

console.log("--- UJI FUNGSI 1 ---");
console.log("Alat fotografi yang tersedia: ", hitungSiapSewa(daftarItem)); 
console.log("Alat fotografi yang tersedia (tanpa array fungsi): ", hitungSiapSewa([]));             

console.log("--- UJI FUNGSI 2 ---");
console.log("Item ketiga pada Daftar Item: ", cariBerdasarkanId(daftarItem, 3));     
console.log("Item ke-99 pada Daftar Item: ", cariBerdasarkanId(daftarItem, 99)); 

console.log("--- UJI FUNGSI 3 ---");
console.log("Alat fotografi bertipe 'Lighting': ", saringKategori(daftarItem, "Lighting")); 
console.log("Alat fotografi bertipe 'Drone': ", saringKategori(daftarItem, "Drone"));     

console.log("--- UJI FUNGSI 4 ---");
console.log("Rata-rata tarif Alat Fotografi yang Tersedia: ", rataRataSiapSewa(daftarItem)); 
console.log("Rata-rata tarif Alat Fotografi yang Tersedia (tanpa array fungsi): ", rataRataSiapSewa([])); 