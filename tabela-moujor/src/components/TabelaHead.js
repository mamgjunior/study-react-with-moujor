import React from "react";
import Setinhas from "./Setinhas";

const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan='4'>Tabela de livros</th>
        </tr>
        <tr>
            <th>ISBN
                <Setinhas
                    column='ISBN'
                    ordenarCrescente={props.ordenarCrescente}
                    ordenarDecrescente={props.ordenarDecrescente}
                />
            </th>
            <th>
                Título
                <Setinhas
                    column='Título'
                    ordenarCrescente={props.ordenarCrescente}
                    ordenarDecrescente={props.ordenarDecrescente}
                />
            </th>
            <th>Autor
                <Setinhas
                    column='Autor'
                    ordenarCrescente={props.ordenarCrescente}
                    ordenarDecrescente={props.ordenarDecrescente}
                />
            </th>
            <th></th>
        </tr>
    </thead>
)

export default TabelaHead;
