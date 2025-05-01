// Import Express
const express = require('express');

// Setup untuk server Express
const router = require('./routes/index');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/api', router);

// Jalankan Express pada port yang sudah ditetapkan
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});