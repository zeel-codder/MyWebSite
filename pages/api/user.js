const DataBase = require('@Database/DataBaseOperationsBlogInfo');

export default async function handler(req, res) {
  // your server-side functionality
  await DataBase.ONConnections();
  console.log("s")

  const data = await DataBase.GetBlogInfo(DataBase.UserInfo);
  res.end(JSON.stringify({
    // message: JSON.stringify(data)
    count:data.length,
    message: data
  }));
};