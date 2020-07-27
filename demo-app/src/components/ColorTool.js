import React from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';

export const ColorTool = ({ colors }) => {

  // const colors = props.colors;
  // object destructuring
  // const { colors } = props;

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