import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';
import TeamStyle1 from '../../component/team/team-item';

// SIte Data
import TeamList from '../../data/team-list';

function Team() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Our Team"
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Our Team', path: '#', active: true },
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
                    {TeamList.map((val, item) => {
                      if (item < 8) {
                        return (
                          <TeamStyle1
                            key={item}
                            id={val.id}
                            image={val.image}
                            name={val.name}
                            position={val.position}
                            list={val.social}
                            teamurl={val.teamurl}
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

export default Team;
