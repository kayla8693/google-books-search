import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import SearchPg from "./pages/SearchPg";
import SavedPg from "./pages/SavedPg";



// import logo from "./logo.svg";
import "./App.css";

function App() {



  return (

    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={SearchPg} />
        <Route exact path="/saved" component={SavedPg} />
        <Route exact path="/saved/:id" component={SavedPg} />
      </Switch>
    
    </Router>
  );
}


export default App;
