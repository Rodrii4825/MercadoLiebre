const express = require('express');
const path = require('path');

const app = express();
app.use(express.static("public"))

const port = 3002;
app.listen(port, () => {
  console.log(`Servidor escuchando del puerto ${port}`);
});
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})