import NavBar from '../Navbar'
import Footer from '../Footer'
import CardGrid from '../CardGrid'
import {Card} from '../../features/addCard';


import {useState} from 'react';
import {useEffect} from 'react';

import { useHashtable } from '../HashtableContext';
import { HashTable } from '../../features/hashTable';

function Home(){

    //Navigation
    
    const hashtable = useHashtable();
    
    const [listOfPlayers, setListOfPlayers] = useState(hashtable.getListFromTable());
    //Fetching Players
    const [players, setPlayers] = useState([]);
    //console.log(listOfPlayers);
    async function fetchPlayers() {
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
       
        
        
    }
    
    
    
    useEffect(() => {
        fetchPlayers();
       
        console.log(hashtable);
      }, []);
    
      
      //console.log(hashtable.getListFromTable());
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
        //console.log(hashtable);
    });
    useEffect(() => {
        setListOfPlayers(hashtable.getListFromTable());
        console.log(hashtable);
      }, [players]);
    
    //shuffle cards
    const handleSubmit = (ev) => {
        ev.preventDefault();
        setListOfPlayers(hashtable.shuffle());
        console.log(listOfPlayers);
    };

    return(
        <>
            <header>
                <NavBar />
            </header>
            <h1>Players</h1>
                <form onSubmit = {handleSubmit}>
                    <button className="shuffle" >Shuffle</button>
                </form>
            <main>
                <CardGrid players = {listOfPlayers}/>
            </main>
            <Footer />
        </>
    );
}

export default Home;