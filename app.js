
const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser'); 
const {Task} = require ('./db/models/task.model');
app.get('/chks',(req,res)=>{
    res.send("Darius");
})
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks);
    })
})
app.post('/',(req,res)=>{
    let title = req.body.title;
    let newtask = new Task({title});
    newtask.save().then((taskDoc)=>{
        res.send(taskDoc);
    })
})
app.listen(3000,()=>{
    console.log("Sha8al 3ala server 3000");
})
console.log("image gammdaaaa");