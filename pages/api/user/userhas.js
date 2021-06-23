const jwt =require('jsonwebtoken');
import {ONConnections} from 'server/database/DataBaseConnection';
import {UserExits} from 'server/database/user/CRUD'

export default async function handler(req, res) {

    await ONConnections();

    const ans=await UserExits(req.body);
 

    if(ans===null || !ans){
      res.status(404).end(JSON.stringify({
        message: `Same Error while adding user`
      }))
    }

  
    
    res.end(JSON.stringify({
      message:"User Exits"
    }))

};