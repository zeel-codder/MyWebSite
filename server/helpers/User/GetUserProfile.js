import axios from 'axios'


export default async function GetUserProfile(uname){


   try{

     
     const Link=process.env.WebLink+'/api/finduser';
     const dataUser=await axios.get(Link+`?id=${uname}`)
     // console.log(dataUser)
     const {username,email,LikePage}=dataUser.data.result;
     const LikeDic=await getList(LikePage);
     const data={name:email,username,LikeDic}
     return data;
    }catch(e){
      console.log('error')
    }
       


}

const getList=async(LikePage)=>{
    const Link=process.env.WebLink+'/api/blog';

    try{
      const res=await axios.get(Link);
      const List=res.data;
      const ans= await List.filter((blog)=>LikePage.includes(blog.name))
      return ans;
    }catch(e){
      console.log(e)
      return [];
    }

  }


