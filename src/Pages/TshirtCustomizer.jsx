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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">T-shirt Customizer</h1>

      {/* T-shirt Shape using SVG */}
      <div className="relative w-64 h-96 mb-12 p-4 border rounded-lg shadow-lg bg-white">
        <svg
          width="250px"
          height="300px"
          viewBox="0 0 250 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* T-shirt Body */}
          <path
            d="M50,100 Q70,70 90,70 L160,70 Q180,70 200,100 L200,250 L50,250 Z"
            fill={bodyColor}
          />
          {/* Neck Shape */}
          <path
            d="M90,70 Q100,40 150,70"
            fill="#f5f5f5"
          />
          {/* Left Sleeve */}
          <path
            d="M0,120 Q10,100 50,100 L50,150 Q10,150 0,170 Z"
            fill={leftSleeveColor}
          />
          {/* Right Sleeve */}
          <path
            d="M200,100 L250,120 L250,170 Q240,150 200,150 Z"
            fill={rightSleeveColor}
          />
          {/* Display Uploaded Image */}
          {uploadedImage && (
            <image
              href={uploadedImage}
              x="55"
              y="105"
              height="140"
              width="140"
              preserveAspectRatio="none"
            />
          )}
        </svg>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col items-center w-full max-w-4xl space-y-8">
        {/* Color Pickers for Body and Sleeves */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-gray-700">Body Color</h2>
            <ColorPicker onColorChange={setBodyColor} />
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-gray-700">Left Sleeve</h2>
            <ColorPicker onColorChange={setLeftSleeveColor} />
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-gray-700">Right Sleeve</h2>
            <ColorPicker onColorChange={setRightSleeveColor} />
          </div>
        </div>

        {/* Image Uploader */}
        <div className="w-full max-w-xl p-4 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">Upload Design</h2>
          <ImageUploader onImageUpload={setUploadedImage} />
        </div>

        {/* Download Button */}
        <div className="w-full max-w-sm">
          <DownloadButton
            bodyColor={bodyColor}
            leftSleeveColor={leftSleeveColor}
            rightSleeveColor={rightSleeveColor}
            uploadedImage={uploadedImage}
            className="w-full p-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default TshirtCustomizer;
