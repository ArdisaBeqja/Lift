import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../../component/section-title/section-title';
import BlogClassic from '../../component/blog';

// Site Data
import BlogList from '../../data/blog-list';

function Blog() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Blog"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'blog fullwidth', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="blog section-ptb">
            <Container>
              <Row>
                <Col lg={12}>
                  <SectionTitle
                    extraClass="text-center"
                    subtitle="Read what we say in our blog"
                    title="Our blog"
                    separator="separator"
                  />
                </Col>
                <Col md={12}>
                  <div className="blog-wrapper grid-wrapper grid-col-1">
                    {BlogList.map((val, ind) => {
                      if (ind < 5) {
                        return (
                          <BlogClassic
                            key={ind}
                            imgSrc={val.imgSrc}
                            title={val.title}
                            bydealer={val.bydealer}
                            comments={val.comments}
                            like={val.like}
                            news={val.news}
                            shortDescription={val.shortDescription}
                            id={val.id}
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
        </div>
      </div>
    </>
  );
}

export default Blog;
