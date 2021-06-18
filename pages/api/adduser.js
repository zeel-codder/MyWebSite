const jwt =require('jsonwebtoken');
const bcrypt =require("bcryptjs");
import {ONConnections} from 'server/database/DataBaseConnection';
import {AddNewUser} from 'server/database/user/CRUD'

export default async function handler(req, res) {

    await ONConnections();
    req.body.password=await bcrypt.hash(req.body.password, 12);

    const ans=await AddNewUser(req.body);
 

    if(ans===null){
      res.status(404).end(JSON.stringify({
        message: `Same Error while adding user`
      }))
    }

    const token =jwt.sign( ans.toJSON(), process.env.key, { expiresIn: "1h" } );
  
    
    res.end(JSON.stringify({
      result:ans,
      token
    }))


    // res.end(JSON.stringify({
    //   message: `Blog Added`
    // }))
    
};