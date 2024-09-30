import React from "react";
import Card from "./components/Card";
import Data from "./data.json"

function App() {
    return (
        <div className="container">

            <div className="header">
                <h1>Items</h1>
            </div>

            <div className="card-holder">
                <Card title={Data[0].title} desc={Data[0].description}/>
                <Card title={Data[1].title} desc={Data[1].description}/> 
                <Card title={Data[2].title} desc={Data[2].description}/> 
            </div>
        </div>
    )
}

export default App;