
//child component - recieves props
function Card(props) {
    const {title, desc} = props; //destructuring
    return (
        <div className='card'>
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="details">
                <p>
                    {desc}
                </p>
            </div>
            <div className="buy">
                <button className='btn'>Buy Now</button>
            </div>
        </div>
    )
}

export default Card;