import React from "react";

const TabelaBody = (props) => (
    <tbody>
        {
            props.livros.map((element) => (
                <tr
                    key={element.id}
                >
                    <td>{element.id}</td>
                    <td>{element.titulo}</td>
                    <td>{element.autor}</td>
                    <td>
                        <button
                            className="botao remover"
                            onClick={() => props.removerLinha(element.id)}
                        >
                            Remover
                        </button>
                    </td>
                </tr>
            ))
        }
    </tbody>
)

export default TabelaBody;
