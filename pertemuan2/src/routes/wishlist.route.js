// Import Express & Express.Router
const express = require('express');
const router = express.Router();

// Controller
const controllerWishlist = require('../controllers/wishlist.controller');

// Router untuk wishlist
router.get('/', controllerWishlist.getWishlist);
router.get('/:id', controllerWishlist.getWishlistById);
router.post('/', controllerWishlist.addWishlist);
router.put('/:id', controllerWishlist.updateWishlist);
router.delete('/:id', controllerWishlist.deleteWishlist)

module.exports = router;