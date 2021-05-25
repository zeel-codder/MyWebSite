/**
 @name:BlogPage
 @type:React Component
 @param:none
 @returns: JSX of BlogPage.
 @functionality : This Component is Data of Blog on screen.
**/


// Imports
// ====================================
import { useGlobalContext } from '../context'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import Prism from "prismjs";
import Reactmarkdown from 'react-markdown';
import axios from 'axios';
// import "prismjs/themes/prism-tomorrow.css";
// import copy from 'prismjs/plugins/copy-to-clipboard'
// import gfm from 'remark-gfm';
// const {useGlobalContext}=require('../context');
// import Tem from '../../Blogs/Html/Html4SimpleTages/index'
// import { GetBlogInfo } from '../../../../Database/BlogSchema';
// import { response } from 'express';
// import marked from 'marked';
// import  from '';
// import from 
// import file1 from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';
// import file from '../../Blogs/Tools/Top6VsCodeExtesions/top6vscodeextesions.md';
// ====================================



const BlogPage = () => {



  const { Like } = useGlobalContext();
  const { blogname } = useParams();

  const file = useGlobalContext()[blogname];
  const [data, setdata] = useState("");
  const [blogInfo, setBlogInfo] = useState(0);
  // console.log(UserInfo);
  // console.log(blogname)


  //=============================
  // @name:GetBlogInfo
  // @type:Javascript Function
  // @param:none
  // @return:none
  // @functionality: Function is used Store Blog Data in DATA State.
  //=============================

  const GetBlogInfo = () => {
    // console.log(blogname, 12);
    axios.post(`/.netlify/functions/BlogInfoOne`, { name: blogname })
      // axios.post(`/BlogInfoOne`,{name:blogname})
      .then((response) => {
        // console.log(response.data);
        return JSON.parse(response.data.message)
      }

      )
      .then((data) => { setBlogInfo(data); })
      .catch((err) => console.log(err));
  }

  //=============================
  // @name:useEffect
  // @type:React Hook UseEffect
  // @param:none
  // @return:none
  // @functionality: UseEffect is used read the contend of read me and store in data hook.
  //=============================

  useEffect(() => {
    Prism.highlightAll()
    // Prism.plugins=""
    GetBlogInfo();
    if (!file) {
      setdata('<h1 class="alert">404 Not Found</h1>')
      return;
    }
    fetch(file)
      .then(response => {

        return response.text()
      })
      .then(text => {
        setdata(
          text
        )
      })
    // setdata(Blog);
    // console.log()
    // setdata([])
    // console.log(process.env);
    // console.log(slug)
  }, [data, file])

  // console.log(blogInfo,'main');
  // Prism.usePrismHighlightAll();
  return (
    <>
      {/* <article className="blog-container" dangerouslySetInnerHTML={{__html: data}}>

        </article> */}
      {/* <Tem></Tem> */}
      <div className=" blog-container">
        <Reactmarkdown source={data}
          allowDangerousHtml='true'
          // plugins={[gfm]}

        />
        {
          blogInfo !== 0 && <Like className="Share" blogInfo={blogInfo} like={blogInfo.like}></Like>
        }
      </div>
    </>

  )
}

export default BlogPage;