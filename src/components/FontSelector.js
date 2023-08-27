import React, { useState } from 'react'
import Header from './Header';
const FontSelector = ({ onSelectFont }) => {
    const fontOption = ['Serif', 'sans serif', 'monospace'];

    const handleChange = (e) =>{
        const selectFont = e.target.value;
        onSelectFont(selectFont)
        console.log(selectFont)
    };
  return (
    <div>
      <select id="fontSelect" onChange={handleChange}>
        {fontOption.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FontSelector
