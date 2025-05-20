import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './carlist.scss';
import Lightbox from 'react-18-image-lightbox';

function VehicleShowcase1(props) {
  // Open Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`car-item ${props.className || ''}`}>
        <div className="car-image">
          <img className="img-fluid" src={props.imgSrc} alt={props.title} />
          <div className="car-overlay-banner">
            <ul>
              <li>
                <Link to={{ pathname: `/car-details/${props.id}` }}>
                {console.log("sertfyuhijok")}
                {console.log(`${props.id ? props.id : 'xx'}`)}
                {console.log(props)}
                  <i className="fas fa-link"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-exchange-alt"></i>
                </Link>
              </li>
              {props.lightboxImages ? (
                <li>
                  <Link type="button" onClick={() => setIsOpen(true)}>
                    <i className="fas fa-expand"></i>
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="car-list">
          {props.attri && (
            <ul>
              {props.attri.map((val, index) => {
                if ([3, 4, 9].includes(val.id)) {
                  return (
                    <li key={index}>
                      <i className={val.icon}></i> {val.specification}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          )}
        </div>
        <div className="car-content">
          <div className="star">
            <ul className="list-unstyled">
              {props.list.map((list, index) => (
                <li key={index}>
                  <i className={list.icon}></i>
                </li>
              ))}
            </ul>
          </div>
          <div className="car-title">
            <Link to={{ pathname: `/car-details/${props.id}` }}>
              {props.carName}
            </Link>
          </div>
          <div className="separator"></div>
          <div className="price">
            <span className="old-price">
              <i className="fa-solid fa-dollar-sign"></i>
              {props.carPrice}
            </span>
            <span className="new-price">
              <i className="fa-solid fa-dollar-sign"></i>
              {props.carNewPrice}
            </span>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          imagePadding={50}
          mainSrc={props.lightboxImages[photoIndex].image}
          imageTitle={props.lightboxImages[photoIndex].carName}
          nextSrc={
            props.lightboxImages[(photoIndex + 1) % props.lightboxImages.length]
          }
          prevSrc={
            props.lightboxImages[
              (photoIndex + props.lightboxImages.length - 1) %
                props.lightboxImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + props.lightboxImages.length - 1) %
                props.lightboxImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % props.lightboxImages.length)
          }
        />
      )}
    </>
  );
}

function VehicleShowcase2(props) {
  // Open Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`car-item ${props.className || ''}`}>
        <div className="car-image">
          <img className="img-fluid" src={props.imgSrc} alt={props.title} />
          <div className="car-overlay-banner">
            <ul>
              <li>
                <Link to={{ pathname: `/car-details/${props.id}` }}>
                  <i className="fas fa-link"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-exchange-alt"></i>
                </Link>
              </li>
              {props.lightboxImages ? (
                <li>
                  <Link type="button" onClick={() => setIsOpen(true)}>
                    <i className="fas fa-expand"></i>
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="car-details">
          <div className="car-content">
            <div className="car-title">
              <Link to={{ pathname: `/car-details/${props.id}` }}>
                {props.carName}
              </Link>
            </div>

            <div className="car-list">
              {props.attri && (
                <ul>
                  {props.attri.map((val, index) => {
                    if ([3, 4, 9, 5].includes(val.id)) {
                      return (
                        <li key={index}>
                          <i className={val.icon}></i> {val.specification}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              )}
            </div>
            {props?.description && <p>{props.description}</p>}
            <div className="price-box">
              <div className="price">
                <span className="old-price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {props.carPrice}
                </span>
                <span className="new-price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {props.carNewPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          imagePadding={50}
          mainSrc={props.lightboxImages[photoIndex].image}
          imageTitle={props.lightboxImages[photoIndex].carName}
          nextSrc={
            props.lightboxImages[(photoIndex + 1) % props.lightboxImages.length]
          }
          prevSrc={
            props.lightboxImages[
              (photoIndex + props.lightboxImages.length - 1) %
                props.lightboxImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + props.lightboxImages.length - 1) %
                props.lightboxImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % props.lightboxImages.length)
          }
        />
      )}
    </>
  );
}

function VehicleShowcase3(props) {
  const attributes = Array.isArray(props.attri) ? props.attri : [];

  // Open Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
   
   
      <div className={`car-item vehicle-showcase-3 ${props.className || ''}`}>
        <div className="car-image">
          <img className="img-fluid" src={props.imgSrc} alt={props.title} />
          <div className="car-overlay-banner">
            <ul>
              <li>
                <Link to={{ pathname: `/car-details/${props.id}` }}>
                  <i className="fas fa-link"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-exchange-alt"></i>
                </Link>
              </li>
              {props.lightboxImages ? (
                <li>
                  <Link type="button" onClick={() => setIsOpen(true)}>
                    <i className="fas fa-expand"></i>
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="price-box">
              <div className="price">
                <span className="old-price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {props.carPrice}
                </span>
                <span className="new-price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {props.carNewPrice}
                </span>
              </div>
            </div>
        </div>
        <div className="car-details">
          <div className="car-content">
            <div className="car-title">
              <Link to={{ pathname: `/car-details/${props.id}` }}>
                {props.carName}
              </Link>
            </div>

            <div className="car-attribute-columns">
              {props.attri && (
                <>
                  {props.attri.map((val, index) => {
                    if ([3, 4, 9].includes(val.id)) {
                      return (
                        <div className="car-attribute-column" key={index}>
                          <div className="car-attribute-column-title">{val.title}</div>
                          <div className="car-attribute-column-value">{val.specification}</div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </>
              )}
            </div>
            {props?.description && <p>{props.description}</p>}
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          imagePadding={50}
          mainSrc={props.lightboxImages[photoIndex].image}
          imageTitle={props.lightboxImages[photoIndex].carName}
          nextSrc={
            props.lightboxImages[(photoIndex + 1) % props.lightboxImages.length]
          }
          prevSrc={
            props.lightboxImages[
              (photoIndex + props.lightboxImages.length - 1) %
                props.lightboxImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + props.lightboxImages.length - 1) %
                props.lightboxImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % props.lightboxImages.length)
          }
        />
      )}
    </>
  );
}

function CarItemList(props) {
  // Open Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`car-item ${props.className || ''}`}>
        <div className="car-image">
          <img className="img-fluid" src={props.imgSrc} alt={props.title} />
          <div className="car-overlay-banner">
            <ul>
              <li>
                <Link to={{ pathname: `/car-details/${props.id}` }}>
                  <i className="fas fa-link"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-exchange-alt"></i>
                </Link>
              </li>
              {props.lightboxImages ? (
                <li>
                  <Link type="button" onClick={() => setIsOpen(true)}>
                    <i className="fas fa-expand"></i>
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="car-details">
          <div className="car-content">
            <div className="car-title">
              <Link to={{ pathname: `/car-details/${props.id}` }}>
                {props.carName}
              </Link>
              {props?.description && <p>{props.description}</p>}
            </div>
            <div className="price-box">
              <div className="price">
                <span className="old-price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {props.carPrice}
                </span>
                <span className="new-price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {props.carNewPrice}
                </span>
              </div>
              <Link
                className="button"
                to={{ pathname: `/car-details/${props.id}` }}
              >
                Details
              </Link>
            </div>

            <div className="car-list">
              {props.attri && (
                <ul>
                  {props.attri.map((val, index) => {
                    if ([3, 4, 9].includes(val.id)) {
                      return (
                        <li key={index}>
                          <i className={val.icon}></i> {val.specification}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          imagePadding={50}
          mainSrc={props.lightboxImages[photoIndex].image}
          imageTitle={props.lightboxImages[photoIndex].carName}
          nextSrc={
            props.lightboxImages[(photoIndex + 1) % props.lightboxImages.length]
          }
          prevSrc={
            props.lightboxImages[
              (photoIndex + props.lightboxImages.length - 1) %
                props.lightboxImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + props.lightboxImages.length - 1) %
                props.lightboxImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % props.lightboxImages.length)
          }
        />
      )}
    </>
  );
}

function CarSlider(props) {
  return (
    <>
      <img className="img-fluid" src={props.imgSrc} alt={props.title} />
    </>
  );
}

export default VehicleShowcase1;
export { VehicleShowcase2, VehicleShowcase3, CarItemList, CarSlider };
