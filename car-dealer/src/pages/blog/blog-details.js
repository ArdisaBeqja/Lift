import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Widget
import SideBar from '../../widget/sidebar';
import { BlogSocialInfo } from '../../widget/social-info/social-info';
// import BlogForm from '../../form/blog-form';

// Site Data
import BlogList from '../../data/blog-list';

// SCSS
import '../../component/blog/blog.scss';

function BlogSingle() {
  // Single Post Dynaic ID
  let { id } = useParams();
  const blogdata = BlogList.find((e) => e.id === parseInt(id));

  // Next Previous Post Navigation
  const previousPost = parseInt(id) - 1;
  const nextPost = parseInt(id) + 1;

  const isFirstPost = previousPost === 0;
  const isLastPost = nextPost > BlogList.length;

  const previousTitle = BlogList[previousPost - 1];
  const nextTitle = BlogList[parseInt(id)];

  return (
    <>
      <div className="site-content">
        <PageHeader
          title={blogdata.title}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Blog Single', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="blog-single section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={{span: 8, order: '2'}}>
                  <article className="blog-entry">
                    <div className="blog-entry-image">
                      <img className="w-100" src={blogdata.imgSrc} alt="" />
                    </div>
                    <div className="entry-content">
                      <h5 className="entry-title">{blogdata.title}</h5>
                      {/* <div className="entry-meta">
                        <ul>
                          <li className="entry-meta-bydealer">
                            <Link to="#">
                              <i className="fa-solid fa-user"></i>
                              {blogdata.bydealer}
                            </Link>
                          </li>
                          <li className="entry-meta-comments">
                            <Link to="#">
                              <i className="fa-solid fa-comments"></i>
                              {blogdata.comments} Comments
                            </Link>
                          </li>
                          <li className="entry-meta-news">
                            <Link to="#">
                              <i className="fa-solid fa-folder-open"></i>
                              {blogdata.news}
                            </Link>
                          </li>
                          <li className="entry-meta-like">
                            <Link to="#">
                              <i className="fa-solid fa-heart"></i>
                              {blogdata.like}
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                      <div className="entry-description">
                        <p>{blogdata.description}</p>
                        <p>{blogdata.mainDescription}</p>
                      </div>
                      <blockquote className="blockquote mt-5">
  {blogdata.quote}
  <cite> {blogdata.quoteAuthor}</cite>
</blockquote>

{blogdata.extraParagraphs?.map((para, index) => (
  <p key={index}>{para}</p>
))}

                    </div>

                    <div className="entry-share">
                      {/* <Link to="#" className="button">
                        Read More
                      </Link> */}

                      <div className="share">
                        <Link to="#">
                          <i className="fa-solid fa-share-nodes"></i>
                        </Link>
                        <div className="blog-social">
                          <BlogSocialInfo />
                        </div>
                      </div>
                    </div>

                    <div className="post-navigation">
                      <div className="nav-previous">
                        {isFirstPost ? null : (
                          <Link
                            className=""
                            to={`/blog-details/${previousPost}`}
                          >
                            <span className="port">
                              <span className="port-arrow">
                                <i className="fa-solid fa-angle-left"></i>
                              </span>
                              <span className="port-photo">
                                <img src={previousTitle.imgSrc} alt="" />
                              </span>
                            </span>
                            <span className="post-title">
                              {previousTitle.title}
                            </span>
                          </Link>
                        )}
                      </div>
                      <div className="nav-next">
                        {isLastPost ? null : (
                          <Link
                            className="btn-primary-round"
                            to={`/blog-details/${nextPost}`}
                          >
                            <span className="port">
                              <span className="port-photo">
                                <img src={nextTitle.imgSrc} alt="" />
                              </span>
                              <span className="port-arrow">
                                <i className="fa-solid fa-angle-right"></i>
                              </span>
                            </span>
                            <span className="post-title">
                              {nextTitle.title}
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* <BlogForm /> */}
                  </article>
                </Col>
                <Col lg={{span: 4, order: '1'}}>
                  <SideBar className="mt-5 mt-lg-0" />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default BlogSingle;
