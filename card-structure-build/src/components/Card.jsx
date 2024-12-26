import "../styles/Card.css";
import { useHashtable } from './FavoriteHashTableContext';
import PropTypes from 'prop-types';

function Card(props) {
  const favTable = useHashtable();
  console.log(favTable);

  const buttonClick = () => {
    favTable.add(props.player)
    console.log(favTable);
  }
  
  return (
    <div className="Card">
      <h2>{props.player.name}</h2>
      <ul>
      <img
        src={props.player.image}
        alt="Player image"
        onError={(e) => {
          e.target.src = 'players/undefined.png';
        }}
      />
        <li>Points: {props.player.points}</li>
        <li>Rebounds: {props.player.rebounds}</li>
        <li>Assists: {props.player.assists}</li>
        <li>Accuracy: {props.player.accuracy}</li>
      </ul>
      <button onClick={buttonClick}>Add to Favorites</button>
    </div>
  );
}

Card.propTypes = {
  player: PropTypes.object,
};

export default Card;
