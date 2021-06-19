// const DataBase=require('server/database/DataBaseOperationsBlogInfo');
const jwt = require('jsonwebtoken');

import { ONConnections } from 'server/database/DataBaseConnection';
import { GetOneUserInformationByEmail} from 'server/database/user/CRUD'



export default async function handler(req, res) {


  // console.log(req.method)

  // if (req.method == "GET") {

  //   const { id } = req.query;
  //   // console.log(id)
  //   // console.log(id);
  //   await ONConnections();
  //   const data = await GetOneUserInformationById(id);
  //   await OffConnections();

  //   if (data === null) {
  //     // console.log('Lest Go');

  //     res.status(404).end(JSON.stringify({
  //       message: "User Not Found"
  //     }));
  //   }

  //   res.end(JSON.stringify({
  //     result: data
  //   }));

  // }


  // if (req.method == "POST") {


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