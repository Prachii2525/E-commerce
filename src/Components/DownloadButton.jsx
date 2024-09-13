import React from 'react';

const DownloadButton = ({ bodyColor, leftSleeveColor, rightSleeveColor, uploadedImage }) => {
  const downloadDesign = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    // Draw body
    ctx.fillStyle = bodyColor;
    ctx.fillRect(50, 100, 200, 300);

    // Draw left sleeve
    ctx.fillStyle = leftSleeveColor;
    ctx.fillRect(0, 100, 50, 100);

    // Draw right sleeve
    ctx.fillStyle = rightSleeveColor;
    ctx.fillRect(250, 100, 50, 100);

    // Draw uploaded image (if any)
    if (uploadedImage) {
      const img = new Image();
      img.src = uploadedImage;
      img.onload = () => {
        ctx.drawImage(img, 75, 150, 150, 150);
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
      className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-800 transition"
      onClick={downloadDesign}
    >
      Download T-shirt
    </button>
  );
};

export default DownloadButton;
