import React, { createContext, useContext } from 'react';

import { useColorToolStore } from '../hooks/useColorToolStore';

const ColorToolContext = createContext(null);

const colorList = [
  { id: 1, name: 'green', hexcode: '00ff00' },
  { id: 2, name: 'purple', hexcode: 'ff00ff' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
  { id: 4, name: 'hot pink', hexcode: 'FF69B4' },
];

export const ColorToolProvider = ({ children }) => {

  return (
    <ColorToolContext.Provider value={useColorToolStore(colorList)}>
      {children}
    </ColorToolContext.Provider>
  );

};

export const useColorToolStoreContext = () => {
  // useContext hook returns the value on the context
  return useContext(ColorToolContext);
};

