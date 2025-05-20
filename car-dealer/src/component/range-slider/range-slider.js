import React from 'react';
import RangeSlider from 'rsuite/RangeSlider';
import { useState } from 'react';
import './range-slider.scss';

function PriceRangeSlider(props) {
  const [firstValue, setFirstValue] = useState(50);
  const [secondValue, setSecondValue] = useState(300);
  function handleRanges(value) {
    setFirstValue(value[0]);
    setSecondValue(value[1]);
  }
  return (
    <div className="price pricerangeslider">
      <div className="price-wrapper">
        {props?.label && <label className="form-label">{props.label}</label>}
        <div className="price-value">
          <span className="first-value">${firstValue} </span>-{' '}
          <span className="second-value">${secondValue}</span>
        </div>
      </div>

      <RangeSlider
        defaultValue={[50, 300]}
        onChange={handleRanges}
        min={1}
        max={500}
        tooltip={false}
      />
      <br />
    </div>
  );
}
export default PriceRangeSlider;
