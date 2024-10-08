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
            {Data.map((item) => <Card  title={item.title} desc = {item.desc}/>)}
            </div>

        </div>
    )
}

export default App;