import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; // ✅ Import icons
import Vid from './1.mp4';

function ModernBanner1() {
  const [isMuted, setIsMuted] = useState(true);

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
      <video
        src={Vid}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
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
