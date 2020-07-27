import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'green', hexcode: '00ff00' },
  { id: 2, name: 'purple', hexcode: 'ff00ff' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
  { id: 4, name: 'hot pink', hexcode: 'FF69B4' },
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);
