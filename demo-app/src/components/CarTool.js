import React from 'react';

import { useCarToolStore } from '../hooks/useCarToolStore';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars }) => {

  const [
    cars, editCarId,
    appendCar, replaceCar, removeCar,
    editCar, cancelCar,
  ] = useCarToolStore(initialCars.concat());

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={removeCar}
        onSaveCar={replaceCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
    </>
  );

};