import React from 'react';

const ColorPicker = ({ onColorChange }) => {
  const colors = ['#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff'];

  return (
    <div className="flex space-x-2 my-4">
      {colors.map((color, index) => (
        <button 
          key={index} 
          className="w-8 h-8 rounded-full" 
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
