import React from "react";
import Card from "./components/Card";
import Data from "./data.json"

function App() {

    const items = [];

    for (let i = 0; i < Data.length; i++) {
        items.push(<Card title={Data[i].title} desc={Data[i].description}/>)
    }

    return (
        <div className="container">

            <h1>Hello</h1>

            {Data.map((item, index) => (
                <Card
                
                    key={index}
                    title={item.title}
                    desc={item.description}
                
                />
            )
            )}
           

        </div>
    )
}

// function App() {
//     return (
//         <div className="container">

//             <div className="header">
//                 <h1>Items</h1>
//             </div>

//             <div className="card-holder">
//             {Data.map((item) => <Card  title={item.title} desc = {item.desc}/>)}
//             </div>

//         </div>
//     )
// }

export default App;