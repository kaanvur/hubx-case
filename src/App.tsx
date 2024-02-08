import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';

import AnimatedRouter from './components/AnimatedRouter';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App app">
        <AnimatedRouter />
        <Menu />
      </div>
    </Router>
  );
};

export default App;
