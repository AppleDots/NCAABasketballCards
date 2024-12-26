import { createContext, useContext, useState } from 'react';
import {HashTable} from '../features/hashTable.js'

// Create a context
const HashtableContext = createContext();

// Provide the context

export const HashtableProvider = ({ children }) => {
  //Create HashTable for Home Page(All Players)
  const [hashtable, setHashtable] = useState(new HashTable((card) => card.charCodeAt(0) * 999 + card.charCodeAt(card.length - 1) *
  Math.pow(2, card.length - 1)));

  return (
    <HashtableContext.Provider value={{ hashtable, setHashtable }}>
      {children}
    </HashtableContext.Provider>
  );
};

// Hook to use the context
export const useHashtable = () => useContext(HashtableContext);