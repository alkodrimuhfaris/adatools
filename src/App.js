import "./App.css";
import "./App.scss";
import "./pages/style.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Layout from "./component/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/app/:parent/:child" component={Layout} />
          <Route path="/bsc" component={Layout} />
          <Route path="/ether" component={Layout} />
          <Route path="/polygon" component={Layout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
