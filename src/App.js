import React from "react";
import Card from "./components/Card";

function App() {
    return (
        <div className="container">

            <div className="header">
                <h1>Items</h1>
            </div>

            <div className="card-holder">
                <Card title="Item 1" desc="this is description 1"/>
                <Card title="Item 2" desc="this is description 2"/> 
                <Card title="Item 3" desc="this is description 3"/> 
            </div>
        </div>
    )
}

export default App;