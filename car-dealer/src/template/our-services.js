// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Site Data
import ServicesImg from '../assets/images/services/services-img2.webp';

const ServicesList = [
  {
    id: 1,
    item: ' Dynamicus, qui sequitur mutationem consuetudium lectorum.',
  },
  {
    id: 2,
    item: 'Sequitur dynamicus, qui mutationem consuetudium lectorum.',
  },
  {
    id: 3,
    item: 'Mutationem dynamicus, qui sequitur consuetudium lectorum.',
  },
  {
    id: 4,
    item: 'Consuetudium dynamicus, qui sequitur mutationem lectorum.',
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
                We provide best services processus dynamicus qui sequitur
                mutationem co mutationem.
              </h5>
              <p>
                Dynamicus qui sequitur mutationem consuetudium lectorum. Mirum
                est notare quam littera gothica, quam nunc putamus parum
                claram.dynamicus, qui sequitur mutationem consuetudium lectorum.
                Mirum est notare quam littera gothica, quam nunc putamus parum
                claram.dynamicus, qui sequitur mutationem consuetudium lectorum.
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
              <img className="img-fluid" src={ServicesImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default OurServices;
