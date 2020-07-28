import React from 'react';
import PropTypes from 'prop-types';

import { CarViewRow } from './CarViewRow';

export const CarTable = ({
  cars,
  onDeleteCar: deleteCar,
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => <CarViewRow key={car.id}
          car={car} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  )

};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};
