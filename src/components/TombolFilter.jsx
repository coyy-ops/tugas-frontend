// File ini hanya berfungsi untuk menampilkan teks tombol, kondisi tombol, dan aksi untuk melapor ke App
function TombolFilter({ teks, aktif, onPilih }) {
    let warna = "bg-white border border-gray-300";
    if (aktif) {
        warna = "bg-sky-500 text-white";
    }

    return (
        <button onClick = {onPilih} className = {`px-4 py-2 rounded-lg ${warna}`}>
            {teks}
        </button>
    );
}

export default TombolFilter;