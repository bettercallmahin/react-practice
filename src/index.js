import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstName = 'Mahin';
const lastName = 'Muntasir';
const date = new Date()
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

//css inline styling

// const h1Style = {

//   fontFamily: "poppins",
//   fontSize: "36px",
//   backgroundColor: "cyan",
//   padding: "10px",
//   borderRadius: "10px",
//   textAlign: "center"

// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className="h1style largeText">TODO App</h1>
    <h2>{firstName} {lastName}</h2>
    <p>
      This is a To-Do App
    </p>
    <p>Today is: {dateName}/{monthName + 1}/{yearName}</p>

  </div>

);
