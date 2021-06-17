const DataBase=require('server/database/DataBaseOperationsBlogInfo');
import auth from 'server/middleware/auth'

import {ONConnections,OffConnections,UserInfo} from 'server/database/DataBaseConnection';
import {AddLikeArray} from 'server/database/user/CRUD'
import {GetBlogAndUpDate} from 'server/database/Blog/CRUD'
const  handler= async (req, res)=> {
    // your server-side functionality
    await auth(req,res);
    const body=req.body;
    const filter=body.filter;
    const update=body.update;


    if(!req.userId){
      res.status(400).end(JSON.stringify({
        message: `User Not Login`
      }));
    }

    await ONConnections();
    await GetBlogAndUpDate(filter,update);
    await AddLikeArray(req.userId,update.name); 
    await OffConnections();

    res.end(JSON.stringify({
      message: `Blog Update`
    }));
};


export default handler;