import {Card} from '../features/addCard';
import {useState} from 'react';

//https://legacy.reactjs.org/docs/forms.html
function Form() {
    const [isActive, setIsActive] = useState(true);
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
        ev.preventDefault();
        //const target = ev.target;
        //console.log(checkImage('https://example.com/notAnImage.txt'));
        if(checkImage(playerCard.image)){
            setIsActive(true);
            card = new Card(playerCard.name,playerCard.image, playerCard.points, playerCard.rebounds,playerCard.assists, 1);
            console.log(playerCard.name);
            setPlayerCard(card);
            console.log(playerCard);
        }else{
            setIsActive(false);
        }
    };
    

    
    //https://stackoverflow.com/questions/55880196/is-there-a-way-to-easily-check-if-the-image-url-is-valid-or-not
    
    async function checkImage(url) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer <MY_API_KEY>");
        myHeaders.append("Cookie", "__cfduid=db290300ecfe95ec1fe3bc92c388c3c991586618117");
        myHeaders.append("Access-Control-Allow-Origin", "*");

        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let response = fetch(proxyUrl+ url, 
            { method: "GET" ,
              headers: myHeaders,
              
        });
        console.log(response.status)
        /*
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let request = new XMLHttpRequest();
        request.open("GET",proxyUrl+ url, true);
        request.send();
        request.onload = function() {
          if (request.status == 200) //if(statusText == OK)
          {
            return true;
          } else {
            return false;
          }
        }*/
    }

    /*
    async function fetchAPI() {
   
        //let formData = new FormData();
        //formData.set("priority", 71);
        let response = await fetch(proxyUrl+ url, 
          { method: "GET" ,
            headers: myHeaders,
            body: new URLSearchParams({
              'priority': updateValue,
          })
        });
         
    }
        */
    //console.log(playerCard);
    return(
        <>
            <form className = "newPlayerForm" onSubmit = {handleSubmit}>
                <div>
                    <label > Player Name</label>
                    <input id = "name" name = "name" type = "name" value = {playerCard.name} onChange = {updatePlayerCardName}></input>
                </div>
                <div>
                    <label > Image URL</label>
                    <input
                        type="file"
        name="myImage" value = {playerCard.image} onChange = {updatePlayerCardImageURL}></input>
                </div>
                <div>
                    <label > Points</label>
                    <input id = "points" name = "points" type = "number"value = {playerCard.points} onChange = {updatePlayerCardPoints}></input>
                </div>
                <div>
                    <label > Rebounds</label>
                    <input id = "rebounds" name = "rebounds" type = "number"value = {playerCard.rebounds} onChange = {updatePlayerCardRebounds}></input>
                </div>
                <div>
                    <label > Assists</label>
                    <input id = "assists" name = "assists" type = "number"value = {playerCard.assists} onChange = {updatePlayerCardAssists}></input>
                </div>
                <button type = "submit">Add Card</button>
            </form>
            <span className = {`ImageError  ${isActive ? "show" : "hide"}`} >Image url is not correct please try again</span>
        </>
    )   
}

export default Form;