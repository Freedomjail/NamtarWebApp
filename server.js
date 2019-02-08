let app = require('express')();
const sqlite3 = require('sqlite3').verbose();

app.get('/', function (request, response) {
    console.log(request.url);
    response.render('index.ejs', { paramettreTransmit: 'Je suis un Licornet' });

    // open database in memorys
    let db = new sqlite3.Database(':memory:', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    // close the database connection
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
});




app.listen(80);
console.log('Script Entièrement Chargé');