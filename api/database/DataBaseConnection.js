require('dotenv').config();
const mongoose =require('mongoose');
// console.log(process.env.MONGO_URI)



console.log('Start Connections')

const ConnectToDataBase=()=>{
  console.log('Start Connections')
   mongoose.connect(process.env.MONGO_URI,{ 
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true,
     useNewUrlParser: true
    });
    
   console.log('Loading Connections');
   mongoose.connection
    .once('open',()=>console.log('connect data base'))
    .on('error',(error)=>console.log(error,123));
}







console.log('End Connections');




exports.mongoose=mongoose
exports.Connect=ConnectToDataBase;
