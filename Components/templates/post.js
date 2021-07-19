import React,{useEffect,useState} from 'react';
import Prism from 'prismjs';
import Share from '@Blog/share';
import Like from '@Blog/Like'
import {  GetBlogList } from '@api/User-Blog-Api';
import loadable from '@loadable/component'
const Navbar= loadable(() => import('../navbar/navbar'))
const Meta= loadable(() => import('../Meta'))
const MYButtons= loadable(() => import('../MainPageButton'))
const Footer= loadable(() => import('../footer/Footer'))
const BlogShort= loadable(() => import('@Blog/BlogShort'))
import { WebLink } from '@const/List';



export default function Post({ children, frontMatter }) {
  const { title,keywords } = frontMatter;

  const [data, setData] = useState({})
  const [list, setList] = useState([])
  
  // console.log(children)

  useEffect(() => {

    const Link=(window.location.href).split('/');
    const name=Link[Link.length-1];

    GetBlogList(name)
    .then((data)=>{
      // console.log(data)

      const blog=data.data.find((data1)=>data1.name==name)
      setData(blog)
      let blogs=data.data

      const first = Math.floor(Math.random() * blogs.length);
      blogs = [blogs[first], blogs[(first + 1) % blogs.length], blogs[(first + 2) % blogs.length], blogs[(first + 3) % blogs.length]]

      setList(blogs)
 
  
    }
      )
    .catch((e)=>console.log('Error'))
    
   
  }, [])



  useEffect(() => {
    setTimeout(() =>
      Prism.highlightAll()
      , 0)
   



  }, [])

  // console.log(data)
  return (
   
    <>
    <MYButtons></MYButtons>
  <Meta title={title} keywords={keywords} ></Meta>
  <Navbar></Navbar>
  

    {/* <Tem></Tem> */}
   
    {/* <h1>{title}</h1>/ */}
    <ins className="adsbygoogle add"
      style={{ display: 'block' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-4438223892792479"
      data-ad-slot="9033777830"></ins>

    <div className="blog-container">
     
      {
        children
      }
      

      {/* <div className="code-toolbar"><pre className="language-javascript"><code className=" language-javascript">console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'Thank You'</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
      </code></pre>
      </div> */}
      {
        data.name ? <Like className="Share" blogInfo={data} isBlogShort={false}></Like> :''
      }
      <Share title={title}></Share>

      <p className="creator">
        Blog Write By:<a href={WebLink + `/me/zeel`}>
        {`zeel codder`}
        </a>
      </p>
      <h1>People Also Read</h1>

      <div className="center">
        <ins className="adsbygoogle top-add add"
          style={{ display: 'inline-block' }}
          data-ad-client="ca-pub-4438223892792479"
          data-ad-slot="5009297566"></ins>
      </div>

      <div className="ListOfBlogs blog-container ListAfterBlog" >


        {/* <ins className="adsbygoogle add"
      style={{display:'block'}}
      data-ad-client="ca-pub-4438223892792479"
      data-ad-slot="5009297566"
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-adtest="on"
      ></ins> */}
        {
          list.map((page, index) => {
            
            return (<BlogShort {...page} key={index} />)
            
          })
          
        }
      </div>
    </div>
    <ins className="adsbygoogle add"
      style={{ display: 'block' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-4438223892792479"
      data-ad-slot="9033777830"></ins>


<Footer ></Footer>
  </>
     
     )
}