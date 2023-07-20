//1.Importing
const express = require ("express");
const libModel = require("./model/moviesDb");
const cors = require('cors');
const path = require('path');
//2.Initialisation
const app = new express();
//3.Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello Server!")
})

//to post data
app.post('/addmovies',async (req,res)=>{
    var data = await libModel(req.body);
    data.save();
    res.send({status:"data saved"})
})
//to view all movies
app.get('/viewmovies',async(req,res)=>{
    var data = await libModel.find();
    res.json(data);
 })
 
//to delete movies
app.delete('/deletemovies/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    await libModel.findByIdAndDelete(id);
    res.json({status:"deleted"})
})
//to edit
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    try {
        var data = await libModel.findByIdAndUpdate(id,req.body)
        res.json({status:"Edited"})
    }
    catch(err){
        res.status(500).send(err)
    }
})
app.listen(3008,()=>{
    console.log("Port 3008 is up and running!!")
})