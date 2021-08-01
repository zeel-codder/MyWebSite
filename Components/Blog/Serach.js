import React from 'react';
import { useState, useEffect } from 'react';
// import SearchIcon from '@material-ui/icons/Search';
import { WebLink } from '@const/List';
import { List } from '@material-ui/core';
import Topics from '../footer/data';
// import Link from 'next/lin'
import PageviewIcon from '@material-ui/icons/Pageview';
import { useRouter } from 'next/router';


export default function Search({ data }) {

    const [query, setquery] = useState("");
  
    const [list, setlist] = useState([]);
  
    const router=useRouter();

    // console.log(data)

    function findList(datadic,isT,query) {
        const regex = new RegExp(query, 'gi');

        // [1].filter
        // console.log(d/ata==temdata)
        const temdata = []
        for (let i = 0; i < datadic.length; i++) {
            temdata.push({ ...datadic[i] });
        }
        
        
        const tem = temdata.filter((item) => {
            const { title, topic } = item;
            // console.log(tem)
            // console.log(name,topic);
            // console.log(topic.match(regex));
            return title.match(regex) || (! isT && topic.match(regex));
        });

        // return []
        return tem.map((item) => {

            let { title, topic } = item;
            // console.log(name,topic);


            title = title.replace(regex, `<span class="hl">${query}</span>`);
            // console.log(text)

            item.title = title;


            if(!isT){

                topic = topic.replace(regex, `<span class="hl">${query}</span>`);
                
                
                item.topic = topic;
            }


            return item;
        });

    }


    useEffect(() => {
        if (query !== "") {

            const new_list = findList(data,false,query);

            

            setlist(new_list)
        } else {
            setlist([])
        }
    }, [query])

  
    
    
    
    return (
        <div className="Serach form" id="Read">


            <span className="row Topicl">
            <PageviewIcon  className="sicon" />
           

            {/* <span for="cars">Topics:</span> */}

            <select className="item1"  name="cars" id="cars"  
            placeholder="Topics.."
            
            onChange={(e)=>{

                // console.log(e.target.value)

                if(e.target.value=='-'){
                    return;
                }


                if(e.target.value=='all'){
                    router.push(WebLink)
                   return;
                }
                
                router.push(WebLink + `/topic/${e.target.value}`)
                
            }}>
                <>
                <option  value={'-'} key={-2}>
                            Topics
                          
                            </option>
                <option  value={'all'} key={-1}>
                            all
                          
                            </option>

                {
                    Topics.map((data,index)=>{
                        return (
                            <option  value={data.link} key={index}>
                               

                            {data.title}
                                
                          
                            </option>
                        )
                    })
                }
                </>

                
            
            </select>
                </span>


            <input className="form-input" type="search" name="search" value={query}
                onChange={(e) => setquery(e.target.value)}
                placeholder="Search Blogs..."
                autoComplete="off"
            />


            <ul className={`item item2 ${list.length===0 || 'scroll-list'} `}>

                {
                    list.map((value, index) => {
                        const { title, topic, name } = value;

                        return (
                            <li key={index} title={topic}>
                                <a href={WebLink + `/blog/${name}`}>
                                    <span className="title" dangerouslySetInnerHTML={{ __html: topic }}></span>
                                    <a href={WebLink + `/blog/${name}`}>
                                        <span className="text" dangerouslySetInnerHTML={{ __html: title }}>
                                        </span>
                                    </a>
                                </a>
                            </li>
                        )

                    })
                }

            </ul>

        </div>
    )
}