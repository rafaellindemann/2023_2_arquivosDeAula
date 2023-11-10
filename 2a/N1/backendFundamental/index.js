const express = require('express')
const cors = require('cors'); // Importe a biblioteca cors

const server = express();
server.use(cors()); // Use o middleware cors

let cont = 0;
// localhost:3000/cursos
// 192.168.14.165:3000/cursos
server.get('/cursos', (req, res) => {
    // console.log('Melancia!')
    cont++
    console.log(cont);

    return res.json({cont: `${cont}`})
})

server.listen(3000);