const { tags } = require('../models');

const listTags = async (req, res) => {
    try {
        const tagList = await tags.findAll();
        res.status(201).json({
            "message": "Berhasil mendapatkan daftar tags.",
            "data": tagList
        });
    } catch (error) {
        res.status(500).json({
            "message": "Gagal mendapatkan daftar tags!",
            "error": error
        });
        console.error(error);
    }
}

const addTag = async (req, res) => {
    try {
        const { name } = req.body;
        const tag = await tags.create({
            name: name
        });

        res.status(201).json({
            "message": "Berhasil menambahkan tag baru.",
            "data": tag
        });
    } catch (error) {
        res.status(500).json({
            "message": "Gagal menambahkan tag baru!",
            "error": error
        });
        console.error(error);
    }
}

const updateTag = async (req, res) => {
    try {
        const tag = await tags.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        res.status(201).json({
            "message": "Berhasil mengubah tag.",
            "data": tag
        });
    } catch (error) {
        res.status(500).json({
            "message": "Gagal mengubah tag!",
            "error": error
        });
        console.error(error);
    }
}

const removeTag = async (req, res) => {
    try {
        const tag = await tags.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(201).json({
            "message": "Berhasil menghapus tag.",
            "data": tag
        });
    } catch (error) {
        res.status(500).json({
            "message": "Gagal menghapus tag!",
            "error": error
        });
        console.error(error);
    }
}

const detailTag = async (req, res) => {
    try {
        const { id } = req.params;
        const tag = await tags.findByPk(id);

        res.status(201).json({
            "message": "Berhasil mendapatkan tag.",
            "data": tag
        });
    } catch (error) {
        res.status(500).json({
            "message": "Gagal mendapatkan tag!",
            "error": error
        });
        console.error(error);
    }
}

module.exports = {
    listTags,
    addTag,
    updateTag,
    removeTag,
    detailTag    
};