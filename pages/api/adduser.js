const DataBase=require('@Database/DataBaseOperationsBlogInfo');
const bcrypt =require("bcryptjs");
const jwt =require('jsonwebtoken');

export default async function handler(req, res) {
    // your server-side functionality

    // console.log('strat');
    await DataBase.ONConnections();
    console.log(req.body)
    req.body.password=await bcrypt.hash(req.body.password, 12);
    const ans=await DataBase.AddNewBlog(req.body,DataBase.UserInfo);
    console.log(ans,1223);
    await DataBase.OffConnections();
    if(ans===null){
      res.status(404).end(JSON.stringify({
        message: `User Not Add`
      }))
    }

    const token = jwt.sign( ans.toJSON(), process.env.key, { expiresIn: "1h" } );
    // await DataBase.OffDatabase();
    res.end(JSON.stringify({
      message: `User Added`,
      result:ans,
      token
    }))


    // res.end(JSON.stringify({
    //   message: `Blog Added`
    // }))
    
};