const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    // Mengambil waktu saat ini dan dikunci ke zona waktu WITA (Banjarmasin)
    const waktuSekarang = new Date().toLocaleString('id-ID', {
        dateStyle: 'full',
        timeStyle: 'medium',
        timeZone: 'Asia/Makassar'
    });

    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tugas 2 Cloud - Farlina Aprilianti</title>
            <style>
                body {
                    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    /* Perubahan: Latar belakang gradasi Soft Blue yang segar */
                    background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
                    color: #1e3a8a; /* Warna teks utama: Biru Navy Tua */
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    background-color: rgba(255, 255, 255, 0.95); /* Putih bersih transparan tipis */
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 15px 35px rgba(14, 165, 233, 0.15); /* Efek bayangan kebiruan */
                    text-align: center;
                    max-width: 500px;
                    width: 90%;
                    border: 1px solid #e0f2fe;
                }
                h1 {
                    color: #0284c7; /* Warna Judul: Sky Blue Gelap yang Elegan */
                    font-size: 1.8rem;
                    margin-bottom: 15px;
                    line-height: 1.4;
                }
                .profile {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: #334155;
                }
                .profile strong {
                    color: #0369a1;
                }
                hr {
                    border: 0;
                    border-top: 2px solid #f0f9ff;
                    margin: 25px 0;
                }
                .timestamp-container {
                    background-color: #f0f9ff; /* Background box waktu: Biru sangat muda */
                    padding: 18px;
                    border-radius: 12px;
                    display: inline-block;
                    border: 1px solid #e0f2fe;
                    width: 80%;
                }
                .timestamp-label {
                    font-weight: 700;
                    font-size: 0.85rem;
                    color: #0369a1;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .timestamp-value {
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: #0284c7;
                    margin-top: 8px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Halo, Tugas 2 Cloud Berhasil Dijalankan di Docker!</h1>
                <div class="profile">
                    <p>Nama: <strong>Farlina Aprilianti</strong><br>
                    NPM: <strong>2410010266</strong></p>
                </div>
                <hr>
                <div class="timestamp-container">
                    <div class="timestamp-label">Waktu Banjarmasin (WITA):</div>
                    <div class="timestamp-value">${waktuSekarang} WITA</div>
                </div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Aplikasi berjalan di http://localhost:${PORT}`);
});