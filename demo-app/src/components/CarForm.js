import React from 'react';
import PropTypes from 'prop-types';

import { nanToValue } from '../utils';
import { useForm } from '../hooks/useForm';

export const CarForm = ({ buttonText, onSubmitCar }) => {

  const [ carForm, change, resetCarForm ] = useForm({
    make: '', model: '', year: NaN, color: '', price: NaN,
  });

  const submitCar = () => {
    onSubmitCar(carForm);
    resetCarForm();
  };

  return (
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
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  );

};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitCar: PropTypes.func.isRequired,
};
