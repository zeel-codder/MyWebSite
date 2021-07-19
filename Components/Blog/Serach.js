import React from 'react';
import { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';
import { WebLink } from '@const/List';
import Topics from '../footer/data'


export default function Search({ data }) {

    const [query, setquery] = useState("");
    const [queryTopic, setqueryTopic] = useState("");
    const [list, setlist] = useState([]);
    const [Topic, settopic] = useState([]);


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
            // console.log(typeof(Array.from(new_list)))
            // console.log(data);

            setlist(new_list)
        } else {

            setlist([])
        }
    }, [query])

    useEffect(() => {
        if (queryTopic !== "") {

            const new_list = findList(Topics,true,queryTopic);
          

            settopic(new_list)
        } else {

            settopic([])
        }
    }, [queryTopic])
    
    
    
    return (
        <div className="Serach form" id="Read">
            <SearchIcon />
            <input list="browsers" 
            type="Search"
            className="form-input" name="browser" id="browser" placeholder="Select  Blog Topic..." 
            onChange={(e) => setqueryTopic(e.target.value)}
            autoComplete="off"
            />
            <ul className={`item item ${Topic.length===0 || 'scroll-list' }`}>

                {
                    Topic.map((value, index) => {
                        const { title, link } = value;

                        return (
                            
                            <li key={index}>
                                <div>

                                    <a href={WebLink + `/topic/${link}`}>
                                        <span className="text" dangerouslySetInnerHTML={{ __html: title }}>
                                        </span>
                                    </a>
                                </div>


                            </li>
                        )

                    })
                }

            </ul>


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
                                <div>
                                    <span className="title" dangerouslySetInnerHTML={{ __html: topic }}></span>
                                    <a href={WebLink + `/blog/${name}`}>
                                        <span className="text" dangerouslySetInnerHTML={{ __html: title }}>
                                        </span>
                                    </a>
                                </div>


                            </li>
                        )

                    })
                }

            </ul>

        </div>
    )
}