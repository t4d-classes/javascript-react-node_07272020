import React from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export const ColorTool = ({
  colors,
  onAppendColor: appendColor,
  onRemoveColor: removeColor,
}) => {

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(color =>
          <li key={color.id}>
            {color.name}
            <button type="button" onClick={() => removeColor(color.id)}>X</button>
          </li>)}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
    </>
  );

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.array.isRequired,
};