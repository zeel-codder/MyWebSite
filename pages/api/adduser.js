const DataBase=require('Database/DataBaseOperationsBlogInfo');

export default async function handler(req, res) {
    // your server-side functionality

    // console.log('strat');
    await DataBase.ONConnections();
    console.log(typeof(req.body))
    const ans=await DataBase.AddNewBlog(req.body,DataBase.UserInfo);
    console.log(ans,1223);
    await DataBase.OffConnections();
    if(ans!==null){
      res.end(JSON.stringify({
        message: `User Not Add`
      }))
    }
    // await DataBase.OffDatabase();
    res.end(JSON.stringify({
      message: `User Added`
    }))


    // res.end(JSON.stringify({
    //   message: `Blog Added`
    // }))
    
};