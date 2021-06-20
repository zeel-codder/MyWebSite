// const DataBase=require('server/database/DataBaseOperationsBlogInfo');
const jwt = require('jsonwebtoken');

import { ONConnections } from 'server/database/DataBaseConnection';
import { GetOneUserInformationByEmail} from 'server/database/user/CRUD'



export default async function handler(req, res) {


  const { email, isNotCreateToken } = req.body;


    await ONConnections();
    let data = await GetOneUserInformationByEmail(email);
    console.log('call finduser');

    if (data === null) {

      return res.status(404).end(JSON.stringify({
        message: "User Not Found"
      }));
      // return;

    }

    let token = null;

    if (!isNotCreateToken) {
      token = jwt.sign(data.toJSON(), process.env.key, { expiresIn: "1h" });
    }


    res.end(JSON.stringify({
      result: data,
      token
    }));
 

};