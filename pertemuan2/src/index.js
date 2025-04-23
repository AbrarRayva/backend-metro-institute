// Import Express
const express = require('express');

// Setup untuk server Express
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Router
const routeWishlist = require('./routes/wishlist.route');
app.use('/wishlist', routeWishlist);

// Jalankan Express pada port yang sudah ditetapkan
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});