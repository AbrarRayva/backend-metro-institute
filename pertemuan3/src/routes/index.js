const express = require('express');
const router = express.Router();
const tagsController = require('../controllers/tags.controller');
const wishlistController = require('../controllers/wishlist.controller');

router.get('/tag', tagsController.listTags);
router.post('/tag', tagsController.addTag);
router.put('/tag/:id', tagsController.updateTag);
router.delete('/tag/:id', tagsController.removeTag);
router.get('/tag/:id', tagsController.detailTag);


router.get('/wishlist', wishlistController.listWishlist);
router.post('/wishlist', wishlistController.addWishlist);
router.put('/wishlist/:id', wishlistController.updateWishlist);
router.delete('/wishlist/:id', wishlistController.removeWishlist);
router.get('/wishlist/:id', wishlistController.detailWishlist);

module.exports = router;