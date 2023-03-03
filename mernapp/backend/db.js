const mongoose = require('mongoose');
const mongoURI='mongodb+srv://Varun:Varun123@cluster0.rnzjngp.mongodb.net/MERN?retryWrites=true&w=majority'
const mongoDB =async() =>{
  await mongoose.connect(mongoURI,{ useNewUrlParser:true},async(err,result)=>{
    if(err) console.log("----",err)
    else
{
    console.log('Connected to MongoDB');
    //const fetched_data= await mongoose.connection.db.collection("food_category");
    //fetched_data.find({}).toArray(function(err, data){
    //if (err) console.log(err);
    //else console.log(data)
    //})
};

})
}
module.exports = mongoDB();


