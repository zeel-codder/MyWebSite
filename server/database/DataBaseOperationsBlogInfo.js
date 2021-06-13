/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
// const { MdBorderVertical } = require('react-icons/md');
const BlogSchema = require('./DataBaseConnection');
const bcrypt =require( 'bcryptjs');
const Blog = BlogSchema.Blog;
const User = BlogSchema.User;


// console.log(process.env.BLOG_INFO);

// const BlogInfo=mongoose.model(process.env.BLOG_INFO, Blog);
// const UserInfo= mongoose.model(process.env.User, User);
const BlogInfo=mongoose.models[process.env.BLOG_INFO] || mongoose.model(process.env.BLOG_INFO, Blog);
const UserInfo=mongoose.models[process.env.User] ||  mongoose.model(process.env.User, User);


  

const DemoData = {

    "name": "mongooseoverwriteerror",
    "title": "Mongoose Modal OverwriteModelError",
    "img": "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80",
    "like": 0,
    "topic": "Error",
    "creator":"zeelprajapati321@gmail.com"
}
const DemoUser = {
    name: 'zeel',
    password: 'zeel',
}
// console.log(DemoData);


const AddNewBlog = async (data, Modal) => {

    if (data == null) {

        await add(DemoData, BlogInfo);
        // add(DemoUser,UserInfo);
    } else {
        return await add(data, Modal);
    }


}


const add = async (data, Modal) => {

    // console.log('i am call');

    // console.log(data);

    // let isOk=false;

    const name = data.name;
    // console.log(data,"<==")
    try{
        const item= await Modal.findOne({ name })
        // console.log(item)
        if(item!==null){
            return null;
        }
        let document =  new Modal(data);
        return await document.save();

    }catch(e){
        // console.log(e)
        return null;
    }


}


const GetBlogInfo = async (Modal) => {

    // return 
    try {
        const data = await Modal.find({});
        return data;
    } catch {
        return 'Error';
    }

}



const GetBlogInfoOne = async (name, Modal) => {

    // return 
    try {

        const data = await Modal.findOne({
            name
        });
        return data;
    } catch {
        return 'Error';
    }

}



const GetBlogInfoAndUpDate = async (filter, Update, Modal) => {

    const {
        name
    } = filter;

    // console.log({ name }, Update);

    try {
        const doc = await BlogInfo.findOne({
            name
        });

        // await BlogInfo.deleteOne({
        //     _id: doc._id
        // });

        // console.log('zeel');
        return await Modal.update({ _id: doc._id }, { ...Update });

      
    } catch {
        return 'Error'
    }
}


const OffConnections = async () => {
    // console.log('Disconnect');
    await BlogSchema.mongoose.connection.close();

}

const ONConnections = async () => {
    // console.log('Disconnect');
    await BlogSchema.Connect();

}


const AddLikeArray = async (id,name,User) => {
    try {
        const doc = await User.findOne({
            _id:id
        });
        // console.log(doc)
        
        doc.LikePage.includes(name)
        ?
        doc.LikePage=doc.LikePage.filter((data)=>data!==name)
        :
        doc.LikePage.push(name)

        const ans=doc.LikePage;
        
        return await User.update({ name: doc.name }, { LikePage: ans });
        
        // await User.deleteOne({ _id: doc._id });
        
        // // console.log(doc instanceof mongoose);
        // // {}

        // // const {name,password,LikePage}=doc
        // // const data={name,password,LikePage}
        
        // await doc.save();

    } catch {
        return 'Error'
    }
    
}

exports.add = add;
exports.GetBlogInfo = GetBlogInfo;
exports.GetBlogInfoOne = GetBlogInfoOne;
exports.GetBlogInfoAndUpDate = GetBlogInfoAndUpDate;
exports.AddNewBlog = AddNewBlog;
exports.OffConnections = OffConnections;
exports.ONConnections = ONConnections;
exports.BlogInfo = BlogInfo;
exports.UserInfo = UserInfo;
exports.AddLikeArray = AddLikeArray;