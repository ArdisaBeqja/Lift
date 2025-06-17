// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import FeatureInfo from '../../component/feature-info';

function FeatureServices() {

  const ServiceItems = [
    {
      id: 1,
      icon: 'glyph-icon flaticon-lift',
      title: 'Instalim i Shpejtë',
      description: 'Sigurojmë instalim në kohë dhe me efikasitet të ashensorëve për t\'u nisur sa më shpejtë pa vonesa.',
      link: '#'
    },
    {
      id: 2,
      icon: 'glyph-icon flaticon-price-tdag',
      title: 'Planet e Mirëmbajtjes së Përballueshme',
      description: 'Planet tona të shërbimit janë dizajnuar për të mbajtur ashensorët në gjendje optimale, pa shpenzuar shumë.',
      link: '#'
    },
    {
      id: 3,
      icon: 'glyph-icon flaticon-wrench',
      title: 'Inspektime Rutine',
      description: 'Bëjmë kontrolle të rregullta sigurie dhe performancë për të siguruar përputhshmëri dhe besueshmëri.',
      link: '#'
    },
    {
      id: 4,
      icon: 'glyph-icon flaticon-tools',
      title: 'Shërbime Modernizimi',
      description: 'Përmirësoni ashensorët tuaj të vjetër me teknologji moderne për efikasitet, siguri dhe estetikë më të mirë.',
      link: '#'
    },
    {
      id: 5,
      icon: 'glyph-icon flaticon-emergency',
      title: 'Mbështetje Emergjente 24/7',
      description: 'Ekipi ynë është në dispozicion gjatë gjithë kohës për të reaguar ndaj emergjencave dhe për të rikthyer funksionalitetin shpejt.',
      link: '#'
    },
    {
      id: 6,
      icon: 'glyph-icon flaticon-shield',
      title: 'Ekspertë të Besuar të Industrisë',
      description: 'Me vite eksperiencë, jemi partneri juaj i besueshëm për sisteme ashensorësh të sigurta, të qëndrueshme dhe sipas standardeve.',
      link: '#'
    },
  ];

  return (
    <>
      <section className="section-ptb">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="feature-wrapper feature-wrapper-nogap grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                {ServiceItems.map((item, index) =>
                  <FeatureInfo key={index}
                    className="feature-box-style-02"
                    icon={item.icon}
                    title={item.title}
                    content={item.description}
                    link={item.link}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default FeatureServices;
