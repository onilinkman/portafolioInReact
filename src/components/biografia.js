import React from "react";
import "./style/biografia.css";
var datos = require("../components/textos/biografia.json");
class Biografia extends React.Component {
  render() {
    return (
      <div className="biografia-cuerpo">
        <h2 className="biografia-titulo">{datos.biografiaTitulo}</h2>
        <p className="biografia-texto">{datos.biografiaTexto}</p>
      </div>
    );
  }
}

export default Biografia;
