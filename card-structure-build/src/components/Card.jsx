import "../styles/Card.css";
import { useHashtable } from './FavoriteHashTableContext';
import PropTypes from 'prop-types';

function Card(props) {
  const favTable = useHashtable();
  

  const buttonClick = () => {
    favTable.add(props.player)
 
  }
  
  return (

    <div className="container">
       <div className="Card">
           <div className="front">
                <h2>{props.player.name}</h2>
              
              <img
                src={props.player.image}
                alt="Player image"
                onError={(e) => {
                  e.target.src = 'players/undefined.png';
                }}
              />
           </div>
           <div className="back">
           <ul>
            <li>Points: {props.player.points}</li>
            <li>Rebounds: {props.player.rebounds}</li>
            <li>Assists: {props.player.assists}</li>
            <li>Accuracy: {props.player.accuracy}</li>
          </ul>
      <button onClick={buttonClick}>Add to Favorites</button>
           </div>
    </div>
    </div>

   
  );
}

Card.propTypes = {
  player: PropTypes.object,
};

export default Card;
