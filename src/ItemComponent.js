import React from "react";


export default function ItemComponent(props){
    const status = props.status;
    return (
        
            <li>Item desc.:{props.status} {props.name} <br/> Status: {status ? <span><b>Finalizado</b></span> : <span>Não Finalizado</span>}</li>
            
    )
}