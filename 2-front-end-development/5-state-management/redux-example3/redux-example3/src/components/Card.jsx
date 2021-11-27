import React from "react";
import { useDispatch } from "react-redux";
import { addBookmark } from "../store/actions";

export default function Card(props){
    const dispatch = useDispatch()

    const handleClick = (data) => {
        dispatch(addBookmark(data))
    }

    return(
        <React.Fragment>
            <h3>{props.data.title}</h3>
            <p>{props.data.content}</p>
            <button onClick={() => handleClick(props.data)}>Bookmark</button>
        </React.Fragment>
    )
}