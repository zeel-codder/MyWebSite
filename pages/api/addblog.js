const DataBase=require('@Database/DataBaseOperationsBlogInfo');

export default async function handler(req, res){

    await DataBase.ONConnections();
    await DataBase.AddNewBlog(null,DataBase.BlogInfo);
    // await DataBase.OffDatabase();

    res.end(JSON.stringify({
      message: `Blog Added`
    }))
    
    };