import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Book from "./components/Book/Book";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Welcome from "./components/Welcome/Welcome";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name : {loggedInUser.name}</p>
      <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
              <Welcome/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <PrivateRoute path="/book/:bedType">
              <Book />
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
