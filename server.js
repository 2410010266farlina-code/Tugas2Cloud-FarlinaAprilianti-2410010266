const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Halo, Tugas 2 Cloud Berhasil Dijalankan di Docker!</h1><p>Nama: Farlina APrilianti<br>NPM: 2410010266</p>');
});

app.listen(PORT, () => {
    console.log(`Aplikasi berjalan di http://localhost:${PORT}`);
});