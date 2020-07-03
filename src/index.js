import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const ProgressCircle = ({
  size,
  color,
  clockwise,
  progress,
  start,
  strokeWidth,
  opacity,
  time,
  timingFunction,
}) => {
  const circleEl = useRef(null);
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const dashArray = circumference(radius);
  const totalProgressOff = dashArray * (progress / 100);
  const totalProgress = dashArray - totalProgressOff;

  const outerStyle = { position: 'relative', height: size + 'px', width: size + 'px' };
  if(!clockwise) {
    outerStyle['transform'] = 'rotateY(180deg)'
    start = start - 180
  }
  
  useEffect(() => {
    circleEl.current.setAttribute('stroke-dashoffset', totalProgress);
  });

  return (
    <div
      style={outerStyle}
    >
      <svg style={{ position: 'absolute' }} height={size} width={size}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeOpacity={opacity}
        ></circle>
      </svg>
      <svg style={{ position: 'absolute', transform: `rotate(${start}deg` }} height={size} width={size}>
        <circle
          ref={circleEl}
          style={{ transition: `${time}s stroke-dashoffset ${timingFunction}` }}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashArray}
        ></circle>
      </svg>
    </div>
  );
};

ProgressCircle.defaultProps = {
  color: 'grey',
  clockwise: true,
  start: 0,
  opacity: 0.4,
  timingFunction: 'linear',
  time: 0.4,
};

ProgressCircle.propTypes = {
  color: PropTypes.string.isRequired,
  clockwise: PropTypes.bool,
  progress: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  start: PropTypes.number,
  strokeWidth: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  timingFunction: PropTypes.oneOf([
    'linear',
    'ease-in',
    'ease-out',
    'east-in-out',
    'step-start',
    'step-end',
  ]),
};

export default ProgressCircle;
