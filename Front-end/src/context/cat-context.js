import { createContext } from 'react';

export const CatContext = createContext({
  
  loadedCats: null,
  setCat:(data) => {}
  
});