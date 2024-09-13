import React from 'react';
import TshirtCustomizer from './Pages/TshirtCustomizer';
import './index.css'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">T-shirt Customizer</h1>
      <TshirtCustomizer />
    </div>
  );
};

export default App;

