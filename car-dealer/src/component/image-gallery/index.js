import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import './style.scss';

function ImageGallery(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Open Lightbox
  const openLightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  // Close Lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  // Gallery Total Default Item
  const { items: total = '100' } = props;

  return (
    <>
      {props.data.map((img, index) => {
        if (index < total) {
          return (
            <div key={index} className={`gallery-item ${props.theme || ''}`}>
              <div className="gallery-image">
                <img
                  className="img-fluid"
                  key={index}
                  src={img.imgsrc}
                  alt={img.title}
                  cat={img.category}
                  //alt={`Image ${index}`}
                  onClick={() => openLightbox(index)}
                />
              </div>
              {props.theme === 'gallery-style-1' && (
                <div className="gallery-overlay">
                  <button
                    className="open-btn"
                    onClick={() => openLightbox(index)}
                  >
                    <i className="fa-solid fa-plus not-click"></i>
                  </button>
                  <div className="gallery-info">
                    <h5 className="gallery-title">
                      {img.title}
                    </h5>
                    <span className="gallery-category">{img.category}</span>
                  </div>
                </div>
              )}
              {props.theme === 'gallery-style-2' && (
                <div className="gallery-overlay">
                  <button
                    className="open-btn"
                    onClick={() => openLightbox(index)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              )}
            </div>
          );
        }
        return null
      })}

      {isOpen && (
        <Lightbox
          imagePadding={50}
          mainSrc={props.data[photoIndex].imgsrc}
          imageTitle={props.data[photoIndex].title}
          nextSrc={props.data[(photoIndex + 1) % props.data.length]}
          prevSrc={
            props.data[(photoIndex + props.data.length - 1) % props.data.length]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + props.data.length - 1) % props.data.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % props.data.length)
          }
        />
      )}
    </>
  );
}

export default ImageGallery;
