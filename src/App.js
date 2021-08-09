import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Blog1 from "./pages/BlogPages/Blog1";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/how-to-stand-out-from-the-crowd"
            component={Blog1}
          />
          <Route
            exact
            path="/mistakes-a-start-up-should-avoid-doing"
            component={Blog1}
          />
          <Route
            exact
            path="/insights-to-grow-your-business"
            component={Blog1}
          />
          <Route
            exact
            path="/understanding-the-potential-of-tech-start-ups-in-india"
            component={Blog1}
          />
          <Route exact path="/" component={Home} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
