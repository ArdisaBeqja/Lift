import { useState } from 'react';
import { Link } from 'react-router-dom';
import Ratio from 'react-bootstrap/Ratio';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import defaultImage from '../../assets/images/thumb.avif';
import './video.scss';

function VideoPopup(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={`video-popup ${props.theme || ''}`}>
        <Button
          className="video-btn"
          variant="primary"
          onClick={() => setShow(true)}
        >
          <i className="fas fa-play fa-1x"></i>
        </Button>
        {(props?.theme === 'video-style-2') === !props.imageHide || (
          <img
            alt="Video"
            className="img-fluid image-link border-radius-7"
            src={props.videoImage || defaultImage}
          />
        )}
      </div>

      <Modal
        show={show}
        size={props.size || 'md'}
        onHide={() => setShow(false)}
        dialogClassName="pgs-video-popup"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Ratio aspectRatio="16x9">
            <iframe
              src={props.videoURL}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Ratio>
        </Modal.Body>
      </Modal>
    </>
  );
}

function VideoPopup2(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={`video-popup video-popup-style-02 ${props.theme || ''}`}>
        <Button
          className="video-btn"
          variant="primary"
          onClick={() => setShow(true)}
        >
          <i className="fas fa-play fa-1x"></i>
        </Button>
        <Link to="#">See Our Video</Link>
      </div>

      <Modal
        show={show}
        size={props.size || 'md'}
        onHide={() => setShow(false)}
        dialogClassName="pgs-video-popup"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Ratio aspectRatio="16x9">
            <iframe
              src={props.videoURL}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Ratio>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoPopup;
export { VideoPopup2 };
