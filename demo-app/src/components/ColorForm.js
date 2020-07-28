import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });
  

  const change = (e) => {

    setColorForm({
      // object spread operator
      ...colorForm, // copy the original color form
      [ e.target.name ]: e.target.value,
    });

  };

  const submitColor = () => {
    onSubmitColor(colorForm);

    setColorForm({
      name: '', hexcode: '',
    });
  };

  return (
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
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

ColorForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitColor: PropTypes.func.isRequired,
};