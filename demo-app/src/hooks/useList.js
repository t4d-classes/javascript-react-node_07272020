import { useState } from 'react';

export const useList = (initialList = []) => {

  const [ list, setList ] = useState(initialList);

  const appendItem = (item) => {
    setList(list.concat({
      ...item,
      id: Math.max(...list.map(item => item.id), 0) + 1,
    }));
  };

  const removeItem = (itemId) => {
    setList(list.filter(item => item.id !== itemId));
  }

  return [
    list,
    appendItem,
    removeItem,
  ];

};