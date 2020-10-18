import React from 'react';
import Header from "./Components/Header/Header";
import Feed from "./Components/Feed/Feed";
import Profile from "./Components/Profile/Profile";
import './App.css';

function App() {
  return (
      <div>
        <Header />
        <Feed />
        <Profile />
      </div>
  );
}

export default App;
