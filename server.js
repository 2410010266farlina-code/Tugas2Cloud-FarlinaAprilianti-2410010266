const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    // Mengambil waktu dan tanggal saat ini sesuai zona waktu lokal komputer
    const waktuSekarang = new Date().toLocaleString('id-ID', {
        dateStyle: 'full',
        timeStyle: 'medium'
    });

    res.send(`
        <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <h1>Halo, Tugas 2 Cloud Berhasil Dijalankan di Docker!</h1>
            <p>Nama: Farlina Aprilianti<br>NPM: 2410010266</p>
            <hr style="width: 50%; margin: 20px auto;">
            <h3 style="color: #2c3e50;">Waktu Akses Browser:</h3>
            <p style="font-size: 1.2rem; font-weight: bold; color: #e74c3c;">${waktuSekarang}</p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Aplikasi berjalan di http://localhost:${PORT}`);
});