import React from 'react';

export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'green', hexcode: '00ff00' },
    { id: 2, name: 'purple', hexcode: 'ff00ff' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
    { id: 4, name: 'hot pink', hexcode: 'FF69B4' },
  ];

  // const colorListItems = [];

  // imperative approach
  // for (let x = 0; x<colors.length; x++) {
  //   colorListItems.push(<li>{colors[x]}</li>);
  // }

  // declarative approach
  // semantic meaning: forEach is cause a side effect
  // colors.forEach(color => {
  //   colorListItems.push(<li>{color}</li>);
  // });

  // declarative
  // semantic meaning of map is to transform from one array to another array
  // const colorListItems = colors.map(color => <li>{color}</li>);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color => <li key={color.id}>{color.name}</li>)}
      </ul>
    </>
  );

};