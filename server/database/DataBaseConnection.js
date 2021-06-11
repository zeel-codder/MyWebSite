require('dotenv').config();
const mongoose =require('mongoose');
// console.log(process.env.MONGO_URI)



// console.log('Start Connections')

const ConnectToDataBase=()=>{
  // console.log('Start Connections')
   mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false});
    
  //  console.log('Loading Connections');
   mongoose.connection
    .once('open',()=>console.log('connect data base'))
    .on('error',(error)=>console.log(error,123));
}



const { Schema } = mongoose;

const Blog = new Schema({
  name:  String, // String is shorthand for {type: String}
  title: String,
  img:'String',
  url:   String,
  like:Number,
  topic:String,
  creator:String,
},{ versionKey: false });


const User = new Schema({
  username:{type:String},
  name: {type: String}, // String is shorthand for {type: String}
  password:{type: String},
  LikePage:{type: [String]},
  url:{type: String},
  About:{type:String},
},{ versionKey: false });



// console.log('End Connections');



exports.Blog=Blog;
exports.User=User;
exports.mongoose=mongoose
exports.Connect=ConnectToDataBase;

