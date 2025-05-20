// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Components
import SectionTitle from '../component/section-title/section-title';
import { PostStyle1 } from '../component/blog';

// Site Data
import BlogList from '../data/blog-list';
import ObjectsImagesLeft from '../assets/images/objects/03.webp';
import ObjectsImagesRight from '../assets/images/objects/04.webp';

function LatestNewsSection(props) {
  return (
    <>
      <section className="section-ptb latest-blog objects-car bg-white">
        <div className="objects-left">
          <img className="img-fluid objects-1" src={ObjectsImagesLeft} alt="" />
        </div>
        <div className="objects-right">
          <img
            className="img-fluid objects-2"
            src={ObjectsImagesRight}
            alt=""
          />
        </div>
        <Container>
          <Row>
            <Col md={12}>
              <SectionTitle
                extraClass="text-center"
                subtitle="Read our latest news"
                title="Latest News"
                separator="separator"
              />
            </Col>
            <Col md={12}>
              <div className="blog-wrapper grid-wrapper grid-lg-1 grid-md-1">
                {BlogList.map((val, ind) => {
                  if (ind < 1) {
                    return (
                      <PostStyle1
                        key={ind}
                        id={val.id}
                        imgSrc={val.imgSrc}
                        authorImg={val.authorImg}
                        authorName={val.authorName}
                        date={val.date}
                        comments={val.comments}
                        title={val.title}
                        shortDescription={val.shortDescription.slice(0, 150) + "..."}
                        mainDescription={val.mainDescription.slice(0, 300) + "..."}
                        buttontext="Read More"
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
    </>
  );
}
export default LatestNewsSection;
