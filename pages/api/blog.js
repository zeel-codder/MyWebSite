const DataBase=require('server/database/DataBaseOperationsBlogInfo');

export default async function handler(req, res){
    // your server-side functionality
    await DataBase.ONConnections();
    const data=await DataBase.GetBlogInfo(DataBase.BlogInfo);
    
    res.status(200).end(JSON.stringify(data));
    };