/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
// const { MdBorderVertical } = require('react-icons/md');
const BlogSchema = require('./DataBaseConnection');
const bcrypt =require( 'bcryptjs');
const Blog = BlogSchema.Blog;
const User = BlogSchema.User;


console.log(process.env.BLOG_INFO);

const BlogInfo=mongoose.models[process.env.BLOG_INFO] || mongoose.model(process.env.BLOG_INFO, Blog);
const UserInfo=mongoose.models[process.env.User] ||  mongoose.model(process.env.User, User);


  

const DemoData = {
    name: 'top6vscodeextesions2121232',
    title: 'Tho 6 vs code Extensions For programmer',
    img: 'https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    url: '/blog/top6vscodeextesions',
    like: 0,
    topic: 'Tools'
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

    console.log(data,Modal);

    // let isOk=false;

    const name = data.name;
    // console.log(data,"<==")
    try{
        const item= await Modal.findOne({ name })
        console.log(item)
        if(item!==null){
            return null;
        }
        let document =  new Modal(data);
        return await document.save();

    }catch(e){
        console.log(e)
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

        await BlogInfo.deleteOne({
            _id: doc._id
        });

        // console.log('zeel');
        await add(Update, Modal);

        return {
            'update': 'update'
        };
    } catch {
        return 'Error'
    }
}


const OffConnections = async () => {
    console.log('Disconnect');
    await BlogSchema.mongoose.connection.close();

}

const ONConnections = async () => {
    // console.log('Disconnect');
    await BlogSchema.Connect();

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