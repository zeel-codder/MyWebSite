
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

import dynamic from 'next/dynamic'
const BlogShort = dynamic(() => import('@Blog/BlogShort'))



function BlogList({ isTopic, topic }) {

    const [data, setdata] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [list, setlist] = useState([])
    const numberBlog = 9;
    const add = 6;




    async function Getdata() {

        // console.log(topic,'<=')

        let data = await axios.get(WebLink + '/api/blog/blog')
            .then((res) => {

                return res.data;
            })
            .catch((err) => { return; })


        if (isTopic) {
            data = data.filter((item) => item.topic === topic)
        }
        setlist(data);
        setdata(data.slice(0, numberBlog))
        setLoading(false)
        // return data;

    }

    function handler() {
        if (list.length > data.length) {
            setdata(list.slice(0, data.length + add));
        }
    }


    useEffect(() => {

        Getdata()

    }, [])


    return (

        <article className="">
            {/* <marquee className="alert" behavior="scroll" direction="right">This page is still in production</marquee> */}

            {/* 
            {

                !isTopic

                &&

                <div className="blog_main1" id="home">

                    {/* <Image src={img} width={400} height={400} alt='BlogShort Img'   /> */}

            {/* <img className="video" src="/home.s" /> */}
            {/* <img className="img" src='/images/home/DarkBlueClubLogo.png' className="logo"  alt="blog img"></img> */}
            {/* <span className="logo-text home-h"> */}
            {/* <h1> */}
            {/* Start Reading And Learning Today */}
            {/* </h1> */}
            {/* <button className="btn" >
                            <Link to='Read' title='Get start'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Lets Read
                            </Link>
                        </button> */}
            {/* </span> */}
            {/* </div> */}

            {/* } */}
            {/* </video> */}

            <Search data={list} />

            {

                data.length === 0

                    ?
                    !isLoading
                    &&
                    <h1 className="row">🙏🙏 No Blogs On This Topic 🙏🙏</h1>

                    :
                    <>
                        <h1 className="hedging">Blogs</h1>
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

                    isLoading
                        ?

                        <BlogLoad />
                        :

                        <>


                            {
                                data.map((page, index) => {

                                    return (<BlogShort {...page} key={index} />)

                                })
                            }


                        </>



                }
            </div>
            <div className="center">
                <ins className="adsbygoogle top-add add"
                    style={{ display: 'inline-block' }}
                    data-ad-client="ca-pub-4438223892792479"
                    data-ad-slot="5009297566"></ins>
            </div>
            {

                list.length > data.length

                &&

                <div className="blog-container">

                    <button className="btn" onClick={handler}>
                        Load More
                    </button>
                </div>
            }
            <ins className="adsbygoogle add"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-4438223892792479"
                data-ad-slot="9230683994"
                data-ad-format="auto"
                data-full-width-responsive="true"
                data-adtest="on"
            ></ins>


        </article>
    )
}

export default BlogList;
