import React from 'react';

const ColorPicker = ({ onColorChange }) => {
  const colors = ['#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff']; // Add more if needed

  return (
    <div className="flex space-x-2 justify-center">
      {colors.map((color, index) => (
        <button
          key={index}
          className="w-10 h-10 rounded-full border-2"
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
