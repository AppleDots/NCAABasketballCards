import { createContext, useContext, useState } from 'react';
import {HashTable} from '../features/hashTable.js'
import PropTypes from 'prop-types';

// Create a context
const FavHashtableContext = createContext();

// Provide the context

export function FavHashtableProvider(props) {
  //Create HashTable for Favorite Page(All Players)
  const [hashtable] = useState(new HashTable((card) => card.charCodeAt(0) * 999 + card.charCodeAt(card.length - 1) *
  Math.pow(2, card.length - 1)));

  return (
    <FavHashtableContext.Provider value={hashtable}>
      {props.children}
    </FavHashtableContext.Provider>
  );
};

// Hook to use the context
export const useHashtable = () => useContext(FavHashtableContext);

FavHashtableProvider.propTypes = {
  children: PropTypes.object,
};