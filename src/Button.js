function Button({ displayNumber, handleButtonClick }) {
  return <button type='button' onClick={handleButtonClick}>{displayNumber}</button>
}

export default Button;
