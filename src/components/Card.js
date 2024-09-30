
//child component - recieves props
function Card(props) {
    return (
        <div className='card'>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="details">
                <p>
                    {props.desc}
                </p>
            </div>
            <div className="buy">
                <button className='btn'>Buy Now</button>
            </div>
        </div>
    )
}

export default Card;