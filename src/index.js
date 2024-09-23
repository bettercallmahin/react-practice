import React from 'react';
import ReactDOM from 'react-dom/client';

const firstName = 'John';
const lastName = 'Doe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Mahin Muntasir</h1>

    <h2>{firstName} {lastName}</h2>

  </div>

);
