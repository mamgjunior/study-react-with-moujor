import React from "react";
import { NavLink } from "react-router-dom";

const Navegacao = () => {
    const linkCorrente = {
        color: '#027399'
    }

    return (
        <ul>
            <li>
                <NavLink to='/' activeStyle={{ color: '#027399' }} exact>Home</NavLink>
            </li>
            <li>
                <NavLink exact activeStyle={linkCorrente} to='/frontend'>Frontend</NavLink>
            </li>
            <li>
                <NavLink exact activeStyle={linkCorrente} to='/programacao'>Programação</NavLink>
            </li>
            <li>
                <NavLink exact activeStyle={linkCorrente} to='/design'>Design</NavLink>
            </li>
            <li>
                <NavLink exact activeStyle={linkCorrente} to='/catalogo'>Catálogo</NavLink>
            </li>
        </ul>
    )
}

export default Navegacao;