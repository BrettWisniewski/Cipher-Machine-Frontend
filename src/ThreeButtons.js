import React from 'react';

const ThreeButtons = ({ toggler, setToggler, buttons }) => {
    const mainButtons = (value) => {
        setToggler(value);
      };
    
      return (
        <div className="button-container">
          {buttons.map((button, index) => (
            <button key={index} className="circle-button" onClick={() => mainButtons(button.value)}>
              {button.name}
            </button>
          ))}
        </div>
      );
};

export default ThreeButtons;