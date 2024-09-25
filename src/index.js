import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className="h1style largeText">TODO App</h1>
    <Card /> {/* Card call */}
    <Card /> {/* Card call */}
    <Card /> {/* Card call */}

  </div>

);
