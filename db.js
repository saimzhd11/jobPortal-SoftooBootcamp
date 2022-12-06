const mongoose=require("mongoose");
dbConnect()
async function dbConnect(){
    try{
        await mongoose.connect('mongodb+srv://saimzhd4:74372@cluster0.wirwpkx.mongodb.net/JobPortal-SoftooBootcamp',{useNewUrlParser:true});
        console.log('Successfull MongoDB Connection')
    } catch(error){
        console.log('Connection Failed for MongoDB')
    }

}
module.exports=mongoose