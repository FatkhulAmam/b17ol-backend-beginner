const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/data', (req, res)=>{
    res.sendFile('index.html', {root: path.join(__dirname, './file')})
})

app.get('/home', (req, res)=>{
    res.send("welcome to my first backend!!")
})

app.post('/data', (req, res)=> {
    console.log(JSON.stringify(req.body))
    res.end(JSON.stringify(req.body))
});

app.listen(2323,()=>{
    console.log("aplication running in port 2323")
})