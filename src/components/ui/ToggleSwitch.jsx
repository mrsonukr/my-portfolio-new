import React from 'react';

const ToggleSwitch = ({ checked, onChange, className = '' }) => {
  return (
    <label className={`switch inline-flex items-center ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
