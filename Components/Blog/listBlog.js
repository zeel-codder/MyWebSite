
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



function BlogList({ isTopic, topic }) {

    const [data, setdata] = useState([])
    const [number, setnumber] = useState(1)
    const [LinksP,setLinksP]=useState([]);
    // const [number, setnumber] = useState(0)
    const [part,setPart]=useState(0)
    const [isLoading, setLoading] = useState(true)
    const [list, setlist] = useState([])
    const numberBlog = 9;
    const add = 6;


    function SetDataByNumber(list){
        setdata(list.slice(numberBlog*(number-1),numberBlog*(number)))
        const max=Math.floor(list.length/numberBlog)+1;
        setPart(Math.floor(list.length/numberBlog)+1)

        if(number==1){
            setLinksP([number+1]);
        }else if(number==max){
            setLinksP([number-1])
        }else{
            setLinksP([number-1,number,number+1]);
        }
        
    }


    useEffect(() => {

        Getdata()

    }, [])
    
    
    useEffect(()=>{
        
        // setLoading(true/);
        SetDataByNumber(list);
        // document.scrollTo(0);
        // setLoading(false)
        window.scrollTo({ top: 100, behavior: 'smooth' })

    },[number])



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
        SetDataByNumber(data);
        setLoading(false)
        // return data;

    }

    function handler() {
        if (list.length > data.length) {
            setdata(list.slice(0, data.length + add));
        }
    }




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


                

                    <div className="row">

                        {
                            
                          
                        <ArrowBackIosIcon  className={number!==1 || 'dic'} onClick={()=>setnumber(number-1)} />
                               
                               
                                

                        }

                        <div className="listl">

                    {
                        <a onClick={()=>setnumber(1)}>{number-1==2 || number-1==1 || number==1?'1':'1.....'}</a>
                    }

                    {
                        LinksP.map((data,index)=>{
                            if(data>1 && data<part){
                                return   <a onClick={()=>setnumber(data)}>{data}</a>
                                
                            }
                        })
                    }
                    {
                        
                        <a onClick={()=>setnumber(part)}>{number==part || number+1==part || number+2 == part?part:`...${part}`}</a>
                    }
                        </div>
                        {
                           
                            
                            
                            <ArrowForwardIosIcon
                            className={ number!==part || 'dic'}
                            onClick={()=>setnumber(number+1)}
                            ></ArrowForwardIosIcon>
                            
                        }
                    </div>

                



                // <div className="blog-container">

                //     <button className="btn" onClick={handler}>
                //         Load More
                //     </button>
                // </div>
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
