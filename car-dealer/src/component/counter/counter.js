import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import './counter.scss';

function Counter(props) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div
        className={`counter ${props.themeColor || ''} ${props.className || ''}`}
      >
        <ScrollTrigger
          className="counter-inner"
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          {props?.countIcon && (
            <div className="counter-icon">
              <i className={props.countIcon}></i>
            </div>
          )}
          <div className="counter-content">
            {props?.countTitle && (
              <label className={`counter-title ${props.titleclass || ''}`}>
                {props.countTitle}
              </label>
            )}
            {counterOn && (
              <div className={`counter-info ${props.countSize || ''}`}>
                <CountUp
                  className="timer"
                  start={props.countStart}
                  end={props.countEnd}
                  duration={3}
                />
                {props?.separator && <label>{props.separator}</label>}
              </div>
            )}
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

function CounterstyleTwo(props) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div
        className={`counter ${props.themeColor || ''} ${props.className || ''}`}
      >
        <ScrollTrigger
          className="counter-inner"
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          {props?.countIcon && (
            <div className="counter-icon">
              <i className={props.countIcon}></i>
            </div>
          )}
          <div className="counter-content">
            {counterOn && (
              <div className={`counter-info ${props.countSize || ''}`}>
                <CountUp
                  className="timer"
                  start={props.countStart}
                  end={props.countEnd}
                  duration={3}
                />
                {props?.separator && <label>{props.separator}</label>}
              </div>
            )}
            {props?.countTitle && (
              <label className={`counter-title ${props.titleclass || ''}`}>
                {props.countTitle}
              </label>
            )}
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

function CounterstyleThree(props) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div
        className={`counter ${props.themeColor || ''} ${props.className || ''}`}
      >
        <ScrollTrigger
          className="counter-inner"
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="counter-separator"></div>
          <div className="counter-details">
            {props?.countTitle && (
              <label className={`counter-title ${props.titleclass || ''}`}>
                {props.countTitle}
              </label>
            )}

            <div className="counter-content">
              {props?.countIcon && (
                <div className="counter-icon">
                  <i className={props.countIcon}></i>
                </div>
              )}
              {counterOn && (
                <div className={`counter-info ${props.countSize || ''}`}>
                  <CountUp
                    className="timer"
                    start={props.countStart}
                    end={props.countEnd}
                    duration={3}
                  />
                  {props?.separator && <label>{props.separator}</label>}
                </div>
              )}
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

function CounterstyleFour(props) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div
        className={`counter counter-style-4 ${props.themeColor || ''} ${props.className || ''}`}
      >
        <ScrollTrigger
          className="counter-box"
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
            {counterOn && (
              <div className={`counter-info ${props.countSize || ''}`}>
                {props?.countPrefix && <label className="prefix">{props.countPrefix}</label>}
                <CountUp
                  className="timer"
                  start={props.countStart}
                  end={props.countEnd}
                  duration={3}
                />
                {props?.countSuffix && <label className="suffix">{props.countSuffix}</label>}
              </div>
            )}
            {props?.countTitle && (
              <h6 className={`counter-title ${props.titleclass || ''}`}>
                {props.countTitle}
              </h6>
            )}
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Counter;
export { CounterstyleTwo, CounterstyleThree, CounterstyleFour };
