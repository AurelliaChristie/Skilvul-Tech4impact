import React from "react";
import { useSelector } from "react-redux";

export default function ListBookmark(){
    const selector = useSelector(state => state.bookmark)

    return(
        <React.Fragment>
            <ul>
                {selector.map((item) => {
                    return <li>{item.title}</li>
                })}
            </ul>
        </React.Fragment>
    )
}