// const DataBase=require('server/database/DataBaseOperationsBlogInfo');
import auth from 'server/middleware/auth'

const  handler= async (req, res)=> {
  
    await auth(req,res);

    if(!req.userId){
      return res.status(400).end(JSON.stringify({
        message: `User Not Login`
      }));
    }

    return res.end(
      JSON.stringify({
        message: `User  Login`
      })
    )

}

export default handler;