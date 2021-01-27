import React from "react";
import "./style/encabezado.css";
import { Link } from "react-router-dom";
import NavBar from "./navBar";

class encabezado extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="encabezado-body">
          <Link to="/" className="encabezado-link">
            <img
              className="encabezado-image"
              src="https://scontent.flpb3-1.fna.fbcdn.net/v/t1.0-9/44421367_1947190745348275_3634480413402988544_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=yPRZiRMNu90AX81fncL&_nc_ht=scontent.flpb3-1.fna&oh=f4dc0ad9c2cdac53744ebcb577bb49db&oe=601307E4"
              alt="Perfil imagen"
            ></img>
            <h1 className="encabezado-nombre">
              {this.props.firstName} <br /> {this.props.lastName}
            </h1>
          </Link>
        </div>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default encabezado;
