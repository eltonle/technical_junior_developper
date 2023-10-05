const mongoose = require ('mongoose');
const connectDB = async()=>{
    try{
      mongoose.set("strictQuery", false);
      mongoose.connect(process.env.MONGO_URI, function () {
        console.log('connexion mongo reussi');
      });
    //   console.log('db connect');
    }catch(error){
        console.log(error);
        progress.exit();
    }
};

module.exports =  connectDB;