// Variable array
let angka = [1, 1, 2, 3, 5, 22, 9];

// Function untuk menghitung total angka pada array
function hitungTotalArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

console.log(`Array: ${angka}`);
console.log(`Jumlah angka dalam array: ${hitungTotalArray(angka)}`);
