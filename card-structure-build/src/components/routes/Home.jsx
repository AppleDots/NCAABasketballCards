import NavBar from '../Navbar'
import Footer from '../Footer'
import CardGrid from '../CardGrid'
import {Card} from '../../features/addCard';


import {useState} from 'react';
import {useEffect} from 'react';

import { useHashtable } from '../HashtableContext';

function Home(){

    const { hashtable, setHashtable } = useHashtable();
    
    
    //Fetching Players
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // Fetching the JSON file from the public directory
        fetch('/players.json')
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => setPlayers(data))
          .catch((error) => console.error('Error loading players:', error));
      }, []);

    //Inserting some intial data into the hashtable
    players.forEach((player) => {
        let cardPlayer = new Card(
            player.name,
            player.image,
            player.points,
            player.rebounds,
            player.assists,
            player.accuracy
        );
        hashtable.add(cardPlayer); 
    });
    
    return(
        <>
            <header>
                <NavBar />
            </header>
            <h1>Players</h1>
            <main>
                <CardGrid players = {hashtable.getListFromTable()}/>
            </main>
            <Footer />
        </>
    );
}

export default Home;