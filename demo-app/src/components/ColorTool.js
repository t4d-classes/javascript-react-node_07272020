import React from 'react';
import PropTypes from 'prop-types';

export const ColorTool = ({ colors }) => {

  // const colors = props.colors;
  // object destructuring
  // const { colors } = props;

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
    </>
  );

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.array.isRequired,
};