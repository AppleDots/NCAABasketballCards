
// import PropTypes from 'prop-types';
import { useState } from 'react';

export class Card {
  constructor(name, image, points, rebounds, assists, accuracy) {
    this.name = name;
    this.image = image;
    this.points = points;
    this.rebounds = rebounds;
    this.assits = assists;
    this.accuracy = accuracy;
  }
}

export function AddCard() {

  const [name, setName] = useState('');
  console.log('Hi');
  return (
    <div>
      <div>
        <label>Enter Card Name To Add To Favorites:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      
    </div>

  )
}