import React from 'react'; // Import React library

// Define List component that receives data as a prop
const List = ({ data }) => {
    return (
        <div>
            {/* Map over the data array to render each item */}
            {data.map((item) => (
                <div key={item.id}> {/* Use a unique key for each item */}
                    <h3>{item.title}</h3> {/* Display the title of the item */}
                    <p>{item.description}</p> {/* Display the description of the item */}
                </div>
            ))}
        </div>
    );
};

export default List; // Export List component as default
 