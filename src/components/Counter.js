import React from 'react';
import '../styleSheets/Counter.css';

function Counter({ nClicks }) {
  return (
    <div className='counter'>
      {nClicks}
    </div>
  );
}

export default Counter;