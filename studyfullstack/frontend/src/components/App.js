import React, { Component } from "react";

import store from "../store";
import { Provider } from "react-redux";
import Questions from "./Questions";

import Navbar from "./UI/Navbar/Nav";
import TopicFinder from "./Questions/Searcher/TopicFinder.js";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./UI/Navbar/Theme.js";
import Searcher from "./PastPaper/Searcher/Searcher.js";
import Routes from './Routes';
import PrivateRoute from './common/PrivateRoute'

// <SimpleTabs /><Searcher/>
class App extends Component {
  render() {
    return (
      <Provider store={store}>
                    <Router>
        <Navbar />
<Switch>
       {Routes.map((route) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
                            </Router>

      </Provider>
    );
  }
} 
export default App;
