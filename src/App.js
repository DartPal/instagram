import React from 'react';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Feed from "./Components/Feed/Feed";
import Profile from "./Components/Profile/Profile";
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Header />
              <Route exact path='/' component={Feed} />
              <Route exact path='/profile' component={Profile} />
          </div>
      </BrowserRouter>
  );
}

export default App;
