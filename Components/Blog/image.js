import React from 'react'
import MyImage from 'next/image'
import { Link } from "react-scroll";


function Image({ src, alt ,width,height }) {
    return (
        <MyImage src={src} width={width || 1000}
            height={height || 550} alt={alt}
            quality={100}
            ></MyImage>
    )
}
function  MyLink({ link,title }) {
    return (
        <Link to={link} title={title}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        >
                                            {title}
                                        </Link>
    )
}

export {Image,MyLink}
