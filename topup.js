// topup.js

import { formatRupiah } from './utils.js';

const paketDiamond = [
    { id: 1, jumlah: 50 , harga: 10000 },
    { id: 2, jumlah: 100, harga: 18000 },
    { id: 3, jumlah: 250, harga: 42000 },
];

// Menampilkan semua paket
export function tampilkanPaket() {
    console.log("📦 Pilih Paket Diamond:");
    paketDiamond.forEach(paket => {
        console.log(`${paket.id} ${paket.jumlah} Diamond - ${formatRupiah(paket.harga)}`);
    });
}

// Mengambil data paket berdasarkan pilihan
export function getPaketById(id) {
    return paketDiamond.find(paket => paket.id === id);
}

// Proses top-up
export function prosesTopup(paket, nama, nomorId) {
    console.log(`\n✅ Transaksi Berhasil!`);
    console.log(`👤 Akun: ${nama}`);
    console.log(`🆔 ID: ${nomorId}`);
    console.log(`💎 Diamond: ${paket.jumlah}`);
    console.log(`💰 Harga: ${formatRupiah(paket.harga)}\n`);
}
