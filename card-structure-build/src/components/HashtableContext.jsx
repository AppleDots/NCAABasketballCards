import { createContext, useContext, useState } from 'react';
import {HashTable} from '../features/hashTable.js'
import PropTypes from 'prop-types';

// Create a context
const HashtableContext = createContext();

// Provide the context

export const HashtableProvider = ({ children }) => {
  //Create HashTable for Home Page(All Players)
  const [hashtable] = useState(new HashTable((card) => card.charCodeAt(0) * 999 + card.charCodeAt(card.length - 1) *
  Math.pow(2, card.length - 1)));

  return (
    <HashtableContext.Provider value={hashtable}>
      {children}
    </HashtableContext.Provider>
  );
};

// Hook to use the context
export const useHashtable = () => useContext(HashtableContext);