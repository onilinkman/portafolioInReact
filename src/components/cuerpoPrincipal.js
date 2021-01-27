import React from "react";

import Biografia from "./biografia";
import GrupoProductos from "./grupoProductos";
import BarDatos from "./barDatos";

import "./style/cuerpoPrincipal.css";

class CuerpoPrincipal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-body">
        <Biografia />
        <GrupoProductos />
        <BarDatos />
      </div>
    );
  }
}

export default CuerpoPrincipal;
