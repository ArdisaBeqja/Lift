import React from 'react';

// Libraries
import { useFormik } from 'formik';
import { ContactFormSchema } from '../schemas';
import { Col, Row } from 'react-bootstrap';

// Import styles
import '../form.scss';

const initialValues = {
  Username: '',
  Email: '',
  PhoneNumber: '',
  Subject: '',
  Message: '',
};

function ContactForm3(props) {
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
    validationSchema: ContactFormSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <>
      <div className={`contact-form ${props.className || ''}`}>
        {props?.formtitle && (
          <h5 className={`contact-form-title ${props.formtitleclass || ''}`}>
            {props.formtitle}
          </h5>
        )}
        {props?.formdescription && <p>{props.formdescription}</p>}
        <form className="pgs-form" onSubmit={handleSubmit}>
          <Row className="row-gap">
            <Col lg={6}>
              <div className="input-control">
                <input
                  type="name"
                  autoComplete="off"
                  name="Username"
                  id="name"
                  value={values.Username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name*"
                />
                {errors.Username && touched.Username ? (
                  <p className="error">{errors.Username}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={6}>
              <div className="input-control">
                <input
                  type="email"
                  name="Email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email*"
                />
                {errors.Email && touched.Email ? (
                  <p className="error">{errors.Email}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={6}>
              <div className="input-control">
                <input
                  type="tel"
                  name="PhoneNumber"
                  value={values.PhoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Phone*"
                />
                {errors.PhoneNumber && touched.PhoneNumber ? (
                  <p className="error">{errors.PhoneNumber}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={6}>
              <div className="input-control">
                <input
                  type="text"
                  name="Subject"
                  value={values.Subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Subject*"
                />
                {errors.Subject && touched.Subject ? (
                  <p className="error">{errors.Subject}</p>
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
                  placeholder="Comment*"
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
                  Send your message
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
}

export default ContactForm3;
