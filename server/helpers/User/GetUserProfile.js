import axios from 'axios'


export default async function GetUserProfile(uname){
    
    const Link=process.env.WebLink+'/api/finduser';
    const dataUser=await axios.post(Link,{name:uname,isNotCreateToken:true})
    // console.log(dataUser)
    const {name,username,LikePage}=dataUser.data.result;
    const LikeDic=await getList(LikePage);
    const data={name,username,LikeDic}
    return data;
       


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


