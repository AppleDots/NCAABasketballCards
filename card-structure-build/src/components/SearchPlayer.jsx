
import {Card} from '../features/addCard';


import {useState} from 'react';
import {useEffect} from 'react';

import { useHashtable } from './HashtableContext';

export default function SearchPlayer() {
    const card = new Card();
    const [search,setSearch] = useState("");
    const [player, setPlayer] = useState(card);
    
    const hashtable = useHashtable(); 

    const updateSearch = (ev) => {
        setSearch(ev.target.value);
    }
    async function fetchCard() {
        let response = hashtable.findCardFromName(search + "");
        //console.log(response);
        console.log(search);
       if(response == 0){
        setPlayer(null);
       }else{
        setPlayer(response);
        console.log(player);
       }
       
      }
    
      useEffect(() => {
        if (search == "") {
            setPlayer(null); 
        } else {
            console.log(search);
            fetchCard();
        }
      }, [search]);
   
    return(
        <>
            <form className = "searchForm" >
                <input name = "search" id = "search "type = "search" value = {search} onChange = {updateSearch}></input>
            </form>
            {player ? (
                <Card player={player} />
            ) : (
                <p>No player found.</p>
            )}
        </>
    )   
}