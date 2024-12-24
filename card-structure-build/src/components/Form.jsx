import {Card} from '../features/addCard';
import {useState} from 'react';

//https://legacy.reactjs.org/docs/forms.html
function Form() {
    const [playerCard, setPlayerCard] = useState("");
    let card = new Card();
    setPlayerCard(card);
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
        //const target = ev.target;
        card = new Card(playerCard.name,"", playerCard.points, playerCard.rebounds,playerCard.assists, 1);
       setPlayerCard(card);

    };
    console.log(playerCard);
    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label for = "name"> Player Name</label>
                <input id = "name" name = "name" type = "name" value = {playerCard.name}></input>
            </div>
            <div>
                <label for ="points"> Points</label>
                <input id = "points" name = "points" type = "number"value = {playerCard.points}></input>
            </div>
            <div>
                <label for = "rebounds"> Rebounds</label>
                <input id = "rebounds" name = "rebounds" type = "number"value = {playerCard.rebounds}></input>
            </div>
            <div>
                <label for = "assists"> Assists</label>
                <input id = "assists" name = "assists" type = "number"value = {playerCard.assists}></input>
            </div>
            <button name = "submit">Add Card</button>
        </form>
    )   
}

export default Form;