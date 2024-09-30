import React from "react";
import Card from "./components/Card";

function App() {
    return (
        <div className="container">

            <div className="header">
                <h1>Items</h1>
            </div>

            <div className="card-holder">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default App;