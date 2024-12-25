import {Card} from '../features/addCard';
import {useState} from 'react';

//https://legacy.reactjs.org/docs/forms.html
export default function Form() {

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
    const handleSubmit = (ev) => {
        //let errors[];
        ev.preventDefault();
        console.log(playerCard);
        
    }
    
   
    //console.log(playerCard);
    return(
        <>
            <form className = "newPlayerForm" onSubmit = {handleSubmit} noValidate>
                <div>
                    <label > Player Name</label>
                    <input id = "name" name = "name" type = "name" value = {playerCard.name} onChange = {updatePlayerCardName} requried></input>
                </div>
                <div>
                    <label > Image </label>
                    <input id = "image" name = "image" type="name" value = {playerCard.image} onChange = {updatePlayerCardImageURL} requried></input>
                </div>
                <div>
                    <label > Points</label>
                    <input id = "points" name = "points" type = "number"value = {playerCard.points} onChange = {updatePlayerCardPoints} requried></input>
                </div>
                <div>
                    <label > Rebounds</label>
                    <input id = "rebounds" name = "rebounds" type = "number"value = {playerCard.rebounds} onChange = {updatePlayerCardRebounds} requried></input>
                </div>
                <div>
                    <label > Assists</label>
                    <input id = "assists" name = "assists" type = "number"value = {playerCard.assists} onChange = {updatePlayerCardAssists} requried></input>
                </div>
                <button type = "submit">Add Card</button>
            </form>
           
           
        </>
    )   
}

