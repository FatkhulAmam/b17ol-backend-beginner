const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.get('/home', (req, res)=>{
    res.send("welcome to my first backend!!")
})

app.post('/data', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})

app.post('/profile', (req, res)=>{
    res.send(req.body)
})

app.listen(2323,()=>{
    console.log("aplication running in port 2323")
})