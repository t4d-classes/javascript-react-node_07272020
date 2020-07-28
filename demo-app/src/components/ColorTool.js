import React from 'react';
import PropTypes from 'prop-types';

import { useList } from '../hooks/useList';
import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export const ColorTool = ({ colors: initialColors }) => {

  const [ colors, appendColor ] = useList(initialColors.concat());

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
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