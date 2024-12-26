import { useState } from "react";
import "../styles/Card.css";
import { useHashtable } from './FavoriteHashTableContext';
import PropTypes from 'prop-types';

function FavCard({ player }) {
  console.log('Hello');
  const favTable = useHashtable();
  console.log(favTable);

  const buttonClick = () => {
    favTable.delete(player)
    console.log(favTable);
  }
  
  return (
    <div className="Card">
      <h2>{player.name}</h2>
      <ul>
      <img
        src={player.image}
        alt="Player image"
        onError={(e) => {
          e.target.src = 'players/undefined.png';
        }}
      />
        <li>Points: {player.points}</li>
        <li>Rebounds: {player.rebounds}</li>
        <li>Assists: {player.assists}</li>
        <li>Accuracy: {player.accuracy}</li>
      </ul>
      <button onClick={buttonClick}>Remove From Favorites</button>
    </div>
  );
}

export default FavCard;
