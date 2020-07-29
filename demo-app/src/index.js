import React from 'react';
import ReactDOM from 'react-dom';

import { ColorToolProvider } from './contexts/colorToolContext';
import { ColorToolContainer } from './containers/ColorToolContainer';
import { CarTool } from './components/CarTool';


const carList =  [
  { id: 1, make: 'Ford', model: 'Fusion', year: 2020, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 135000 },
];

ReactDOM.render(
  <>
    <ColorToolProvider>
      <ColorToolContainer />
    </ColorToolProvider>
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);
