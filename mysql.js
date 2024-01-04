const mysql = require('mysql');

// MySQL bağlantı bilgileri
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'şifre',
  database: 'dunyasorunlari'
});

// MySQL bağlantısını açma
connection.connect((err) => {
  if (err) {
    console.error('MySQL bağlantı hatası: ' + err.stack);
    return;
  }
  console.log('MySQL bağlantısı başarıyla gerçekleştirildi. Bağlantı ID: ' + connection.threadId);

  // İnsan nüfusutablosundan veri çekme
  connection.querynufus('SELECT * FROM dunyasorunlari.proje;', (error, results, fields) => {
    if (error) {
        console.error('Veri çekme hatası: ' + error);
    } else {
        console.log('Yıllara Göre Sıcaklık Verileri: ', results);
    }

   
    

});
connection.queryozon('SELECT * FROM dunyasorunlari.ozon', (error, results, fields) => {
    if (error) {
        console.error('Veri çekme hatası: ' + error);
    } else {
        console.log('Yıllara Göre Sıcaklık Verileri: ', results);
    }

    
    
});
connection.querysıcaklık('SELECT * FROM dunyasorunlari.iklim;', (error, results, fields) => {
    if (error) {
        console.error('Veri çekme hatası: ' + error);
    } else {
        console.log('Yıllara Göre Sıcaklık Verileri: ', results);
    }

    // Veritabanı bağlantısını kapatma
    connection.end();
});
});