import React from "react";


const NumberButton = (props) => {
  
  // const number = props;
  console.log('numButton', props)
  return (
    <button onClick={ () =>{}} className='numButton'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton;