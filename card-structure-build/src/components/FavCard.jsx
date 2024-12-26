import "../styles/FavCard.css";
import { useHashtable } from './FavoriteHashTableContext';
import PropTypes from 'prop-types';

function FavCard(props) {
  console.log('Hello');
  const favTable = useHashtable();
  console.log(favTable);

  const buttonClick = () => {
    favTable.delete(props.player)
    console.log(favTable);
  }
  
  return (
    <div className="FavCard">
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
      <button onClick={buttonClick}>Remove From Favorites</button>
    </div>
  );
}

FavCard.propTypes = {
  player: PropTypes.object,
};

export default FavCard;
