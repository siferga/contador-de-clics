import React from 'react';

function Counter({ nClicks }) {
  return (
    <div className='counter'>
      {nClicks}
    </div>
  );
}

export default Counter;