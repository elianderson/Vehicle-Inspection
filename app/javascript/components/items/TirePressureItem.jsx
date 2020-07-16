import React from 'react';

const TirePressureItem = ({
  id,
  condition,
  name,
  type,
}) => {
  return (
    <fieldset data-item-id={id}>
      <legend>{name}</legend>
      <div>
        <label htmlFor="front_left_psi"><span>Left</span></label>
        <select required name="front_left_psi" id="front_left_psi">
          <option value="">Choose a pressure amount</option>
          <option value="10psi">10psi</option>
          <option value="11psi">11psi</option>
          <option value="12psi">12psi</option>
        </select>
      </div>
      <div>
        <label htmlFor="front_right_psi"><span>Right</span></label>
        <select required name="front_right_psi" id="front_right_psi">
          <option value="">Choose a pressure amount</option>
          <option value="10psi">10psi</option>
          <option value="11psi">11psi</option>
          <option value="12psi">12psi</option>
        </select>
      </div>
    </fieldset>
  );
};

export default TirePressureItem;
