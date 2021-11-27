import React from "react";
import Card from "./Card";


export default function ListCard(){
    
    const state = [{
        id:1,
        title:"Squid Game",
        content:"Thriller"
    },
    {   
        id:2,
        title:"Danur",
        content:"Horror"
    },
    {   
        id:3,
        title:"Money Heist",
        content:"Heist"
    }
    ]
    
    return(
        <React.Fragment>
            {state.map((item) =>{
                return <Card data={item}/>
            }
            )}
        </React.Fragment>
    )
}