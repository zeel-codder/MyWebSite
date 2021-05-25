const mongoose =require('mongoose');


const { Schema } = mongoose;

const Blog = new Schema({
  name:  String, // String is shorthand for {type: String}
  title: String,
  img:'String',
  url:   String,
  like:Number,
  topic:String,
});

exports.Blog=Blog;