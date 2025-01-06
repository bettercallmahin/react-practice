import React from 'react'; // Import React library
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique keys

// Define List component that receives data as a prop
const List = ({ data }) => {
    return (
        <div>
            {/* Map over the data array to render each item */}
            {data.map((item) => {

                 // Generate a UUID for each item
                 const uniqueID = uuidv4();
 
                 // Log the generated UUID to the console
                 console.log(`Generated UUID: ${uniqueID}`);

                // Destructure the item object to extract id, title, and description
                const { title, description } = item;

                return (
                    <div key={uuidv4()}> {/* Use a unique key for each item */}
                        <h3>{title}</h3> {/* Display the title of the item */}
                        <p>{description}</p> {/* Display the description of the item */}
                    </div>
                );
            })}
        </div>
    );
};

export default List; // Export List component as default
