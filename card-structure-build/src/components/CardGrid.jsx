
import Card from './Card'
import FavCard from './FavCard'
import "../styles/Grid.css";
import PropTypes from 'prop-types';

function CardGrid(props) {
    
    if (props.isFavoritePage) {
      return (
          <>
            <section className="Grid">
              {props.players.map((player) =><FavCard player = {player}  key = {player.id}/>)}
              </section>
          </>
        );
    }
    else {
      return (
        <>
          <section className="Grid">
            {props.players.map((player) =><Card player = {player}  key = {player.id}/>)}
            </section>
        </>
      );
    }
}

CardGrid.propTypes = {
  players: PropTypes.array,
  isFavoritePage: PropTypes.bool,
};
export default CardGrid;