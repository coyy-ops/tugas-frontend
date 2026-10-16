// TODO: ganti isi array ini dengan data TEMA KALIAN SENDIRI.
// Aturan (lihat soal.md):
//   - minimal 6 item
//   - tiap item WAJIB punya: id (angka, tidak kembar), nama (teks), kategori (teks)
//   - plus SATU properti angka (mis. harga, halaman, rating)
//   - plus SATU properti true/false (mis. tersedia, buka, dipinjam)
//   - minimal 2 kategori berbeda, dan minimal 1 item yang bernilai false

// Tema saya: Katalog Alat Fotografi.
const daftarItem = [
  { id: 1 , nama: "Sony Alpha a7 IV"           , kategori: "Kamera"    , tarifSewa: 350000, tersedia: true  },
  { id: 2 , nama: "Fujifilm X-T5"              , kategori: "Kamera"    , tarifSewa: 300000, tersedia: true  },
  { id: 3 , nama: "Canon EOS 90D"              , kategori: "Kamera"    , tarifSewa: 200000, tersedia: true  },
  { id: 4 , nama: "Lensa Sigma 24-70mm f/2.8"  , kategori: "Lensa"     , tarifSewa: 150000, tersedia: false },
  { id: 5 , nama: "Lensa Sony 50mm f/1.8"      , kategori: "Lensa"     , tarifSewa: 80000 , tersedia: true  },
  { id: 6 , nama: "Godox SL60W LED Video Light", kategori: "Lighting"  , tarifSewa: 110000, tersedia: true  },
  { id: 7 , nama: "Aputure Amaran 200d"        , kategori: "Lighting"  , tarifSewa: 175000, tersedia: false },
  { id: 8 , nama: "DJI Ronin SC Gimbal"        , kategori: "Stabilizer", tarifSewa: 120000, tersedia: false },
  { id: 9 , nama: "Rode Wireless GO II"        , kategori: "Audio"     , tarifSewa: 90000 , tersedia: true  },
  { id: 10, nama: "Tripod Benro KH25N"         , kategori: "Tripod"    , tarifSewa: 60000 , tersedia: true  }
];
