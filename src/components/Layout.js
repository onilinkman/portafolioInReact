import React from "react";

import Encabezado from "./encabezado";

function Layout(props) {
  return (
    <React.Fragment>
      <Encabezado firstName="Christian" lastName="Marban Callisaya" />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
