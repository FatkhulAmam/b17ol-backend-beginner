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

let data ={
    nama:'jane',
    batch: 17.2,
    email:'janeidin@gmail.com'
}
app.patch('/profile', (req, res)=>{
    data={
        ...data,
        ...req.body
    }
    res.send(data)
})

app.put('/profile', (req, res)=>{
    const {name, batch, email} = req.body
    if(name && batch && email){
        data ={
            ...req.body
        }
        res.send(data)
    }else{
        res.status(400).send({
            success: 'false',
            message : 'All form must be filled'
        })
    }
})

app.delete('/profile', (req, res)=>{
    data = null
    res.send(data)
})

app.listen(2323,()=>{
    console.log("aplication running in port 2323")
})