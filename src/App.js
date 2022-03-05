import React from 'react';

import {Navbar} from './components/index';
import Routing from './routes';

import './scss/main.scss';

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Routing />
    </div>
  )
}

export default App;