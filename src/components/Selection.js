import React, { useState } from 'react';
import '../styles/Child.css';

const Selection = ({title, applyColor}) => {
    const [updateSelectionStyle, setUpdateSelectionStyle] = useState({background: ""});
    function handleClick(){
        applyColor(setUpdateSelectionStyle)
    }
    console.log(title);
  return (
    <div>
        <div style={{backgroundColor: updateSelectionStyle.background}} className='fix-box' onClick={handleClick}>
            <p className='subheading'>{title}</p>
        </div>
    </div>
  );
}

export default Selection;
