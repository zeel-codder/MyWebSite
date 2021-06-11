import axios from 'axios';
import { WebLink, User } from '@const/List';


const API = axios.create({ baseURL: process.env.WebLink });

API.interceptors.request.use((req) => {
  if (localStorage.getItem(User)) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(User)).token}`;
  }

  return req;
});



export const GetUser = (name) => API.post('/api/finduser',{name});
export const UserLogin = () => API.get('/api/userlogin');



export const UpdateBlogLike = (old,newData) =>  API.post('/api/like',{ filter:{...old},
update:{...old,...newData}});




export const SetMailInContactForm = (email,subject,message) => axios.post('/api/me/mail-me',{email,subject,message});
export const  GetBlog= (name) => axios.post('/api/bloginfoone',{name});

// exports.API=API;