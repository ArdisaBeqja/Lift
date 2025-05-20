import React from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../layouts/page-header/PageHeader';

// Components
import SectionTitle from '../component/section-title/section-title';
import { PostStyle1, PostStyle2, PostStyle3, PostStyle4 } from '../component/blog';

// Site Data
import BlogList from '../data/blog-list';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ElementsBlog() {
  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Blog"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Elements', path: '#' },
            { label: 'Blog', path: '#', active: true },
          ]}
        />

        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Post Style 1" />
                  <div className="blog-wrapper grid-wrapper grid-lg-1 grid-md-1">
                    {BlogList.map((val, ind) => {
                      if (ind < 2) {
                        return (
                          <PostStyle1
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            metaDate={val.metaDate}
                            authorName={val.authorName}
                            title={val.title}
                            bydealer={val.bydealer}
                            shortDescription={val.shortDescription.slice(0, 150)}
                            mainDescription={val.mainDescription.slice(0, 200) + "..."}
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

          <section className="section-pb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Post Style 2" />
                </Col>
                <div className="blog-wrapper grid-wrapper grid-lg-3 grid-md-1">
                  {BlogList.map((val, ind) => {
                    if (ind < 3) {
                      return (
                        <PostStyle2
                          key={ind}
                          id={val.id}
                          imgSrc={val.imgSrc}
                          authorImg={val.authorImg}
                          authorName={val.authorName}
                          metaDate={val.metaDate}
                          comments={val.comments}
                          title={val.title}
                          shortDescription={val.shortDescription.slice(0, 115)}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Post Style 3" />
                </Col>
                <div className="blog-wrapper grid-wrapper grid-lg-3 grid-md-1">
                  {BlogList.map((val, ind) => {
                    if (ind < 3) {
                      return (
                        <PostStyle3
                          key={ind}
                          id={val.id}
                          imgSrc={val.imgSrc}
                          metaDate={val.metaDate}
                          category={val.category}
                          title={val.title}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Post Style 4" />
                </Col>
              </Row>
              
              <Row>
                <Col sm={6} className="mb-4 mb-md-0">
                  {BlogList.map((val, ind) => {
                      if (ind < 1) {
                        return (
                          <PostStyle4
                            key={ind}
                            id={val.id}
                            postType="first-large"
                            imgSrc={val.imgSrc}
                            metaDate={val.metaDate}
                            category={val.category}
                            title={val.title}
                            shortDescription={val.shortDescription.slice(0, 150)}
                          />
                        );
                      }
                      return null;
                    })}
                </Col>
                <Col sm={6}>
                    {BlogList.slice(1).map((val, ind) => {
                      if (ind < 3) {
                        return (
                          <PostStyle4
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            metaDate={val.metaDate}
                            category={val.category}
                            title={val.title}
                          />
                        );
                      }
                      return null;
                    })}
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-pb">
            <Container>
              <Row>
                <Col sm={12}>
                  <SectionTitle extraClass="mb-5" title="Post Type Slider" />
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      400: {
                        slidesPerView: 1,
                      },
                      570: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 2,
                      },
                      1199: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {BlogList.map((val, ind) => {
                      return (
                        <SwiperSlide key={ind}>
                          <PostStyle2
                            key={ind}
                            id={val.id}
                            imgSrc={val.imgSrc}
                            authorImg={val.authorImg}
                            authorName={val.authorName}
                            metaDate={val.metaDate}
                            comments={val.comments}
                            title={val.title}
                            shortDescription={val.shortDescription.slice(0, 85)}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsBlog;
