import {ONConnections,OffConnections,BlogInfo} from 'server/database/DataBaseConnection';

import {AddNewBlog} from 'server/database/Blog/CRUD';


export default async function handler(req, res){

    await ONConnections();
    await AddNewBlog(null);
    await OffConnections();

    res.end(JSON.stringify({
      message: `Blog Added into database zeel`
    }))
    
};