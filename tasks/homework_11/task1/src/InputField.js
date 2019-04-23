import React from 'react';

const InputField = (props) => {
  const {input, meta, label, type} = props;
  return (
      <div>
        <label>{label}</label>
        <input {...input} type={type} />
        {(meta.error && meta.touched) && <span style={{color: 'red'}}>{meta.error}</span>}
      </div>
  );
};

export default InputField;
