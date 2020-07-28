import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { valueToNaN, nanToValue } from '../utils';

export const CarTool = ({ cars: initialCars }) => {

  const [ carForm, setCarForm ] = useState({
    make: '', model: '', year: NaN, color: '', price: NaN,
  });

  const [ cars, setCars ] = useState(initialCars.concat());

  const change = (e) => {

    setCarForm({
      // object spread operator
      ...carForm, // copy the original color form
      [ e.target.name ]: e.target.type === 'number'
        ? valueToNaN(e.target.value) : e.target.value,
    });

  };

  const addCar = () => {

    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));

    setCarForm({
      make: '',
      model: '',
      year: NaN,
      color: '',
      price: NaN,
    });


  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
      <form>
        <div>
          <label htmlFor="make-input">Make</label>
          <input type="text" id="make-input" name="make"
            value={carForm.make} onChange={change} />
        </div>
        <div>
          <label htmlFor="model-input">Model</label>
          <input type="text" id="model-input" name="model"
            value={carForm.model} onChange={change} />
        </div>
        <div>
          <label htmlFor="year-input">Year</label>
          <input type="number" id="year-input" name="year"
            value={nanToValue(carForm.year)} onChange={change} />
        </div>
        <div>
          <label htmlFor="color-input">Color</label>
          <input type="text" id="color-input" name="color"
            value={carForm.color} onChange={change} />
        </div>
        <div>
          <label htmlFor="price-input">Price</label>
          <input type="number" id="price-input" name="price"
            value={nanToValue(carForm.price)} onChange={change} />
        </div>
        <button type="button" onClick={addCar}>Add Car</button>
      </form>
    </>
  );

};