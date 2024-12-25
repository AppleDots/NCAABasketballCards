import NavBar from '../Navbar'
import Footer from '../Footer'
import CardGrid from '../CardGrid'
import {Card} from '../../features/addCard';

import {HashTable} from '../../features/hashTable'

import {useState} from 'react';
import {useEffect} from 'react';

function Home(){
    //Create HashTable for Home Page(All Players)
    //let card = new Card();
    let allPlayers = new HashTable((card) => card.charCodeAt(0) * 999 + card.charCodeAt(card.length - 1) *
    Math.pow(2, card.length - 1));
    
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
        allPlayers.add(cardPlayer); 
    });
    console.log(allPlayers);
    return(
        <>
            <header>
                <NavBar />
            </header>
            <h1>Players</h1>
            <main>
                <CardGrid />
            </main>
            <Footer />
        </>
    );
}

export default Home;