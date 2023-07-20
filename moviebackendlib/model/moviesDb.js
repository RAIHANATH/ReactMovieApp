const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://Raihanath:Password123@cluster0.o8r4ntq.mongodb.net/moviedb?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db Connected")
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;
const libSchema = new Schema({
    movieName:String,
    releasedYear:Number,
    actor:String,
    camera:String,
    actress:String,
    producer:String,
    director:String,
    language:String
});
var libModel = mongoose.model("movie",libSchema);
module.exports = libModel;
