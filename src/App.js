import React from "react";
import Card from "./components/Card";
import Data from "./data.json"

function App() {

    let items = [];
    for (let i = 0; i < Data.length; i++) {
        items.push(
            <Card title={Data[i].title} desc={Data[i].description} />
        )
    }

    return (
        <div className="container">

            <div className="header">
                <h1>Items</h1>
            </div>

            <div className="card-holder">
                {items}
            </div>

        </div>
    )
}

export default App;