import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import TeamStyle1, { TeamStyle2 } from '../component/team/team-item';

// Site Data
import TeamList from '../data/team-list';

// Scss
import '../../src/component/team/team.scss';

function ElementsTeam(props) {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Team"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Team', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle extraClass="mb-5" title="Team : Style 1" />
                  <div className="team-wrapper grid-wrapper grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1">
                    {TeamList.map((val, index) => {
                      if (index < 8) {
                        return (
                          <TeamStyle1
                            key={index}
                            image={val.image}
                            name={val.name}
                            position={val.position}
                            list={val.social}
                            id={val.id}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
              <Row className="section-pt">
                <Col>
                  <SectionTitle extraClass="mb-5" title="Team : Style 2" />
                  <div className="team-wrapper grid-wrapper grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1">
                    {TeamList.map((val, index) => {
                      if (index < 8) {
                        return (
                          <TeamStyle2
                            key={index}
                            image={val.image}
                            name={val.name}
                            position={val.position}
                            list={val.social}
                            id={val.id}
                            description={val.description}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsTeam;
