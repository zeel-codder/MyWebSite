

import {ONConnections} from 'server/database/DataBaseConnection';
import {GetOneBlogInformation} from 'server/database/Blog/CRUD'

export default async function handler(req, res) {

    const {name}=req.body;


    await ONConnections();
    const data=await GetOneBlogInformation(name);
    // await OffConnections();
  
    
    if(data===null){

      return res.status(404).end( JSON.stringify({
        message: "Blog Not Found"
      }));
    }

    res.end(JSON.stringify({
      message: JSON.stringify(data)
    }));
    };