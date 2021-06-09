import axios from 'axios';

const API = axios.create({ baseURL: process.env.WebLink });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('User')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('User')).token}`;
  }

  return req;
});

export const GetUser = (name) => API.post('/api/finduser',{name});
export const UpdateBlogLike = (old,newData) =>  API.post('/api/like',{ filter:{...old},
update:{...old,...newData},});

// exports.API=API;