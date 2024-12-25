
import Card from './Card'
import "../styles/Grid.css";

function CardGrid({players}) {
    
    
    return (
        <>
          <section className="Grid">
            {players.map((player) =><Card player = {player}  key = {player.id}/>)}
            </section>
        </>
      );
}

export default CardGrid;