require('dotenv').config();
const mongoose =require('mongoose');


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
  name:  String, 
  title: String,
  img:'String',
  url:   String,
  like:Number,
  topic:String,
  creator:String,

},{ versionKey: false,timestamps: true });


const User = new Schema({
  username:{type:String},
  email: {type: String}, 
  LikePage:{type: [String]},
  url:{type: String},
  About:{type:String},
  isCreator:{type:Boolean}
},{ versionKey: false,timestamps: true });




const BlogInfo=mongoose.models[process.env.BLOG_INFO] || mongoose.model(process.env.BLOG_INFO, Blog);
const UserInfo=mongoose.models[process.env.User] ||  mongoose.model(process.env.User, User);



const OffConnections = async () => {

  await mongoose.connection.close();

}

const ONConnections = async () => {

  await ConnectToDataBase();

}

exports.Connect=ConnectToDataBase;
exports.BlogInfo = BlogInfo;
exports.UserInfo = UserInfo;
exports.OffConnections=OffConnections;
exports.ONConnections=ONConnections;
