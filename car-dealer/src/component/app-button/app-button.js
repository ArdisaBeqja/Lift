import React from 'react';
import { Link } from 'react-router-dom';
import './app-button.scss';

function AppButton(props) {
  return (
    <>
        <div className="app-button">
            {props?.buttonLabel && <div className="button-label">{props.buttonLabel}</div>}
            <div className="button-items">
                {props?.appleBtn && <div className="button-item">
                    <Link className={`button ${props.appleBtnColor || ''}`} to={props.appleURL || "#"}>
                    <div className="btn-icon"><i className="fa-brands fa-apple"></i></div>
                    <div className="btn-content">
                        <span className="btn-label">Download on the</span>
                        <div className="btn-title">Apple Store</div>
                    </div>
                    </Link>
                </div>}
                {props?.androidBtn && <div className="button-item">
                    <Link className={`button ${props.androidBtnColor || ''}`} to={props.androidURL || "#"}>
                    <div className="btn-icon"><i className="fa-brands fa-google-play"></i></div>
                    <div className="btn-content">
                        <span className="btn-label">Get in on</span>
                        <div className="btn-title">Google Play</div>
                    </div>
                    </Link>
                </div>}
            </div>
        </div>
    </>
  );
}

export default AppButton;
