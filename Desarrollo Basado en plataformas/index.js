const express = require('express');
const app  = express();
const port = 300;

app.get('/', (req, res) => {
    res.send('Hola Mundo desde mi primera API en Node.js!')
});

app.listen(port, ()=> {
    console.log(`Api escuchando en http://localhost:${port}`)
});