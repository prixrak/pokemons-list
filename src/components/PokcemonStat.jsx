import React from 'react';

const PokcemonStat = ({title, value, props}) => {
  return (
    <div className='pockemonInfo__stat' {...props}>
      <div className='pockemonInfo__titleStat'>{title}:</div>
      <span className='pockemonInfo__value'>{value}</span>
    </div>
  );
};

export default PokcemonStat;