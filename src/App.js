import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleButtonClick = () => {
    setButtonColor(newButtonColor)
  }

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={handleButtonClick}
      >
        Change to {newButtonColor}
      </button>
    </div>
  )
}

export default App;
