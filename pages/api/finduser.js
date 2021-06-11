const DataBase=require('server/database/DataBaseOperationsBlogInfo');

// import bcrypt from "bcryptjs";
const jwt =require('jsonwebtoken');

export default async function handler(req, res) {

    const {name,isNotCreateToken}=req.body;
    // console.log(req.body);
   
    // your server-side functionality
    await DataBase.ONConnections();
    const data=await DataBase.GetBlogInfoOne(name,DataBase.UserInfo);
    // console.log(data,12);
    if(data===null){
      // console.log('Lest Go');

      res.status(404).end(JSON.stringify({
        message: JSON.stringify(data)
      }));

    }

     let token=null;
     if(!isNotCreateToken){
       token=jwt.sign(data.toJSON(), process.env.key, { expiresIn: "1h" });
     }
     

    res.end(JSON.stringify({
      result:data,
      token
    }));
};