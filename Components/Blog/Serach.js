import React from 'react';
import { useState ,useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';
import { WebLink } from '@const/List';


export default function Search({data}) {

    const [query,setquery]=useState("");
    const [list,setlist]=useState([]);


    function findList(){
        const regex= new RegExp(query, 'gi');
        
        // [1].filter
        // console.log(d/ata==temdata)
        const temdata=[]
        for(let i=0;i<data.length;i++){
            temdata.push({...data[i]});
        }
        
        const tem= temdata.filter((item)=>{
            const {title,topic}=item;
            // console.log(name,topic);
            console.log(topic.match(regex));
            return title.match(regex) || topic.match(regex);
        });
        
        // console.log(tem)
        return tem.map((item)=>{
        
            let {title,topic}=item;
            // console.log(name,topic);

        
                        title=title.replace(regex, `<span class="hl">${query}</span>`);
                        // console.log(text)
                
                    item.title=title;
               

                    
                       topic=topic.replace(regex, `<span class="hl">${query}</span>`);
                    
                    
                    item.topic=topic;
                
            
            return item;
        });
    
    }


    useEffect(() => {
        if(query!==""){

            const new_list=findList();
            // console.log(typeof(Array.from(new_list)))
            // console.log(data);
            
            setlist(new_list)
        }else{
            
            setlist([])
        }
    }, [query])



    return (
       <div className="Serach form"  id="Read">
           <SearchIcon />
           <input  className="form-input" type="text" name="search" value={query} 
           onChange={(e)=>setquery(e.target.value)}
           placeholder="Search Blogs..."
           autoComplete="off"
           /> 

           <ul className="item">

               {
                   list.map((value,index)=>{
                    const {title,topic,name}=value;

                    return (
                    <li key={index} title={topic}>
                        <span className="title"  dangerouslySetInnerHTML={{ __html: topic }}></span>
                        <Link href={WebLink+`/blog/${name}`}>
                        <span  dangerouslySetInnerHTML={{ __html: title }}>
                        </span>
                        </Link>
                        
                        
                        </li>
                    )

                   })
               }

           </ul>
       </div>
    )
}