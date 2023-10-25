
import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const makeClick = () => {
    console.log('Click');
  }

  const resetCounter = () => {
    console.log('Reset');
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
        <Counter nClicks='5' />
        <Button
          text= 'Click'
          isButtonofClick={true}
          makeClick={makeClick}/>
        <Button
          text= 'Reset'
          isButtonisClick={false}
          makeClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
