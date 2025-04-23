// Daftar item Wishlist
const wishlist = [
    {
        id: 1,
        itemName: "Macbook Air M1",
        price: 13000000
    },
    {
        id: 2,
        itemName: "iPhone 15",
        price: 12000000
    },
    {
        id: 3,
        itemName: "iPad Gen-10",
        price: 6000000
    },
];

// Ambil semua item wishlist
const getWishlist = (req, res) => {
    res.json(wishlist);
};

// Ambil wishlist berdasarkan ID
const getWishlistById = (req, res) => {
    const id = req.params.id;

    const data = wishlist.find((wishlist) => wishlist.id === parseInt(id));

    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ message: `Wishlist dengan id ${id} tidak ditemukan!` })
    };
};

// Tambahkan item wishlist baru
const addWishlist = (req, res) => {
    const { itemName, price } = req.body;
    const newItem = {
        id: wishlist.length + 1,
        itemName, price
    };

    wishlist.push(newItem);
    res.status(201).json(newItem);
};

// Update item wishlist
const updateWishlist = (req, res) => {
    const id = parseInt(req.params.id);
    const { itemName, price } = req.body;

    const wishlistIndex = wishlist.findIndex((item => item.id === id));

    if (wishlistIndex !== -1) {
        wishlist[wishlistIndex] = {
            ...wishlist[wishlistIndex],
            itemName, price
        };

        res.json({
            status: 200,
            message: `Item dengan ID ${id} berhasil diperbarui!`,
            data: wishlist[wishlistIndex]
        });
    } else {
        res.status(404).json({ message: `Wishlist dengan id ${id} tidak ditemukan!` });
    };
};

// Delete item wishlist
const deleteWishlist = (req, res) => {
    const id = parseInt(req.params.id);
    const wishlistIndex = wishlist.findIndex((item => item.id === id));

    if (wishlistIndex !== -1) {
        const deletedItem = wishlist[wishlistIndex];
        wishlist.splice(wishlistIndex, 1);

        res.json({
            status: 200,
            message: `Item dengan ID ${id} berhasil dihapus!`,
            data: deletedItem
        });
    } else {
        res.status(404).json({ message: `Wishlist dengan id ${id} tidak ditemukan!` });
    };
};

module.exports = {
    getWishlist,
    getWishlistById,
    addWishlist,
    updateWishlist,
    deleteWishlist
}