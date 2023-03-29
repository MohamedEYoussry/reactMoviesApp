import './card.css'
const Cards = (props) => {
    return (
        <div className='card' style={{backgroundColor:props.color}}>
            <p>Portfolio Card</p>
        </div>
    )
}

export default Cards