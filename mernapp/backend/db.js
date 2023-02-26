const mongoose = require('mongoose');
const mongoURI='mongodb+srv://varbash1419:Yash@401@cluster0.syouqe8.mongodb.net/?retryWrites=true&w=majority'
const mongoDB =() =>{
  mongoose.connect(mongoURI,()=>
{
    console.log('Connected to MongoDB');
});

}

module.exports = mongoDB;


