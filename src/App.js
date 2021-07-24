import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import Home from "./pages";

function App() {
  const forceRefreshed = true;

  return (
    <div className="app">
      <Router forceRefresh={forceRefreshed}>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
