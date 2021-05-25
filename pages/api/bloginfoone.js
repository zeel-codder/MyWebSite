const DataBase=require('Database/DataBaseOperationsBlogInfo');

export default async function handler(req, res) {

    const {name}=req.body;
    console.log(name);
    // your server-side functionality
    await DataBase.ONConnections();
    const data=await DataBase.GetBlogInfoOne(name,DataBase.BlogInfo);
    console.log(data,12);
    if(data===null){

      res.status(404).end( JSON.stringify({
        message: JSON.stringify(data)
      }));
    }

    res.end(JSON.stringify({
      message: JSON.stringify(data)
    }));
    };