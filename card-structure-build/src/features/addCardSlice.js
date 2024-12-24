import { createSlice } from '@reduxjs/toolkit';
import { HashTable } from 'hashTable.js';

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

const addCardSlice = createSlice({
  name: 'addCard',
  initialState: {
    value: 0,
    cardList: [],
    addedCard: '',
    // eslint-disable-next-line no-magic-numbers
    table: new HashTable((word) => word.charCodeAt(0) * 999 + word.charCodeAt(word.length - 1) *
      Math.pow(2, word.length - 1)),
  },
  reducers: {
    addCard: (counter, action) => {
      if (sessionStorage.getItem('cards') !== null) {
        counter.table = counter.table.getTableFromList();
      }
      const cardName = action.payload.name.trim();
      
        const newCard = new Card(cardName);
        counter.table.add(newCard);
        sessionStorage.setItem('cards', JSON.stringify(counter.table.getListFromTable()));
        console.log('Updated Card List:', counter.table.getListFromTable());
        counter.addedCard = `Successfully Added Card '${cardName}' To Collection!`;
    },
  },
});
export default addCardSlice;

export const {
  addCard,
} = addCardSlice.actions;

export function selectAddedCard(state) {
  return state.addCard.addedCard;
}