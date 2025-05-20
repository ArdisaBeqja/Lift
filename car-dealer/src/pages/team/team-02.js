import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';
import { TeamStyle2 } from '../../component/team/team-item';

// SIte Data
import TeamList from '../../data/team-list';

function TeamTwo() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Our Team"
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Team 02', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col sm={8}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="List of people who matter in our Company"
                    title="Our Team"
                    separator="separator"
                  />
                </Col>
                <Col sm={12}>
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

export default TeamTwo;
