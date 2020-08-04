import { useState } from 'react';

export const useList = (initialList = []) => {

  const [ list, setList ] = useState(initialList);

  const appendItem = (item) => {
    setList(list.concat({
      ...item,
      id: Math.max(...list.map(item => item.id), 0) + 1,
    }));
  };

  const replaceItem = (item) => {
    const itemIndex = list.findIndex(i => i.id === item.id);
    const newList = list.concat();
    newList[itemIndex] = item;
    setList(newList);
  };

  const removeItem = (itemId) => {
    setList(list.filter(item => item.id !== itemId));
  };

  return [
    list,
    appendItem,
    replaceItem,
    removeItem,
    setList,
  ];

};