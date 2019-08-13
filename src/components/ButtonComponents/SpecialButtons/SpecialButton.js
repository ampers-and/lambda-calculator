import React from "react";

const SpecialButton = (props) => {

  // const special = props;

  return (
    <button onClick={() => {}} className='spButton'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </button>
  );
};

export default SpecialButton;