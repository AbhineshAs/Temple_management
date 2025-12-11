// src/components/AutoSlider.jsx
import React, { useRef, useEffect } from "react";

export default function AutoSlider({ images = [] }) {
  const track = useRef();

  useEffect(() => {
    if (!track.current) return;
    // clone to create loop effect
    const node = track.current;
    node.innerHTML += node.innerHTML;
  }, []);

  return (
    <div className="about-slider">
      <div className="slider-track" ref={track}>
        {images.concat(images).map((src, idx) => (
          <div key={idx} style={{minWidth:"100%", overflow:"hidden"}}>
            <img className="slide-img" src={src} alt={`slide-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
