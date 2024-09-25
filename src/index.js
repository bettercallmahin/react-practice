import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

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


//component creation
function Card() {
  return <div className='card'>
    <h2 className='h2style'>{firstName} {lastName}</h2>
    <p className='pstyle'>
      This is a To-Do App
    </p>
    <p className='pstyle'>Today is: {dateName}/{monthName + 1}/{yearName}</p>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className="h1style largeText">TODO App</h1>
    <Card /> {/* Card call */}
    <Card /> {/* Card call */}
    <Card /> {/* Card call */}

  </div>

);
