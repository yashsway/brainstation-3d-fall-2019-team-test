import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Helmet } from 'react-helmet';
import Jawsh from "./components/Jawsh/jawsh";
import Card from './components/Card';
import Input from './components/input/Input';
import Image from "./components/Image"

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
        <Image />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Brainstation 3D Starter</h2>
        <Jawsh />
        <Card title="test" content="this is cool"></Card>
        <Input />
      </header>
    </div>
  );
}

export default App;
