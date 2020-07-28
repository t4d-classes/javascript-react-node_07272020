import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';

export const ColorTool = ({ colors }) => {

  // array destructuring
  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });

  // const colorFormState = useState({
  //   name: '', hexcode: '',
  // });

  // const colorForm = colorFormState[0];
  // const setColorForm = colorFormState[1];

  const change = (e) => {

    setColorForm({
      // object spread operator
      ...colorForm, // copy the original color form
      [ e.target.name ]: e.target.value,
    });

  };

  console.log(colorForm);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <form>
        <div>
          {/* React.createElement('label', { htmlFor: 'color-name-input' }, 'Color Name') */}
          <label htmlFor="color-name-input">Color Name</label>
          <input type="text" id="color-name-input" name="name"
            value={colorForm.name} onChange={change} />
        </div>
        <div>
          <label htmlFor="color-hexcode-input">Color Hexcode</label>
          <input type="text" id="color-hexcode-input" name="hexcode"
            value={colorForm.hexcode} onChange={change} />
        </div>
      </form>
    </>
  );

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.array.isRequired,
};