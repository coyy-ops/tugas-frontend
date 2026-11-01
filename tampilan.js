// Pengambilan wadah Kartu hanya diambil sekali
// Hal ini dilakukan agar setiap pemfilteran dilakukan, ia tidak mengulang pekerjaan yang sama
const wadahKartu = document.querySelector("#daftar-kartu");

// Fungsi untuk membuat Kartu Item
// Fungsi ini dipisah dengan menampilkan kartu agar membuat kartu cukup ditulis satu kali saja
function buatKartu(item){
    // chipStatus untuk menentukan ketersediaan Alat Fotografi
    // Disini dilakukan pemisahan warna hijau dan merah, gunanya untuk memisahkan alat yang tersedia dan tidak tersedia
    let chipStatus = "";
    if (item.tersedia === false) {
        chipStatus = `<p class="mt-1 w-fit rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-700">Sedang Disewa</p>`;
    } else {
        chipStatus = `<p class="mt-1 w-fit rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">Tersedia</p>`;
    }
    // Penggunaan backtick (`)
    // Fungsinya untuk mengisi data berbentuk ${...}
    // Alasan penggunaan backtick adalah agar bisa menampilkan isi data sesuai nilai aslinya
    return `
    <article class="flex flex-col gap-1 p-5 bg-white border border-gray-200 rounded-lg">
        <h3 class="text-lg font-semibold">${item.nama}</h3>
        <p class="text-sm text-gray-500">${item.kategori}</p>
        ${chipStatus}
        <p class="mt-2 font-bold text-sky-700">Rp${item.tarifSewa.toLocaleString("id-ID")}</p>
    </article>
    `;
}

// Fungsi untuk menampilkan Kartu
function tampilkan(daftar) {
    // Membuat kasus tepi, ibarat..
    // Jika nanti daftarnya kosong, maka akan tampil atau dijalankan kode yang dibuat disini
    if (daftar.length === 0) {
        wadahKartu.innerHTML = `<p class="text-gray-500">Belum ada alat fotografi yang cocok</p>`;
        return;
    }
    // Dengan .map, maka
    // Kita bisa membuat Daftar Item menjadi Kartu Item sesuai jumlah itemnya
    // Dengan .join, maka
    // Seluruh Array Teks bergabung menjadi Satu Teks tanpa pemisah tanda koma antar kartunya
    const semuaKartu = daftar.map((item) => buatKartu(item));
    wadahKartu.innerHTML = semuaKartu.join("");
}

// Tampilan Awal saat membuka website
// Seluruh alat ditampilkan
// Fungsinya agar website tidak kosong
tampilkan(daftarItem);

// Seluruh pem-filter-an item pada Button Filter
// .filter berfungsi untuk membuat array baru yang tidak mengubah daftar Item yang asli
document.querySelector("#tombol-semua").addEventListener("click", () => {
    tampilkan(daftarItem);
});
document.querySelector("#tombol-kamera").addEventListener("click", () => {
    tampilkan(daftarItem.filter((item) => item.kategori === "Kamera"))
});
document.querySelector("#tombol-lensa").addEventListener("click", () => {
    tampilkan(daftarItem.filter((item) => item.kategori === "Lensa"))
});
document.querySelector("#tombol-lighting").addEventListener("click", () => {
    tampilkan(daftarItem.filter((item) => item.kategori === "Lighting"))
});
document.querySelector("#tombol-stabilizer").addEventListener("click", () => {
    tampilkan(daftarItem.filter((item) => item.kategori === "Stabilizer"))
});
document.querySelector("#tombol-audio").addEventListener("click", () => {
    tampilkan(daftarItem.filter((item) => item.kategori === "Audio"))
});
document.querySelector("#tombol-tripod").addEventListener("click", () => {
    tampilkan(daftarItem.filter((item) => item.kategori === "Tripod"))
});