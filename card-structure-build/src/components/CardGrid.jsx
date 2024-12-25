import {useState} from 'react';
import {useEffect} from 'react';
import Card from './Card'
import "../styles/Grid.css";

function CardGrid() {
    const [players, setPlayers] = useState([]);
    async function fetchPlayers() {
      const resp = await fetch("players.json");
      const jsonResponse = await resp.json();
      
     
      setPlayers(jsonResponse); 
  
    }
    useEffect(() => {
      fetchPlayers();
    }, []);
    return (
        <>
          <section className="Grid">
            <h1>Players</h1>
            
            {players.map((player) =><Card player = {player}  key = {player.id}/>)}
            </section>
        </>
      );
}

export default CardGrid;