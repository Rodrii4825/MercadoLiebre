const express = require('express');
const path = require('path');

const app = express();
app.use(express.static("public"))

const port = process.env.PORT || 3001;
app.listen(port,()=> console.log(`Servido corriendo del servidor ${port}`));
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})