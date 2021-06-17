import {ONConnections,OffConnections} from 'server/database/DataBaseConnection';
import {GetBlogList} from 'server/database/Blog/CRUD'
export default async function handler(req, res){
    // your server-side functionality
    await ONConnections();
    let data=(await GetBlogList());
    data=data.sort((a,b)=>b.like-a.like);
    await OffConnections();
    
    
    res.status(200).end(JSON.stringify(data));
    };