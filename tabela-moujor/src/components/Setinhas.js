import React from "react";

const Setinhas = (props) => (
    <div
        className="container-setinhas"
    >
        <div onClick={() => props.ordenarCrescente(props.column)} >&#129093;</div>
        <div onClick={() => props.ordenarDecrescente(props.column)}>&#129095;</div>
    </div>
);

export default Setinhas;
