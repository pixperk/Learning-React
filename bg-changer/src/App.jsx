import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("#333");

  const colorOptions = [
  "red",
  "green",
  "blue",
  "purple",
  "orange",
  "yellow",
  "cyan",
  "pink",
  "teal",
  "brown",
  "maroon",
  "navy",
  "olive",
  "lime",
  "indigo",
  "silver",
  "gold",
  "violet",
  "turquoise",
  "sienna",
  ];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setColor(option)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: option }}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
