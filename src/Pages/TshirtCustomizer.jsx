import React, { useState, useRef } from 'react';
import ColorPicker from '../Components/ColorPicker';
import ImageUploader from '../Components/ImageUploader';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

const TshirtCustomizer = () => {
  const [bodyColor, setBodyColor] = useState('#ffffff');
  const [leftSleeveColor, setLeftSleeveColor] = useState('#ffffff');
  const [rightSleeveColor, setRightSleeveColor] = useState('#ffffff');
  const [uploadedImage, setUploadedImage] = useState(null);
  const tshirtRef = useRef(null); // Reference to the T-shirt SVG element

  const downloadTshirt = async () => {
    const canvas = await html2canvas(tshirtRef.current, {
      backgroundColor: null, // Transparent background
      useCORS: true, // Ensure cross-origin images load correctly
    });
    canvas.toBlob((blob) => {
      saveAs(blob, 'custom-tshirt.png'); // Download as PNG file
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">T-shirt Customizer</h1>

      {/* T-shirt Shape using SVG */}
      <div className="relative w-64 h-96 mb-8" ref={tshirtRef}>
        <svg
          width="250px"
          height="300px"
          viewBox="0 0 250 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* T-shirt Body with Black Border */}
          <path
            d="M75 100 L175 100 Q190 120 175 150 L175 250 L75 250 L75 150 Q60 120 75 100 Z"
            fill={bodyColor}
            stroke="black"
            strokeWidth="2"
          />
          
          {/* Rounded Neck Shape with Black Border */}
          <path
            d="M105 100 Q125 80 145 100 T105 100 Z"
            fill="#f5f5f5"
            stroke="black"
            strokeWidth="2"
          />

          {/* Left Sleeve with Black Border */}
          <path
            d="M75 100 L45 120 Q40 150 55 160 L75 150 Z"
            fill={leftSleeveColor}
            stroke="black"
            strokeWidth="2"
          />

          {/* Right Sleeve with Black Border */}
          <path
            d="M175 100 L205 120 Q210 150 195 160 L175 150 Z"
            fill={rightSleeveColor}
            stroke="black"
            strokeWidth="2"
          />

          {/* Display Uploaded Image */}
          {uploadedImage && (
            <image
              href={uploadedImage}
              x="85"
              y="130"
              height="100"
              width="80"
              preserveAspectRatio="none"
            />
          )}
        </svg>
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
        <button
          onClick={downloadTshirt}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Download T-shirt
        </button>
      </div>
    </div>
  );
};

export default TshirtCustomizer;
