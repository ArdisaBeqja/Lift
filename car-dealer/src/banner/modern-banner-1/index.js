import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

function ModernBanner1() {
  const [isMuted, setIsMuted] = useState(true);

  // Extract YouTube video ID from the link
  const videoId = 'fdBr1tBC7n8';

  // YouTube embed URL with mute control using URL params (note: not all browsers support autoplay + mute toggle perfectly)
  const youtubeURL = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=${isMuted ? 1 : 0}&playlist=${videoId}`;

  return (
    <section
      className="banner section-bg-half"
      style={{
        backgroundColor: '#2b2929',
        paddingTop: '230px',
        paddingBottom: '130px',
        position: 'relative',
        height: '600px',
        overflow: 'hidden',
      }}
    >
      <iframe
        src={youtubeURL}
        title="Promotional Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none', // disables interaction with iframe
          zIndex: 0,
        }}
      />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row>
          <Col lg={12}>
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{
                position: 'absolute',
                bottom: '-340px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '22px',
                padding: '12px',
              }}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ModernBanner1;
