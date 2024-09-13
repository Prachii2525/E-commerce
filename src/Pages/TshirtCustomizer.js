import React, { useState } from 'react';
import ColorPicker from '../Components/ColorPicker';
import ImageUploader from '../Components/ImageUploader';
import DownloadButton from '../Components/DownloadButton';

const TshirtCustomizer = () => {
  const [tshirtColor, setTshirtColor] = useState('#ffffff');
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div 
        className="w-72 h-96 flex items-center justify-center border border-gray-300" 
        style={{ backgroundColor: tshirtColor }}
      >
        {uploadedImage && <img src={uploadedImage} alt="Design" className="max-w-full max-h-full" />}
      </div>

      {/* Color Picker */}
      <ColorPicker onColorChange={setTshirtColor} />

      {/* Image Uploader */}
      <ImageUploader onImageUpload={setUploadedImage} />

      {/* Download Button */}
      <DownloadButton tshirtColor={tshirtColor} uploadedImage={uploadedImage} />
    </div>
  );
};

export default TshirtCustomizer;
