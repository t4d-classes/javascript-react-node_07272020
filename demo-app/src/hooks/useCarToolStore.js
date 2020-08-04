import { useState, useEffect } from 'react';

import { refreshCars, appendCar, replaceCar, deleteCar } from '../services/cars';

export const useCarToolStore = () => {

  const [ cars, setCars ] = useState([]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const appendAndCancelCar = async (car) => {
    await appendCar(car);
    setCars(await refreshCars());
    setEditCarId(-1);
  };

  const replaceAndCancelCar = async (car) => {
    await replaceCar(car);
    setCars(await refreshCars());
    setEditCarId(-1);
  };

  const removeAndCancelCar = async (carId) => {
    await deleteCar(carId);
    setCars(await refreshCars());
    setEditCarId(-1);
  };

  useEffect(() => {
    refreshCars().then(cars => setCars(cars));
  }, [ ]);

  return [
    cars, editCarId,
    appendAndCancelCar, replaceAndCancelCar, removeAndCancelCar,
    setEditCarId, () => setEditCarId(-1),
  ];

};