import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
      color={snap.color}
      disableAlpha
      /* presetColors={[
        "#FFD700", "#FF69B4", "#00CED1", "#FF4500", "#7B68EE",
        "#00FF00", "#800080", "#4682B4", "#FF6347", "#8A2BE2",
        
      ]} */
      onChange={(color)=>state.color = color.hex}
      />
      </div>
  );
};

export default ColorPicker;
