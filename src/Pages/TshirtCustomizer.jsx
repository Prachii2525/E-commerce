import React, { useState } from 'react';
import ColorPicker from '../Components/ColorPicker';
import ImageUploader from '../Components/ImageUploader';
import DownloadButton from '../Components/DownloadButton';

const TshirtCustomizer = () => {
  // States for different parts of the T-shirt
  const [bodyColor, setBodyColor] = useState('#ffffff');
  const [leftSleeveColor, setLeftSleeveColor] = useState('#ffffff');
  const [rightSleeveColor, setRightSleeveColor] = useState('#ffffff');
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">T-shirt Customizer</h1>

      {/* T-shirt Shape */}
      <div className="relative w-64 h-96 mb-8">
        {/* T-shirt Body */}
        <div 
          className="absolute top-12 left-0 right-0 h-64 w-full bg-gray-200 rounded-lg shadow-lg" 
          style={{ backgroundColor: bodyColor }}
        >
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="Design"
              className="max-w-full max-h-full object-cover mx-auto"
            />
          )}
        </div>

        {/* Left Sleeve */}
        <div
          className="absolute left-0 top-20 h-24 w-16 bg-gray-300 rounded-l-lg"
          style={{ backgroundColor: leftSleeveColor }}
        ></div>

        {/* Right Sleeve */}
        <div
          className="absolute right-0 top-20 h-24 w-16 bg-gray-300 rounded-r-lg"
          style={{ backgroundColor: rightSleeveColor }}
        ></div>
      </div>

      {/* Color Pickers for Body and Sleeves */}
      <div className="flex space-x-8">
        <div>
          <h2 className="text-center mb-2 text-lg font-medium">Body Color</h2>
          <ColorPicker onColorChange={setBodyColor} />
        </div>
        <div>
          <h2 className="text-center mb-2 text-lg font-medium">Left Sleeve</h2>
          <ColorPicker onColorChange={setLeftSleeveColor} />
        </div>
        <div>
          <h2 className="text-center mb-2 text-lg font-medium">Right Sleeve</h2>
          <ColorPicker onColorChange={setRightSleeveColor} />
        </div>
      </div>

      {/* Image Uploader */}
      <div className="mt-6">
        <ImageUploader onImageUpload={setUploadedImage} />
      </div>

      {/* Download Button */}
      <div className="mt-4">
        <DownloadButton bodyColor={bodyColor} leftSleeveColor={leftSleeveColor} rightSleeveColor={rightSleeveColor} uploadedImage={uploadedImage} />
      </div>
    </div>
  );
};

export default TshirtCustomizer;
