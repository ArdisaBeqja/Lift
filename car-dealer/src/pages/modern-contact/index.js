import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';
import InfoBox from '../../component/infobox';
import Googlemap from '../../component/googlemap/googlemap';

// Form
import ContactForm3 from '../../form/contact-form/index-3';

function ModernContact() {

  const SocialItem = [
    { id: 1,
      icon: 'fab fa-facebook-f',
      title: 'Facebook',
      url: "#"
    },
    { id: 2, 
      icon: 'fab fa-twitter', 
      title: 'Twitter',
      url: "#"
    },
    { id: 3,
      icon: 'fab fa-instagram',
      title: 'Instagram',
      url: "#"
    },
    { id: 3,
      icon: 'fab fa-dribbble',
      title: 'Dribbble',
      url: "#"
    },
    { id: 3,
      icon: 'fab fa-youtube',
      title: 'You-Tube',
      url: "#"
    },
  ];

  const ContactInfoItems = [
    { id: 1,
      icon: 'fa-regular fa-clock',
      title: 'Opening Hours',
      description: 'Voluptatem accusanoremque sed ut perspiciatis unde omnis iste natus error sit laudantium.'
    },
    { id: 2, 
      icon: 'fa-solid fa-life-ring', 
      title: 'Our Support Center',
      description: 'Iste natus error sit sed ut perspiciatis unde omnis voluptatem laudantium, totam rem aperiam.'
    },
    { id: 3,
      icon: 'fas fa-headset',
      title: 'Some Information',
      description: 'Totam rem aperiam sed ut perspiciatis unde omnis iste natus error sit voluptatem laudantium.'
    },
  ];

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Contact us"
          description=""
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Contact us', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          
          <section className="section-ptb contact-main-info">
            <Container>
              <Row className="title-section align-items-end">
                <Col lg={8} md={7} className="mb-4 mb-lg-0">
                  <SectionTitle
                    extraClass="section-title-new mb-0"
                    title="Have Questions? Get In Touch!"
                  />
                </Col>
                <Col lg={4} md={5}>
                  <p className="mb-0">Great! We’re excited to hear from you and let’s start something special togerter. call us for any inquery.</p>
                </Col>
              </Row>
              <Row className="section-pt">
                <Col xl={8} lg={7} md={6}>
                  <div className="contact-form-wrapper">
                    <SectionTitle
                      extraClass="section-title-new"
                      tag="h3"
                      title="Send A Message"
                      subtitle="Get in touch"
                      content="Our experts and developers would love to contribute their expertise and insights to your potencial projects"
                    />
                    <ContactForm3 />
                  </div>
                </Col>
                <Col xl={4} lg={5} md={6}>
                  <div className="contact-details mt-5 mt-md-0">
                    <h5 className="text-white mb-4">Contact Details</h5>
                    <div className="contact-information">
                      <div className="contact-info-item">
                        <p>1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104</p>
                      </div>
                      <div className="contact-info-item">
                        <span>Send email</span>
                        <h6>Support@Example.Com</h6>
                      </div>
                      <div className="contact-info-item">
                        <span>Call anytime</span>
                        <h6>(007) 123 456 7890</h6>
                      </div>
                    </div>
                    <div className="social-icon">
                      {SocialItem.map((item, index) =>
                        <Link key={index} to={item.url} title={item.title}><i className={item.icon}></i></Link>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
              </Container>
          </section>

          <section className="section-ptb contact-info">
            <Container>
              <Row>
                {ContactInfoItems.map((item, index) =>
                  <Col lg={4} md={6} key={index} className="mt-4">
                    <InfoBox
                      infoStyle="style-3"
                      icontype="border"
                      iconshape="round"
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      linkurl={item.url}
                    />
                  </Col>
                )}
              </Row>
            </Container>
          </section>

          <section>
            <Container fluid className="p-0">
              <Row className="g-0">
                <Col>
                  <div className="contact-map">
                    <Googlemap />
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

export default ModernContact;
