// Nilai IPK yang di-input
let ipk = 1.0;
let sks;

// Perhitungan SKS berdasarkan IPK
if (ipk >= 3.25 && ipk <= 4.00) {
    sks = 24;
} else if (ipk >= 2.75 && ipk <= 3.24) {
    sks = 21;
} else if (ipk >= 2.00 && ipk <= 2.74) {
    sks = 18;
} else if (ipk >= 1.50 && ipk <= 1.99) {
    sks = 15;
} else if (ipk >= 0.00 && ipk <= 1.49) {
    sks = 12;
} else {
    sks = "IPK Tidak Valid!";
}

// Tampilkan IPK dan SKS ke console
console.log("IPK:", ipk);
console.log("Jumlah max SKS yang boleh diambil:", sks);