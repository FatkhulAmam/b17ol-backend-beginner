const express = require('express')

const app = express();

app.get('/home', (req, res)=>{
    res.send("welcome to my first backend!!")
})

app.listen(2323,()=>{
    console.log("aplication running in port 2323")
})