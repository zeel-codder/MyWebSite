const DataBase=require('Database/DataBaseOperationsBlogInfo');

export default async function handler(req, res){
    // your server-side functionality
    await DataBase.ONConnections();
    const data=await DataBase.GetBlogInfo(DataBase.BlogInfo);
    res.end(JSON.stringify(data));
    };