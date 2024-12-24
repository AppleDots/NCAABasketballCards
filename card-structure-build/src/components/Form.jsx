import {Card} from '../features/addCard';
import {useState} from 'react';

//https://legacy.reactjs.org/docs/forms.html
function Form() {

    let card = new Card();
    const [playerCard, setPlayerCard] = useState(card);
    

    const updatePlayerCardName = (ev) => {
        card = new Card(ev.target.value,playerCard.image, playerCard.points, playerCard.rebounds,playerCard.assists, 1);
        setPlayerCard(card);
    };
    const updatePlayerCardImageURL = (ev) => {
        card = new Card(playerCard.points,ev.target.value, playerCard.points, playerCard.rebounds,playerCard.assists, 1);
        setPlayerCard(card);
    };
    const updatePlayerCardPoints = (ev) => {
        card = new Card(playerCard.name,playerCard.image, ev.target.value, playerCard.rebounds,playerCard.assists, 1);
        setPlayerCard(card);
    };
    const updatePlayerCardRebounds = (ev) => {
        card = new Card(playerCard.name,playerCard.image, playerCard.points, ev.target.value,playerCard.assists, 1);
        setPlayerCard(card);
    };
    const updatePlayerCardAssists = (ev) => {
        card = new Card(playerCard.name,playerCard.image, playerCard.points, playerCard.rebounds,ev.target.values, 1);
        setPlayerCard(card);
    };
    const handleSubmit = (ev) => {
        //let errors[];
        ev.preventDefault();
        card = new Card(playerCard.name,playerCard.image, playerCard.points, playerCard.rebounds,playerCard.assists, 1);
        setPlayerCard(card);
        console.log(file);
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

export default Form;