// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import List from '../../component/list';
import SectionTitle from '../../component/section-title/section-title';

// Page Section
import CareerForm from '../../form/career-form';

// Site Data
import careerImg from '../../assets/images/career01.webp';

function CareersSection() {
  const listItems = [
    { id: 1, item: 'Its very important to us that we find the' },
    {
      id: 2,
      item: 'Reiciendis ab, iusto iste nesciunt doloremque',
    },
    {
      id: 3,
      item: 'Sapiente exercitationem sequi commodi cum minus',
    },
    {
      id: 4,
      item: 'Necessitatibus ea possimus perferendis deserunt',
    },
  ];

  return (
    <>
      <section className="section-ptb">
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle
                extraClass="text-center"
                subtitle="Apply now for right position"
                title="Career"
                separator="separator"
              />
            </Col>
            <Col lg={12}>
              <img className="img-fluid" src={careerImg} alt="" />
            </Col>
            <Col lg={12}>
              <div className="career-info">
                <h5>
                  It's very important to us that we find the right people, so
                  we've created a step-by-step process that will help us get to
                  know each other and work together to match your interests and
                  skills with the right opportunities.{' '}
                </h5>
                <p>
                  Possimus dolorem perferendis deserunt lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Reiciendis ab, iusto iste
                  nesciunt doloremque voluptatibus? Mollitia, libero, culpa, ex
                  odio nostrum at ducimus numquam harum laboriosam explicabo
                  ipsum atque dignissimos. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Rem enim dolor qui voluptates,
                  sapiente exercitationem sequi commodi cum minus laborum at,
                  doloribus dolores voluptatum necessitatibus.{' '}
                </p>

                <Row>
                  <Col md={6}>
                    <h5>Responsibilities include</h5>
                    <List
                      className="career-info-list"
                      icon="fa fa-angle-right"
                      data={listItems}
                    />
                  </Col>
                  <Col md={6}>
                    <h5>About Our Benefits</h5>
                    <List
                      className="career-info-list"
                      icon="fa fa-angle-right"
                      data={listItems}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <CareerForm
                      formtitle="Please Fill Out This Form to Apply"
                      formdescription="Interested and eligible candidates are requested to fill below form to apply for the right position. Or send their CV together with personal details by e-mail address "
                      formlink="support@yourwebsite.com"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CareersSection;
