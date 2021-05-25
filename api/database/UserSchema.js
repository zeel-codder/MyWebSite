const mongoose =require('mongoose');


const { Schema } = mongoose;


const User = new Schema({
    name:String, 
    password:String,
    LikePage:[String],
    url:String,
  });
  

exports.User=User;