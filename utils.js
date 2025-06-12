// utils.js

// input angka
export function ValidNumber(input) {
  const num = Number(input);
  return !isNaN(num) && num > 0;
}

// Format rupiah
export function formatRupiah(amount) {
  return "Rp " + amount;
}