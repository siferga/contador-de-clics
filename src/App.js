
import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [nClicks, setNClicks] = useState(0);

  const makeClick = () => {
    setNClicks(nClicks + 1);
  }

  const resetCounter = () => {
    setNClicks(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo de freeCodeCamp' />
      </div>
      <div className='main-container'>
        <Counter nClicks={nClicks} />
        <Button
          text= 'Click'
          isButtonofClick={true}
          makeClick={makeClick} />
        <Button
          text= 'Reset'
          isButtonisClick={false}
          makeClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
