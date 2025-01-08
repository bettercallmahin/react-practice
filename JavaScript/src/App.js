import React from "react"; // Import React library
import List from "./components/UniqueList/List.js"; // Import the List component
import Data from './data.json'; // Import the data from JSON file
import { v4 as uuidv4 } from 'uuid';

function App() {
    return (
        <div className="container">
            <h1>List of Items</h1> {/* Main heading of the app */}
            {/* Pass Data as a prop to the List component */}
            <List data={Data} /> 
        </div>
    );
}

export default App; // Export App component as default
