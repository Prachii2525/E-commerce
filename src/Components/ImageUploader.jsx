import React from 'react';

const ImageUploader = ({ onImageUpload }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700">Upload Design</label>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileUpload} 
        className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-lg file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
      />
    </div>
  );
};

export default ImageUploader;
