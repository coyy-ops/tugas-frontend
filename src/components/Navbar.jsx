// Pemisahan Navbar dengan App
// Hal ini dilakukan selain untuk memperpendek App
// Dilakukan agar dapat mendeteksi masalah secara terpisah
// Sehingga dapat langsung ditemukan dan diperbaiki tanpa mengganggu file lain

function Navbar() {
    return (
        <nav className = "flex items-center justify-between px-6 py-4 bg-sky-500 text-white">
            <a href = "#" className = "text-xl font-bold">Coyy Suka Foto</a>
            <div className = "flex gap-4 text-sm">
                <a href = "#menu">Menu</a>
                <a href = "#kontak">Kontak</a>
            </div>
        </nav>
    );
}

export default Navbar;