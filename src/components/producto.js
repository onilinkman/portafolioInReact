import React from "react";
import "./style/producto.css";

class Producto extends React.Component {
  render() {
    return (
      <div className="producto-body">
        <div className="producto-Cabezera">
          <p>{this.props.productoNombre}</p>
        </div>
        <div className="cuerpo">
          <img
            className="producto-imagen"
            alt="imagen producto"
            src={this.props.imagenUrl}
          />

          <div className="producto-datos">
            <p className="datos-descripcion">
              {this.props.productoDescripcion}
            </p>
            <p className="datos-web">Online: {this.props.productoWeb}</p>
            <p className="datos-categoria">
              Categoria: {this.props.productoCategoria}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Producto;
