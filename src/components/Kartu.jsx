// Membuat kartu dengan template seperti Tugas 2
// Jadi hanya perlu meng-import Daftar Item

function Kartu ({ item }) {
    // Kondisi null
    // Untuk mencegah error dan sebagai kondisi batas
    let label = (
        <p className = "mt-1 w-fit rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
            Tersedia
        </p>
    );

    if (item.tersedia === false) {
        label = (
            <p className = "mt-1 w-fit rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-700">
                Sedang Disewa
            </p>
        );
    }

    return (
        <article className = "flex flex-col gap-1 p-5 bg-white border border-gray-200 rounded-lg">
            <h3 className = "text-lg font-semibold">{item.nama}</h3>
            <p className = "text-sm text-gray-500">{item.kategori}</p>
            {label}
            <p className = "mt-2 font-bold text-sky-700">Rp{item.tarifSewa.toLocaleString("id-ID")}</p>
        </article>
    );
}

export default Kartu;