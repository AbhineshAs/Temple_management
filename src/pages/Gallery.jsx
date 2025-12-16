// src/pages/Gallery.jsx
import { useState } from "react";
import ImageCard from "../components/ImageCard";
import GalleryModal from "../components/GalleryModal";

import img1 from "../assets/temple1.jpg";
import img2 from "../assets/temple2.jpg";
import img3 from "../assets/temple3.jpg";
import img4 from "../assets/temple4.jpg";
import img5 from "../assets/temple5.jpg";
import img6 from "../assets/goddess1.jpg";
import img7 from "../assets/temple7.jpg";
import img8 from "../assets/goddess2.jpg";

export default function Gallery() {
  const [view, setView] = useState(null);

  const images = [img1, img2, img3, img4, img5, img7, img6, img8];

  return (
    <div className="gallery-page-only">

      <h2 className="gallery-title-only">Gallery</h2>

      <div className="gallery-grid-only">
        {images.map((src, i) => (
          <ImageCard
            key={i}
            src={src}
            alt={`gallery-img-${i}`}
            onClick={() => setView(src)}
          />
        ))}
      </div>

      <GalleryModal src={view} onClose={() => setView(null)} />
    </div>
  );
}
