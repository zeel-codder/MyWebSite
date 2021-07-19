import axios from 'axios';
import { WebLink, User } from '@const/List';


const API = axios.create({ baseURL: process.env.WebLink });

API.interceptors.request.use((req) => {
  if (localStorage.getItem(User)) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(User)).token}`;
  }
  req.headers.adminkey=process.env.password;

  return req;
});


//user
export const GetUser = (name) => axios.post('/api/user/finduser',{email:name});
export const AddUserInDataBase=(data) => axios.post('/api/user/adduser', data);
export const UserExitsInDataBase=(data)=>axios.post('/api/user/userhas',data);
export const MailToUser=(data)=>axios.post('/api/user/userauthmail',data);


export const UserLogin = () => API.get('/api/user/userlogin');



export const UserList=()=>API.get('/api/user/user');
export const UpdateBlogLike = (old,newData) =>  API.post('/api/user/like',{ filter:{...old},
update:{...old,...newData}});
export const  GetOnlyUserInfo= (name) => axios.post('/api/user/finduser',{email:name,isNotCreateToken:true});


//blog
export const  GetBlog= (name) => axios.post('/api/blog/bloginfoone',{name});
export const  GetBlogList= () => axios.get('/api/blog/blog');
export const SetMailInContactForm = (email,subject,message) => axios.post('/api/me/mail-me',{email,subject,message});


// exports.API=API;