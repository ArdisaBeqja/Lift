import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import List from '../../component/list';
import '../../component/team/team.scss';

// Site Data
import TeamList from '../../data/team-list';

function TeamSingle() {
  let { id } = useParams();
  const teamdata = TeamList.find((e) => e.id === parseInt(id));

  // Next Previous Post Navigation
  const previousTeam = parseInt(id) - 1;
  const nextTeam = parseInt(id) + 1;

  const isFirstTeam = previousTeam === 0;
  const isLastTeam = nextTeam > TeamList.length;

  const previousTitle = TeamList[previousTeam - 1];
  const nextTitle = TeamList[parseInt(id)];

  return (
    <>
      <div className="site-content team-single-page">
        <PageHeader
          title={teamdata.name}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Team', path: '#' },
            { label: 'Team Single', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper page-template">
          <Container>
            <Row>
              <Col lg={4} md={5}>
                <div className="">
                  <div className="post-image mb-4">
                    <img className=" w-100" src={teamdata.image} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={8} md={7} className="mt-4 mt-md-0">
                <div className="team-member-details">
                  <div className="member-info">
                    <div className="member-name">
                      <h2 className="title">{teamdata.name}</h2>
                      <span className="position">{teamdata.position}</span>
                    </div>
                    <div className="member-social">
                      <ul className="team-social list-unstyled">
                        {teamdata.social.map((list, index) => (
                          <li key={index}>
                            <Link to={list.url}>
                              <i className={list.icon}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="member-info-content">
                    <p>{teamdata.description}</p>
                  </div>

                  <ul className="member-contact-info mt-4">
                    <li key="0">
                      <h6 className="title">
                        <span>Phone :</span>
                        {teamdata.phone}
                      </h6>
                    </li>
                    <li key="1">
                      <h6 className="title">
                        <span>Email :</span>
                        {teamdata.email}
                      </h6>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="our-activities">
              <Col md={6}>
                <div className="team-member-info skills-2">
                  <h4 className="member-info-title">Powerful Skills</h4>
                  <div className="progress-list">
                    {teamdata.skill ? teamdata.skill.map((list, index) => (
                      <div className="progress-info mt-4 mb-4" key={index}>
                        <div className="progress-inner">
                          <div className="progress-bar-title">{list.title}</div>
                          <span className="progress-bar-number one">{list.value}%</span>
                        </div>
                        <ProgressBar now={list.value}></ProgressBar>
                      </div>
                    )) : 'Skill not found'}
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="team-member-info team-expertise">
                  <h4 className="member-info-title">Areas Of Expertise</h4>
                  {teamdata.expertise ? <List icon="fa-solid fa-chevron-right" data={teamdata.expertise} /> : 'Areas Of Expertise not found'}
                </div>
              </Col>
            </Row>
            <Row className="single-team-navigation">
              <Col>
                <div className="nav-single">
                  <div className="navigation">
                    <div className="nav-previous">
                      {isFirstTeam ? null : (
                        <Link className="" to={`/team-details/${previousTeam}`}>
                          <span className="port-photo">
                            <img src={previousTitle.image} alt="" />
                          </span>
                          <span className="port-arrow">
                            <i className="fa-solid fa-chevron-left"></i>
                          </span>
                        </Link>
                      )}
                    </div>
                    <div className="nav-next">
                      {isLastTeam ? null : (
                        <Link className="" to={`/team-details/${nextTeam}`}>
                          <span className="port-photo">
                            <img src={nextTitle.image} alt="" />
                          </span>
                          <span className="port-arrow">
                            <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default TeamSingle;
