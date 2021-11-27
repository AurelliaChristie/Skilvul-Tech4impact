import React from "react";
import ListBookmark from "./ListBookmark";
import ListCard from "./Card";

export default function Homepage(){
    return(
        <React.Fragment>
            <ListCard />
            <ListBookmark />
        </React.Fragment>
    )
}