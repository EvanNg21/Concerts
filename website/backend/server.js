const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'evan3610',
    database: 'concert_database'
})

db.connect((err) => {
    if (err) { 
        console.error('Error connecting to database:', err.stack);
        return;
    }
    console.log('Connected to database');
});


app.get('/', (req, res) => {
    return res.json("from backend side");
})

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        res.send(rows);
    })
});

app.listen(3001, () => {
    console.log("listening on port http://localhost:3001");
})