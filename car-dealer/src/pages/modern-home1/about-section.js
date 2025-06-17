// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import SectionTitle from '../../component/section-title/section-title';
import List from '../../component/list';
import Button from '../../component/button/button';

// Site Data
import aboutImg from './lift.avif';

function AboutSection(props) {
  const listItems = [
    { id: 1, item: 'Kontrolloni rregullisht kabllot dhe frenat e sigurisë për performancë optimale.', url: '/' },
    { id: 2, item: 'Siguroni që vetëm personeli i autorizuar të ketë akses në sistemet e kontrollit të ashensorit.', url: '/blog' },
    { id: 3, item: 'Planifikoni mirëmbajtje të rregullt për të parandaluar ndërprerje të papritura.', url: '/about-us' },
    { id: 4, item: 'Mbani softuerin e ashensorit të përditësuar për të përmbushur standardet e sigurisë.', url: '/team' },
    { id: 5, item: 'Monitoroni kufijtë e ngarkesës për të garantuar sigurinë e pasagjerëve.', url: '/404' },
  ];

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="section-col-left col-image">
              <div className="image-overlay-text">
                <img className="img-fluid" src={aboutImg} alt="Ashensor modern" />
                <h3 className="overlay-textbox">Zgjidhje Inovative për Çdo Ndërtesë</h3>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="section-col-right col-content">
              <SectionTitle
                extraClass="section-title-new"
                title="Ne ofrojmë zgjidhje të avancuara për ashensorë"
                content="Siguri dhe efikasitet në ngritje: Partneri juaj i besuar për sistemet moderne të ashensorëve."
              />
              <List className="list-new mb-3 pb-2" icon="fas fa-check" data={listItems} />
              {/* <Button btnClass="btn-lg me-3" btnText="Shërbimet Tona" btnURL="/about-us" /> */}
              <div className="call-box call-box-custom d-inline-flex align-items-center">
                <div className="call-box-text">
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutSection;
