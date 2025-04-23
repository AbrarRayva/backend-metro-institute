# Tugas Pertemuan 2
**Oleh**: Muhammad Abrar Rayva

# Soal dan Jawaban Tugas
> File pada tugas ini dijalankan menggunakan `Node.js`

Buatlah Sebuah RESTful API dengan ExpressJS dan lakukan pengujian dengan Postman.  
  
**Jawaban:**  
Program yang dibuat merupakan program modul RESTful API sederhana untuk mengelola daftar wishlist.  

Daftar Request Yang Didukung Program:
| Method   | Endpoint        | Fungsi                                   | Body                        |
|----------|-----------------|------------------------------------------|-----------------------------|
| `GET`    | `/wishlist`     | Mengambil semua item wishlist            | ❌                           |
| `GET`    | `/wishlist/:id` | Mengambil item wishlist berdasarkan ID   | ❌                           |
| `POST`   | `/wishlist`     | Menambahkan item wishlist baru           | ✅ JSON: `itemName`, `price` |
| `PUT`    | `/wishlist/:id` | Memperbarui item wishlist berdasarkan ID | ✅ JSON: `itemName`, `price` |
| `DELETE` | `/wishlist/:id` | Menghapus item wishlist berdasarkan ID   | ❌                           |