import "./Gallery.css";
import { useState, useEffect } from "react";

const galleryData = [
  { img: "/g1.jpg", text: "Exploring new ideas and building projects." },
  { img: "/g2.jpg", text: "Moments from my journey in tech." },
  { img: "/g3.jpg", text: "Learning, experimenting, and growing." }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const openImage = (index) => {
    setCurrentIndex(index);
    setZoom(1);
  };

  const closeImage = () => setCurrentIndex(null);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      (prev - 1 + galleryData.length) % galleryData.length
    );

  /* Keyboard Controls */
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-wrapper">

        {/* HEADER */}
        <div className="gallery-header">
          <div className="gallery-accent"></div>
          <h2>Snapshots</h2>
        </div>

        {/* ITEMS */}
        {galleryData.map((item, index) => (
          <div
            className={`gallery-item ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={index}
          >
            {/* Image */}
            <div className="gallery-image">
              <img
                src={item.img}
                alt="gallery"
                onClick={() => openImage(index)}
              />
            </div>

            {/* Text */}
            <div className="gallery-text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}

        {/* MODAL */}
        {currentIndex !== null && (
          <div className="gallery-modal">

            {/* CLOSE */}
            <button className="close-btn" onClick={closeImage}>✕</button>

            {/* IMAGE */}
            <img
              src={galleryData[currentIndex].img}
              alt="large"
              className="modal-img"
              style={{ transform: `scale(${zoom})` }}
            />

            {/* NAVIGATION */}
            <button className="nav left" onClick={prevImage}>‹</button>
            <button className="nav right" onClick={nextImage}>›</button>

            {/* CONTROLS */}
            <div className="controls">
              <button onClick={() => setZoom(zoom + 0.2)}>Zoom In</button>
              <button onClick={() => setZoom(Math.max(1, zoom - 0.2))}>Zoom Out</button>

              <a href={galleryData[currentIndex].img} download>
                <button>Download</button>
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}