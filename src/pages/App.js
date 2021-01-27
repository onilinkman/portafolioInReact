import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Principal from "./principal";
import NotFound from "./notFound";
import Layout from "../components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
