const { item_wishlist, tags } = require('../models');

const listWishlist = async (req, res) => {
    try {
        const wishlist = await item_wishlist.findAll({
            include: [{
                model: tags,
                as: 'tag'
            }]
        });

        res.status(200).json({
            message: "Berhasil mendapatkan daftar item wishlist.",
            data: wishlist
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal mendapatkan daftar item wishlist!",
            error: error.message
        });
    }
};

const addWishlist = async (req, res) => {
    try {
        const { name, price, id_tag } = req.body;
        const newItem = await item_wishlist.create({
            name,
            price,
            id_tag
        });

        res.status(201).json({
            message: "Berhasil menambahkan item wishlist baru.",
            data: newItem
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal menambahkan item wishlist!",
            error: error.message
        });
    }
};

const updateWishlist = async (req, res) => {
    try {
        const { name, price, id_tag } = req.body;
        const updated = await item_wishlist.update(
            { name, price, id_tag },
            {
                where: { id: req.params.id }
            }
        );

        res.status(200).json({
            message: "Berhasil mengubah item wishlist.",
            data: updated
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal mengubah item wishlist!",
            error: error.message
        });
    }
};

const removeWishlist = async (req, res) => {
    try {
        const deleted = await item_wishlist.destroy({
            where: { id: req.params.id }
        });

        res.status(200).json({
            message: "Berhasil menghapus item wishlist.",
            data: deleted
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal menghapus item wishlist!",
            error: error.message
        });
    }
};

const detailWishlist = async (req, res) => {
    try {
        const item = await item_wishlist.findByPk(req.params.id, {
            include: [{
                model: tags,
                as: 'tag'
            }]
        });

        res.status(200).json({
            message: "Berhasil mendapatkan detail item wishlist.",
            data: item
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal mendapatkan detail item wishlist!",
            error: error.message
        });
    }
};

module.exports = {
    listWishlist,
    addWishlist,
    updateWishlist,
    removeWishlist,
    detailWishlist
};
