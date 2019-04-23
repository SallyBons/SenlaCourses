import React from 'react';

const SelectField = props => (
  <div>
    <label>{props.label}</label>
    <select {...props.input}>
      <option />
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
);

export default SelectField;
