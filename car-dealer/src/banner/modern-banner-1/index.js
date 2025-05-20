import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Vid from '../../assets/images/1.mp4';

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
        height: '600px', // you need to set an explicit height
        overflow: 'hidden',
      }}
    >
      <video
        src={Vid}
        autoPlay
        loop
        muted={isMuted}
        playsInline
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
            {/* Button to toggle mute just above the bottom */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{
                position: 'absolute',
                bottom: '-259px',  // Adjust this value to position it just above the bottom
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px',
                padding: '10px 20px',
              }}
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ModernBanner1;
