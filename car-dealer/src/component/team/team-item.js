import React from 'react';
import { Link } from 'react-router-dom';
import './team.scss';

function TeamStyle1(props) {
  return (
    <div className="team">
      <div className="team-image">
        <img className="img-fluid" src={props.image} alt="" />
        <div className="team-social">
          <ul className="list-unstyled">
            {props.list.map((list, index) => (
              <li key={index}>
                <Link target="_blank" to={list.url}>
                  <i className={list.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="team-name">
        <Link
          className="team-title"
          to={{ pathname: `/team-details/${props.id}` }}
        >
          {props.name}
        </Link>
        <span>{props.position}</span>
      </div>
    </div>
  );
}
function TeamStyle2(props) {
  return (
    <div className={`team-02 ${props.className || ''}`}>
      <div className="team-image">
        <img className="img-fluid" src={props.image} alt="" />
      </div>
      <div className="team-info">
        <div className="team-name">
          <span>{props.position}</span>
          <Link
            className="team-title"
            to={{ pathname: `/team-details/${props.id}` }}
          >
            {props.name}
          </Link>
          <p>{props.description}</p>
        </div>
        <div className="team-social">
          <ul className="list-unstyled">
            {props.list.map((list, index) => (
              <li key={index}>
                <Link target="_blank" to={list.url}>
                  <i className={list.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamStyle1;
export { TeamStyle2 };
