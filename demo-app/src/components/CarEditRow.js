import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export class CarEditRow extends React.Component {

  state = {
    make: this.props.car.make,
    model: this.props.car.model,
    year: this.props.car.year,
    color: this.props.car.color,
    price: this.props.car.price,
  };

  constructor(props) {
    super(props);

    // this.state = {
    //   make: props.car.make,
    //   model: props.car.model,
    //   year: props.car.year,
    //   color: props.car.color,
    //   price: props.car.price,
    // };

    this.change = this.change.bind(this);
    // this.saveCar = this.saveCar.bind(this);
  }

  change(e) {

    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });

  }

  saveCar = () => {

    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.car.id}</td>
        <td><input type="text" name="make" value={this.state.make} onChange={this.change} /></td>
        <td><input type="text" name="model" value={this.state.model} onChange={this.change} /></td>
        <td><input type="number" name="year" value={this.state.year} onChange={this.change} /></td>
        <td><input type="text" name="color" value={this.state.color} onChange={this.change} /></td>
        <td><input type="number" name="price" value={this.state.price} onChange={this.change} /></td>
        <td>
          <button type="button" onClick={this.saveCar}>
            Save
          </button>
          <button type="button" onClick={this.props.onCancelCar}>
            Cancel
          </button>
        </td>
      </tr>
    );
  }

}

CarEditRow.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};
