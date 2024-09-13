import React from 'react';

const DownloadButton = ({ tshirtColor, uploadedImage }) => {
  const downloadDesign = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    // Fill background with T-shirt color
    ctx.fillStyle = tshirtColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the uploaded image
    if (uploadedImage) {
      const img = new Image();
      img.src = uploadedImage;
      img.onload = () => {
        ctx.drawImage(img, 50, 100, 200, 200);
        const link = document.createElement('a');
        link.download = 'customized-tshirt.png';
        link.href = canvas.toDataURL();
        link.click();
      };
    } else {
      const link = document.createElement('a');
      link.download = 'customized-tshirt.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <button 
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      onClick={downloadDesign}
    >
      Download T-shirt
    </button>
  );
};

export default DownloadButton;
