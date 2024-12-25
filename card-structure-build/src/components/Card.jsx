import "../styles/Card.css";
function Card({ player }) {

  
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
        <li>Points: {player.points}</li>
        <li>Accuracy: {player.accuracy}</li>
      </ul>
    </div>
  );
}

export default Card;
