import { Link } from 'react-router-dom';

// Site Data
import authorImage1 from '../../assets/images/avatar/01.webp';
import authorImage2 from '../../assets/images/avatar/02.webp';
import authorImage3 from '../../assets/images/avatar/03.webp';
import authorImage4 from '../../assets/images/avatar/04.webp';
import authorImage5 from '../../assets/images/avatar/05.webp';

// SCSS
import './comments.scss';

function BlogComments(props) {
  return (
    <>
      <div className={`comments ${props.className || ''}`}>
        <h4 className="comments-title">{props.title}</h4>
        <ul className="comment-list">
          <li className="comment">
            <div className="comment-box">
              <div className="author-image">
                <img
                  className="img-fluid"
                  src={authorImage1}
                  alt="Alice Williams"
                />
              </div>
              <div className="author-info">
                <div className="title-area">
                  <h6 className="title">Alice Williams</h6>
                  <Link className="reply-btn" to="#">
                    <i className="fas fa-reply pe-2"></i>Reply
                  </Link>
                </div>
                <div className="content-area">
                  <p>
                    Then work backwards to develop the plan. What steps are
                    required to get you to the goals? Make the plan as detailed
                    as possible. Try to visualize and then plan.
                  </p>
                </div>
              </div>
            </div>
            <ul className="comment-list">
              <li className="comment">
                <div className="comment-box">
                  <div className="author-image">
                    <img
                      className="img-fluid"
                      src={authorImage2}
                      alt="Mellissa Doe"
                    />
                  </div>
                  <div className="author-info">
                    <div className="title-area">
                      <h6 className="title">Mellissa Doe</h6>
                      <Link className="reply-btn" to="#">
                        <i className="fas fa-reply pe-2"></i>Reply
                      </Link>
                    </div>
                    <div className="content-area">
                      <p>
                        Every possible setback. Commit the plan to paper and
                        then keep it with you at all times. Review it regularly
                        and ensure that every step takes you closer.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="comment">
                <div className="comment-box">
                  <div className="author-image">
                    <img
                      className="img-fluid"
                      src={authorImage3}
                      alt="Paul Flavius"
                    />
                  </div>
                  <div className="author-info">
                    <div className="title-area">
                      <h6 className="title">Paul Flavius</h6>
                      <Link className="reply-btn" to="#">
                        <i className="fas fa-reply pe-2"></i>Reply
                      </Link>
                    </div>
                    <div className="content-area">
                      <p>
                        Every possible setback. Commit the plan to paper and
                        then keep it with you at all times. Review it regularly
                        and ensure that every step takes you closer.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="comment">
            <div className="comment-box">
              <div className="author-image">
                <img
                  className="img-fluid"
                  src={authorImage4}
                  alt="Michael Bean"
                />
              </div>
              <div className="author-info">
                <div className="title-area">
                  <h6 className="title">Michael Bean</h6>
                  <Link className="reply-btn" to="#">
                    <i className="fas fa-reply pe-2"></i>Reply
                  </Link>
                </div>
                <div className="content-area">
                  <p>
                    Then work backwards to develop the plan. What steps are
                    required to get you to the goals? Make the plan as detailed
                    as possible. Try to visualize and then plan.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="comment">
            <div className="comment-box">
              <div className="author-image">
                <img
                  className="img-fluid"
                  src={authorImage5}
                  alt="Homer Reyes"
                />
              </div>
              <div className="author-info">
                <div className="title-area">
                  <h6 className="title">Homer Reyes</h6>
                  <Link className="reply-btn" to="#">
                    <i className="fas fa-reply pe-2"></i>Reply
                  </Link>
                </div>
                <div className="content-area">
                  <p>
                    Then work backwards to develop the plan. What steps are
                    required to get you to the goals? Make the plan as detailed
                    as possible. Try to visualize and then plan.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BlogComments;
