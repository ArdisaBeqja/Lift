// src/component/VideoPopup.jsx
import React, { useState } from 'react';

function VideoPopup({ videoURL, videoImage, theme, size }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div
        className={`video-popup ${theme} ${size}`}
        style={{ cursor: 'pointer', display: 'inline-block' }}
        onClick={() => setShowVideo(true)}
      >
        <img src={videoImage} alt="Video thumbnail" style={{ width: '100%', borderRadius: '8px' }} />
        <div className="play-button" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '48px', color: 'white', pointerEvents: 'none',
        }}>
          ▶
        </div>
      </div>

      {showVideo && (
        <div
          className="video-popup-overlay"
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex',
            justifyContent: 'center', alignItems: 'center', zIndex: 9999,
          }}
          onClick={() => setShowVideo(false)}
        >
          <video
            src={videoURL}
            controls
            autoPlay
            style={{ maxWidth: '90%', maxHeight: '80%', borderRadius: '10px' }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default VideoPopup;
