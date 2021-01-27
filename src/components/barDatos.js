import React from "react";

import "./style/barDatos.css";
import ImgFb from "../recursos/fb_icon.png";
import ImgWhatsapp from "../recursos/whatsapp.png";
import ImgLinkedin from "../recursos/linkedin.png";

class BarDatos extends React.Component {
  render() {
    return (
      <div className="bar-cuerpo">
        <div className="cuerpo-datos">
          <div className="datos-lenguajes">
            <p>Lenguajes que se</p>
            <div className="lenguajes">
              <li>Java</li>
              <li>Go (Golang)</li>
              <li>JavaScript</li>
              <p> SQL</p>
              <li>MySql</li>
              <p> Paginas Web</p>
              <li>HTML</li>
              <li>Css</li>
              <p> FrameWorks/Librerias</p>
              <li>React</li>
              <p> Otros</p>
              <li>Cloud Computing (con Google cloud)</li>
              <li>Android (con Java)</li>
              <li>Godot (para Videojuegos)</li>
              <li>Git, GitHub</li>
            </div>
          </div>
        </div>

        <div className="enlaces-externos">
          <a href="https://www.facebook.com/khrysmarban">
            <img
              className="fb-img"
              alt="logo-facebook-fasdfasdfsadfsa"
              src={ImgFb}
            />
          </a>
          <a href="https://wa.link/qi2fl7">
            <img alt="logo wtp" src={ImgWhatsapp} className="fb-img" />
          </a>
          <a href="https://www.linkedin.com/in/christian-marban-785a7b152/">
            <img src={ImgLinkedin} alt="logo lin" className="fb-img" />
          </a>
        </div>
      </div>
    );
  }
}

export default BarDatos;
