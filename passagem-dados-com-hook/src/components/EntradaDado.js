import React from "react";

const EntradaDado = ({ userName, setUserName }) => {
  return (
    <input
      type="text"
      placeholder="Seu nome"
      defaultValue={userName}
      onChange={(event) => setUserName(event.target.value)}
    />
  )
}

export default EntradaDado;