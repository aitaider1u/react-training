import myImage from './assets/zidane-pic.png';

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={myImage} alt="profile picture" />
            <h2 className='card-title' >Zinedine Zidane</h2>
            <p className='card-text' >Football coatch and old Football player</p>
        </div>
    );s
}

export default Card;