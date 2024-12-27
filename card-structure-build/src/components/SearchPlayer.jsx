
import {Card} from '../features/addCard';


import {useState} from 'react';
import {useEffect} from 'react';

import { useHashtable } from './HashtableContext';
import CardGrid from './CardGrid';

export default function SearchPlayer() {
    
    const [search,setSearch] = useState("");
    const [player, setPlayer] = useState(null);
    
    const hashtable = useHashtable(); 

    const updateSearch = (ev) => {
        setSearch(ev.target.value);
    }
    async function fetchCard() {
        const response = hashtable.findCardFromName(search);
        //console.log(response);
        console.log(search);
       if(response === 0){
        setPlayer(null);
       }else{
        setPlayer(response);
        console.log(player);
       }
       
      }
    
      useEffect(() => {
        if (search !== "") {
            fetchCard();
        }
      }, [search]);
   
    return(
        <>
            <form className = "searchForm" >
                <input name = "search" id = "search "type = "search" value = {search} onChange = {updateSearch} />
            </form>
            {player ? (
                <CardGrid players={[player]} />
            ) : (
                <p>No player found.</p>
            )}
        </>
    )   
}