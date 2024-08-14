import React from 'react';
import './Button.css'; // Import the CSS file for styling


// Start here, this is destructuring assignment
const Button = ({ text }) => {
  return (
    <button className="rectangle-button">
      {text}
    </button>
  );
};

export default Button;