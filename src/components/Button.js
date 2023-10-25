import React from 'react';
import '../styleSheets/Button.css';

function Button({ text, isButtonofClick, makeClick }) {
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