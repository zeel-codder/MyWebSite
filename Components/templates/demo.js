import React,{useEffect,useState} from 'react';
import Prism from 'prismjs';

export default function Custom404({children}) {

    useEffect(() => {
          Prism.highlightAll()
      }, [])
    
    return (
        <>
            {children}
        </>
    )
  }