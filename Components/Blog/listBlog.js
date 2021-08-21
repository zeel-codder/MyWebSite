
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { WebLink } from '@const/List';
// import Html from 'next/'
// import { useRouter } from 'next/router';
// import BlogShort from '@B/BlogShort'
// import Template from '@Layout/Template'
// import BlogShort from '@Blog/BlogShort';
import Search from '@Blog/Serach';
import BlogLoad from 'Components/loading/BlogLoadder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import dynamic from 'next/dynamic'
const BlogShort = dynamic(() => import('@Blog/BlogShort'))



function BlogList({ isTopic, topic, Data }) {

    
    const [data, setdata] = useState([])

   


    useEffect(() => {


        Getdata()
       

    }, [topic])


  



    async function Getdata() {



        let data1=Data;


        if (isTopic) {
            data1 = data1.filter((item) => item.topic === topic)
        }
        setdata(data1);


    }





    return (

        <article className="">
          
        

            <Search data={data} />

            {

                data?.length === 0

                    ?
                  
                    <h1 className="row">🙏🙏 No Blogs On This Topic 🙏🙏</h1>

                    :
                    <>
                    
                        <h1 className="hedging">{isTopic ? topic : 'Blogs'}</h1>
                    </>
            }



            <div className="center">
                <ins className="adsbygoogle top-add add"
                    style={{ display: 'inline-block' }}
                    data-ad-client="ca-pub-4438223892792479"
                    data-ad-slot="5009297566"></ins>
                    
            </div>



            <div className="ListOfBlogs blog-container" >



                {
                    data?.map((page, index) => {

                        return (<BlogShort {...page} key={index} />)

                    })
                }
            </div>



           <div className="center">
                <ins className="adsbygoogle top-add add"
                    style={{ display: 'inline-block' }}
                    data-ad-client="ca-pub-4438223892792479"
                    data-ad-slot="5009297566"></ins>
            </div>
{/*     
            <ins className="adsbygoogle add"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-4438223892792479"
                data-ad-slot="9230683994"
                data-ad-format="auto"
                data-full-width-responsive="true"
                data-adtest="on"
            ></ins> */}


        </article>
    )
}

export default BlogList;
