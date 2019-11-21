import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Jawsh from "./components/Jawsh/jawsh"

import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Your App Title Here</title>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Brainstation 3D Starter</h2>
        <Jawsh />
      </header>
    </div>
  );
}

export default App;
