const express = require('express')
const cors = require('cors')

// import express from 'express'; 
// console.log(express)

const server = express();
server.use(cors());

let cont = 0;
// localhost:3000/curso
server.get('/cursos', (req, res) => {
    // console.log('Acessou a Rota!')
    cont++
    console.log(cont);

    // return res.send('Hello world!' )
    // return res.send('Cont: ' + cont )
    return res.json({cont: `${cont}`})


})

server.listen(3000);