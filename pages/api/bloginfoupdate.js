const DataBase=require('@Database/DataBaseOperationsBlogInfo');

export default async function handler(req, res) {
    // your server-side functionality
    const body=req.body;
    const filter=body.filter;
    const update=body.update;

    console.log(filter,update);
    // console.log('strat');
    await DataBase.ONConnections();
    await DataBase.GetBlogInfoAndUpDate(filter,update,DataBase.BlogInfo);
    // await DataBase.OffDatabase();

    res.end(JSON.stringify({
      message: `Blog Update`
    }));
};