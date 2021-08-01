// const DataBase=require('server/database/DataBaseOperationsBlogInfo');
const jwt = require('jsonwebtoken');

import { ONConnections } from 'server/database/DataBaseConnection';
import {  GetOneUserInformationById } from 'server/database/user/CRUD'


// import bcrypt from "bcryptjs";

export default async function handler(req, res) {


  // console.log(req.method)

    const { id } = req.body;
    // console.log(id)
    // console.log(id);
    await ONConnections();
    const data = await GetOneUserInformationById(id);
    // await OffConnections();

    if (data === null) {
      // console.log('Lest Go');

      return res.status(404).end(JSON.stringify({
        message: "User Not Found"
      }));
    }

    res.end(JSON.stringify({
      result: data
    }));

  




};