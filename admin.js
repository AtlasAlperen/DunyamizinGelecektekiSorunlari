const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// MySQL bağlantısı oluşturma
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'kullanici_adi',
    password: 'sifre',
    database: 'veritabani_adi'
});

// Veritabanı bağlantısı
connection.connect((err) => {
    if (err) {
        console.error('Veritabanına bağlanırken hata oluştu: ' + err.stack);
        return;
    }
    console.log('Veritabanına başarıyla bağlandı, ID: ' + connection.threadId);
});

// Yıla göre sıcaklık verilerini çekme
router.get('/sicaklik/:yil', (req, res) => {
    const { yil } = req.params;
    const query = 'SELECT yil, sicaklik FROM veri_tablosu WHERE yil = ?';

    connection.query(query, [yil], (error, results, fields) => {
        if (error) {
            console.error('Veri çekme hatası: ' + error);
            res.status(500).send('Veri çekme hatası');
        } else {
            res.status(200).json(results);
        }
    });
});

// Veri ekleme işlemi
router.post('/veri_ekle', (req, res) => {
    const { yil, sicaklik } = req.body;
    const query = 'INSERT INTO veri_tablosu (yil, sicaklik) VALUES (?, ?)';

    connection.query(query, [yil, sicaklik], (error, results, fields) => {
        if (error) {
            console.error('Veri ekleme hatası: ' + error);
            res.status(500).send('Veri ekleme hatası');
        } else {
            res.status(200).send('Veri başarıyla eklendi');
        }
    });
});

// Veri silme işlemi
router.delete('/veri_sil/:yil', (req, res) => {
    const { yil } = req.params;
    const query = 'DELETE FROM veri_tablosu WHERE yil = ?';

    connection.query(query, [yil], (error, results, fields) => {
        if (error) {
            console.error('Veri silme hatası: ' + error);
            res.status(500).send('Veri silme hatası');
        } else {
            res.status(200).send('Veri başarıyla silindi');
        }
    });
});

module.exports = router;
