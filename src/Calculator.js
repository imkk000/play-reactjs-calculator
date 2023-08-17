import { useState } from 'react';
import Button from './Button';

function Calculator() {
  const [accumulator, setAccumulator] = useState(0);

  const handleButtonClick = ({ target: { innerText: number } }) => {
    setAccumulator(v => v + parseInt(number));
  }

  const buttons = [];
  for (let i = 0; i <= 9; i++)
    buttons.push(<Button key={i} displayNumber={i} handleButtonClick={handleButtonClick} />)

  return (
    <div>
      <input type="text" readOnly value={accumulator} />
      {buttons}
    </div>
  )
}

export default Calculator;
