import  Admin  from 'server/middleware/Admin';
import {ONConnections} from 'server/database/DataBaseConnection';
import {GetUserList } from 'server/database/user/CRUD'

export default async function handler(req, res) {

  const isAdmin=await Admin(req,res);

  if(! isAdmin){
    res.status(404).end(JSON.stringify({
      message: "Nothing"
    }));
  }
  // your server-side functionality
  await ONConnections();
  // console.log("s")

  const data = await GetUserList();

  // await OffConnections();

  res.end(JSON.stringify({
    // message: JSON.stringify(data)
    count:data.length,
    message: data
  }));
};