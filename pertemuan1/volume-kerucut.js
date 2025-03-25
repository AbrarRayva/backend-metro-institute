// Fungsi untuk menghitung volume kerucut
function hitungVolumeKerucut(jariJari, tinggi) {
    return (1/3) * Math.PI * jariJari * jariJari * tinggi;
}

// Nilai jari-jari dan tinggi kerucut
const jari = 7;
const tinggi = 15;

const volume = hitungVolumeKerucut(jari, tinggi);

// Output volume kerucut
console.log(`Volume kerucut dengan jari-jari ${jari} cm dan tinggi ${tinggi} cm`)
console.log(`${volume} cm`)
