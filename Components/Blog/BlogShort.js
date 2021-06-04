/**
 @name:BlogShort
 @type:React Component
 @param:props
 @returns: JSX of BlogShort.
 @functionality : This Component is used in Blog Component. This is used to display blog basic details on the screen.
**/


// Imports
// ====================================

// import {FcLike} from 'react-icons/fc';
// import {useGlobalContext} from '../context';
import Link from 'next/link'
import Like from './Like'

// ====================================


const BlogShort = (props) => {
    
    const { topic, data } = props;
    // const {Like}=useGlobalContext();
    
    if (data.length === 0) {
        
        return (
            <div className="Bloshort-not-found">
                <h1>{topic}</h1>
                <marquee className="alert" behavior="scroll" direction="right">There is no blog found on this topic</marquee>

            </div>
        )
    }


    return(
        <>
    <span className="title">{topic}</span>
    <div className="BlogShort">

    {
        data.map((BlogInformation)=>{
            const {id,title,img,url,like,name}=BlogInformation;
            return (
                
                
                <div className="BlogInformation" key={id}>
                    <span className="Blogtitle">{title}</span>
                    <img src={img}  alt='BlogShort Img'/> 
                    <Like like={like} isBlogShort={true}></Like>
                    {/* <h2 style={{textAlign:'center'}}><FcLike /> {like}</h2> */}
                    <Link href={`blog/${name}`} className="blog-a">
                    <button className="btn">Read more
                    </button>
                   
                    </Link>
                </div>

            )
        })
    }

    </div>
    </>
    )
}

export default BlogShort;