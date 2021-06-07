const DataBase=require('server/database/DataBaseOperationsBlogInfo');
import auth from '@middleware/auth'

const  handler= async (req, res)=> {
    // your server-side functionality
    await auth(req,res);
    const body=req.body;
    const filter=body.filter;
    const update=body.update;
    console.log(req.userId)

    // console.log(filter,update);
    // console.log('strat');

    if(!req.userId){
      res.status(400).end(JSON.stringify({
        message: `User Not Login`
      }));
    }

    await DataBase.ONConnections();
    await DataBase.GetBlogInfoAndUpDate(filter,update,DataBase.BlogInfo);
    const data=await DataBase.AddLikeArray(req.userId,update.name,DataBase.UserInfo);
    // console.log(data);
    // await DataBase.OffDatabase();

    res.end(JSON.stringify({
      message: `Blog Update`
    }));
};


export default handler;