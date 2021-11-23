import { useState } from 'react';
import './App.css';

export function replaceCamelWhitespaces (colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleButtonClick = () => {
    setButtonColor(newButtonColor)
  }

  const handleOnChangeCheckBox = (e) => {
    setButtonDisabled(e.target.checked);
  }

  return (
    <div>
      <button
        style={{ backgroundColor: buttonDisabled ? 'gray' : buttonColor }}
        onClick={handleButtonClick}
        disabled={buttonDisabled}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        id="disabled-button-checkbox"
        defaultChecked={buttonDisabled}
        onChange={handleOnChangeCheckBox}
      />
      <label htmlFor="disabled-button-checkbox">Disabled button</label>
    </div>
  )
}

export default App;
