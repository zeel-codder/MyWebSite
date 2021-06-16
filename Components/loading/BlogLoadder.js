// import LoadShort from './LoderShort';
import loadable from '@loadable/component'
const LoadShort= loadable(() => import('./LoderShort'))
import React from 'react';

const BlogLoad = () => {



    return (
        <>
           <LoadShort></LoadShort>
           <LoadShort></LoadShort>
           <LoadShort></LoadShort>
           <LoadShort></LoadShort>
           <LoadShort></LoadShort>
        </>
    )
}

export default BlogLoad;