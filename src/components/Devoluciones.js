import React from "react";

function Devoluciones(){
    return (
      <div className="container">
        <div className='header'>
          <h1>Devoluciones</h1>
        </div>
        <div className="input-container">
          <label>Artículo:</label>
          <input
          />
        </div>
        <div className="input-container">
          <label>Cantidad:</label>
          <input
          />
        </div>
        <button>Realizar devolución</button>
      </div>
    ); 
}
export default Devoluciones;