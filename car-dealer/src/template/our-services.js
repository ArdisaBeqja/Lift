// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Site Data
import ServicesImg from '../assets/images/a111.avif';

const ServicesList = [
  {
    id: 1,
    item: 'Wide Selection of Vehicles: Choose from the latest models and high-quality used cars from trusted brands.',
  },
  {
    id: 2,
    item: 'Financing & Leasing Options: Flexible financing plans tailored to your needs, with competitive interest rates and transparent terms.',
  },
  {
    id: 3,
    item: 'Trade-In Assistance: Get a fair market value for your current vehicle and put it toward your new purchase.',
  },
  {
    id: 4,
    item: 'Professional Customer Service: Our knowledgeable and friendly team is here to guide you every step of the way—from your first visit to final delivery.',
  },
];

function OurServices(props) {
  return (
    <>
      <section className="section-ptb service-center ">
        <Container>
          <Row>
            <Col lg={6}>
              <h5>
                We Provide Premium Car Dealership Services You Can Trust
              </h5>
              <p>
                At our dealership, we are dedicated to helping you find the perfect vehicle that suits your lifestyle and budget. Whether you're looking for a brand-new car, a certified pre-owned vehicle, or expert advice, we offer a full range of services designed to make your car buying experience smooth, transparent, and enjoyable.
              </p>
              <ul className="list-unstyled mb-0">
                {ServicesList.map((list, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    <span className="">{list.item}</span>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <img className="img-fluid" src={ServicesImg} alt=""  style={{ marginTop: '77px' }}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default OurServices;
