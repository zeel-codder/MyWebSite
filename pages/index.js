import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import BlogShort from '@Blog/BlogShort'


export default function Home({data}) {
  console.log(data)
  return (
    <article className="blog-container">
    {/* <marquee className="alert" behavior="scroll" direction="right">This page is still in production</marquee> */}
    <h1>Zeel Codder Blog</h1>

    <img className="img" src='/images/home/DarkBlueClubLogo.png' style={{ height: 400 }} alt="blog img"></img>
    <p className="para">
      
    </p>

    <div className="ListOfBlogs">
      {

        data.map((page) => {

          return (<BlogShort {...page} key={new Date().getMilliseconds()} />)

        })

      }
    </div>


  </article>
  )
}


export async function getStaticProps(context) {

  console.log(process.env.WebLink+'api/blog')

  let data=await axios.get(process.env.WebLink+'api/blog')
      //  axios.get('/Blog')
      .then((res) => {
        const data1 = [];
        const index = [];
        // console.log(res.data);
        console.log(res.data);
        const BlogInfo = res.data;
        BlogInfo.forEach(element => {
          let topic = element.topic;
          //  console.log(topic)
          if (!(topic in index)) {
            const add = {
            };
            add['topic'] = topic;
            add['data'] = [];
            index[topic] = data1.length;
            data1.push(add);
            // console.log(data1);
          }
          data1[index[topic]]['data'].push(element);
        });
        //  console.log(data1);
        
        return data1
      })
      .catch((err) => { return console.log(err); })
      console.log(data)
      return {
        props: { data}, // will be passed to the page component as props
      }
}