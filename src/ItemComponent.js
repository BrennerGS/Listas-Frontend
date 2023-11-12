import React from "react";


export default function ItemComponent(props){
    const status = props.status;
    return (
        
            <li>Item desc.:{props.status} {props.name} {status ? <span>✔</span> : <span></span>}</li>
            
    )
}