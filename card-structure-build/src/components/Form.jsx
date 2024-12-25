import {Card} from '../features/addCard';
import {useState} from 'react';

import { useHashtable } from '../components/HashtableContext';

//https://legacy.reactjs.org/docs/forms.html
export default function Form() {

    //Global HashTable
    const { hashtable, setHashtable } = useHashtable();

    let card = new Card();
    const [playerCard, setPlayerCard] = useState(card);
    

    const updatePlayerCardName = (ev) => {
        
        setPlayerCard((prevCard) => ({
            ...prevCard,name: ev.target.value
        }));
    };
    const updatePlayerCardImageURL = (ev) => {
        setPlayerCard((prevCard) => ({
            ...prevCard,image: ev.target.value
        }));
        
    };
    const updatePlayerCardPoints = (ev) => {
        setPlayerCard((prevCard) => ({
            ...prevCard,points: ev.target.value
        }));
       
    };
    const updatePlayerCardRebounds = (ev) => {
        setPlayerCard((prevCard) => ({
            ...prevCard,rebounds: ev.target.value
        }));
        
    };
    const updatePlayerCardAssists = (ev) => {
        setPlayerCard((prevCard) => ({
            ...prevCard,assists: ev.target.value
        }));
    };
    const updatePlayerCardAccuracy = (ev) => {
        setPlayerCard((prevCard) => ({
            ...prevCard,accuracy: ev.target.value
        }));
        
    };
    const handleSubmit = (ev) => {
        //let errors[];
        ev.preventDefault();
        console.log(playerCard);
        hashtable.add(playerCard); 
        
    }
    
   
    //console.log(playerCard);
    return(
        <>
            <form className = "newPlayerForm" onSubmit = {handleSubmit} >
                <div>
                    <label > Player Name</label>
                    <input id = "name" name = "name" type = "name" value = {playerCard.name} onChange = {updatePlayerCardName} required></input>
                </div>
                <div>
                    <label > Image </label>
                    <input id = "image" name = "image" type="name" value = {playerCard.image} onChange = {updatePlayerCardImageURL} required></input>
                </div>
                <div>
                    <label > Points</label>
                    <input id = "points" name = "points" type = "number" step="0.1" value = {playerCard.points} onChange = {updatePlayerCardPoints} required></input>
                </div>
                <div>
                    <label > Rebounds</label>
                    <input id = "rebounds" name = "rebounds" type = "number" step="0.1" value = {playerCard.rebounds} onChange = {updatePlayerCardRebounds} required></input>
                </div>
                <div>
                    <label > Assists</label>
                    <input id = "assists" name = "assists" type = "number" step="0.1" value = {playerCard.assists} onChange = {updatePlayerCardAssists} required></input>
                </div>
                <div>
                    <label > Accuracy</label>
                    <input id = "accuracy" name = "accuracy" type = "number" step="0.1" value = {playerCard.accuracy} onChange = {updatePlayerCardAccuracy} required></input>
                </div>
                <button type = "submit">Add Card</button>
            </form>
           
           
        </>
    )   
}

