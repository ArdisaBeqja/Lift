import React from 'react';

// Libraries
import { Col, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { BlogFormSchema } from '../schemas';

// Import styles
import '../form.scss';

const initialValues = {
  Email: '',
  PhoneNumber: '',
  Password: '',
  Message: '',
};

function BlogForm(props) {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: BlogFormSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <>
      <div className={`blog-form ${props.className || ''}`}>
        {props?.formtitle && (
          <h5 className={`blog-form-title ${props.formtitleclass || ''}`}>
            {props.formtitle}
          </h5>
        )}
        {props?.formdescription && <p>{props.formdescription}</p>}
        <form className="pgs-form" onSubmit={handleSubmit}>
          <Row className="row-gap">
            <Col lg={4}>
              <div className="input-control">
                <input
                  type="email"
                  name="Email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                />
                {errors.Email && touched.Email ? (
                  <p className="error">{errors.Email}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={4}>
              <div className="input-control">
                <input
                  type="tel"
                  name="PhoneNumber"
                  value={values.PhoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Phone"
                />
                {errors.PhoneNumber && touched.PhoneNumber ? (
                  <p className="error">{errors.PhoneNumber}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={4}>
              <div className="input-control">
                <input
                  type="password"
                  name="Password"
                  value={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
                {errors.Password && touched.Password ? (
                  <p className="error">{errors.Password}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <textarea
                  rows={5}
                  name="Message"
                  value={values.Message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Comment"
                />
                {errors.Message && touched.Message ? (
                  <p className="error">{errors.Message}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <button
                  className="button red"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
}

export default BlogForm;
