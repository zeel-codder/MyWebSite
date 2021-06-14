const DataBase = require('server/database/DataBaseOperationsBlogInfo');
import  Admin  from '@middleware/Admin';

export default async function handler(req, res) {

  const isAdmin=await Admin(req,res);

  if(! isAdmin){
    res.status(404).end(JSON.stringify({
      message: "Nothing"
    }));
  }
  // your server-side functionality
  await DataBase.ONConnections();
  // console.log("s")

  const data = await DataBase.GetBlogInfo(DataBase.UserInfo);
  res.end(JSON.stringify({
    // message: JSON.stringify(data)
    count:data.length,
    message: data
  }));
};