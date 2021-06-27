
// import Head from 'next/head'
// import Image from 'next/image'
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { WebLink } from '@const/List';
// import { useRouter } from 'next/router';
// import BlogShort from '@B/BlogShort'
// import Template from '@Layout/Template'
// import BlogShort from '@Blog/BlogShort';
// import Search from '@Blog/Serach';
// import BlogLoad from 'Components/loading/BlogLoadder';
// import LoadShort from 'Components/loading/LoderShort' 


import loadable from '@loadable/component'
const BlogShort = loadable(() => import('@Blog/BlogShort'))
const Search = loadable(() => import('@Blog/Serach'))
const BlogLoad = loadable(() => import('Components/loading/BlogLoadder'))



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
        // console.log(data);
    }, [])


    return (

        <article className="">
            {/* <marquee className="alert" behavior="scroll" direction="right">This page is still in production</marquee> */}


            {

                !isTopic

                &&

                <div className="blog_main1" id="home">

                    <img className="video" src="/index.png" />
                    {/* <img className="img" src='/images/home/DarkBlueClubLogo.png' className="logo"  alt="blog img"></img> */}
                    <span className="logo-text blog-text" id="head">
                        Start Reading And Learning Today
                        <button className="btn" >
                            <Link to='Read' title='Get start'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Lets Read
                            </Link>
                        </button>
                    </span>
                </div>

            }
            {/* </video> */}

            <Search data={list} />

            {

                data.length === 0

                    ?
                    ! isLoading
                    &&
                    <h1 className="row">🙏🙏 No Blogs On This Topic 🙏🙏</h1>

                    :
                    <h1 >Blogs</h1>
            }


            {/* <BlogShort /> */}
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
            {

                list.length > data.length

                &&

                <div className="blog-container">

                    <button className="btn" onClick={handler}>
                        Load More
                    </button>
                </div>
            }


        </article>
    )
}

export default BlogList;
