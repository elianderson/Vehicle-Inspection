import React from 'react';
import PropTypes from 'prop-types';

const BrakeHardItem = ({
  id,
  condition,
  name,
  type,
}) => {
  return (
    <fieldset data-item-id={id}>
      <legend>{name}</legend>
        <div>
          <input required id={`${name.toLowerCase()}_good`} type="radio" name={name} value="good" />
          <label htmlFor={`${name.toLowerCase()}_good`}><span>Good</span></label>
        </div>
        <div>
          <input required id={`${name.toLowerCase()}_ok`} type="radio" name={name} value="ok" />
          <label htmlFor={`${name.toLowerCase()}_ok`}><span>Ok</span></label>
        </div>
        <div>
          <input required id={`${name.toLowerCase()}_bad`} type="radio" name={name} value="bad" />
          <label htmlFor={`${name.toLowerCase()}_bad`}><span>Bad</span></label>
        </div>
    </fieldset>
  );
};

export default BrakeHardItem;
