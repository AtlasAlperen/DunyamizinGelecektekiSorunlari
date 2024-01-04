const express = require('express');
const path = require('path');
const app = express();
const port = 5000;


// Statik dosyaların (HTML, CSS, JS dosyaları) bulunduğu dizini belirtme
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa yoluna get isteği için cevap
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sunucuyu belirtilen port üzerinden dinleme
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor.`);
});