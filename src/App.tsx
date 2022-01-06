import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import layoutRouteList from './routers/index';
import RouteView from './routers/routeView';

function App() {
  return (
    <Router>
      <RouteView routes={layoutRouteList} ></RouteView>
    </Router>
  );
}

export default App;
