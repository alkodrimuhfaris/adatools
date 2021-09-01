import "./App.css";
import "./App.scss";
import "./pages/style.scss";
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Layout from "./component/Layout";
import store from "./redux/store";
import actions from "./redux/actions";

function App() {
  return (
    <Provider store={store}>
      <MainLocalStorage />
    </Provider>
  );
}

function MainLocalStorage() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const theme = localStorage.getItem("theme");
      console.log(theme)
      dispatch(actions.theme.editTheme(theme));
    }
  }, []);

  return (
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
  );
}

export default App;
