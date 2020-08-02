import { useState } from 'react';

import { useList } from './useList';

export const useCarToolStore = (initialCars = []) => {

  const [ cars, appendCar, replaceCar, removeCar] = useList(initialCars);

  const [ editCarId, setEditCarId ] = useState(-1);

  const appendAndCancelCar = (car) => {
    appendCar(car);
    setEditCarId(-1);
  };

  const replaceAndCancelCar = (car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const removeAndCancelCar = (carId) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  return [
    cars, editCarId,
    appendAndCancelCar, replaceAndCancelCar, removeAndCancelCar,
    setEditCarId, () => setEditCarId(-1),
  ];

};