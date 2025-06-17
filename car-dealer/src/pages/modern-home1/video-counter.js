// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import Vid from './igvid.mp4';
import Thumbp from './ui.avif';
// Components
import VideoPopup from '../../component/video';

function VideoCounter(params) {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12} className="video-btn">
            <div className="video-box">
              <VideoPopup
                theme="video-style-2"
                size="lg"
                videoURL={Vid}
                videoImage={Thumbp}
              />
            </div>
            <div className="section-title-new text-center">
              <h3 className="title text-white mt-4">
                Dëshironi të mësoni më shumë? Shikoni videon tonë promovuese tani!
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VideoCounter;
