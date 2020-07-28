import React, { useState } from 'react';

import { useList } from '../hooks/useList';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, appendCar, removeCar ] = useList(initialCars.concat());

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={removeCar} />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
    </>
  );

};