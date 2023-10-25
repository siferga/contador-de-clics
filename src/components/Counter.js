import React from 'react';
import '../styleSheets/Button.css';

function Counter({ nClicks }) {
  return (
    <button
      className={ isButtonofClick ? 'button-click' : 'button-restart' }
      /*Event Listener*/
      onClick={makeClick} >
      {text}
    </button>
  );
}

export default Button;