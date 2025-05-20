import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import { PostStyle2 } from '../../component/blog';

// SIte Data
import BlogList from '../../data/blog-list';

function BlogGrid() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Blog"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Blog Grid', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="blog-wrapper grid-wrapper grid-lg-3 grid-md-1">
                    {BlogList.map((val, ind) => {
                      if (ind < 9) {
                        return (
                          <PostStyle2
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            authorImg={val.authorImg}
                            authorName={val.authorName}
                            date={val.date}
                            comments={val.comments}
                            title={val.title}
                            shortDescription={val.shortDescription.slice(0, 115)}
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

export default BlogGrid;
