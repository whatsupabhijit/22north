import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignInPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
