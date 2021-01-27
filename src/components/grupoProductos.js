import React from "react";

import "./style/grupoProductos.css";
import Producto from "./producto";

class GrupoProductos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,

      data: [],
    };
  }

  componentDidMount() {
    fetch("http://158.124.30.108:8000/api/v1/productos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        this.setState({ loading: false, data: data.data });
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }

  componentDidUpdate() {
    console.log("me ejecuto");
  }

  /*componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }*/

  render() {
    console.log("df");
    if (this.state.loading === true) {
      return <div>Cargando...</div>;
    }
    return (
      <div className="grupoProducto-cuerpo">
        <div className="grupo-unstyled">
          {this.state.data.map((producto) => {
            return (
              <li key={producto.idProducto}>
                <Producto
                  productoNombre={producto.nombre}
                  imagenUrl={producto.imageUrl}
                  productoDescripcion={producto.descripcion}
                  productoWeb={producto.esweb}
                  productoCategoria={producto.categoria}
                />
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GrupoProductos;
