// main.js

import { ValidNumber } from './utils.js';
import { tampilkanPaket, getPaketById, prosesTopup } from './topup.js';

try {
    // Input nomor ID
    const nomorId = prompt("Masukkan ID Akun Mobile Legends Anda: ");
    if (!ValidNumber(nomorId) || nomorId.length < 5 || nomorId.length > 6) {
        throw new Error("ID tidak valid. Harus berupa angka minimal 5 dan maksimal 6 digit.");
    } 

    // Tampilkan dan pilih paket
    tampilkanPaket();
    const pilihan = parseInt(prompt("Pilih paket (1/2/3): "));
    const paketTerpilih = getPaketById(pilihan);

    if (!paketTerpilih) {
        throw new Error("Pilihan paket tidak tersedia. Masukkan angka 1, 2, atau 3.");
    }

    // Input nama akun
    const namaAkun = prompt("Masukkan Nama Akun Anda: ");
    if (namaAkun.trim() === "") {
        throw new Error("Nama akun tidak boleh kosong.");
    }

    // Proses topup
    prosesTopup(paketTerpilih, namaAkun, nomorId);

} catch (err) {
    console.log(err.message);
}