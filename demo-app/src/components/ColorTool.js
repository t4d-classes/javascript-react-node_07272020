import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export const ColorTool = ({ colors: initialColors }) => {

  const [ colors, setColors ] = useState(initialColors.concat());


  const addColor = () => {
    setColors(colors.concat({
      ...colorForm,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));
  }

  return (
    <>
      <ToolHeader headerText="Color Tool" />
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