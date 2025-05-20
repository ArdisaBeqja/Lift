import React from 'react';

// Libraries
import { useFormik } from 'formik';
import { RequestMoreInfoFormSchema } from '../schemas';
import { Col, Row } from 'react-bootstrap';

// Import styles
import '../form.scss';

const initialValues = {
  Username: '',
  Email: '',
  PhoneNumber: '',
  Message: '',
  toggle: false,
  checked: [],
};
function RequestMoreInfoForm(props) {
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
    validationSchema: RequestMoreInfoFormSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <>
      <div className={`request-form ${props.className || ''}`}>
        {props?.formtitle && (
          <h5 className={`request-form-title ${props.formtitleclass || ''}`}>
            {props.formtitle}
          </h5>
        )}
        {props?.formdescription && <p>{props.formdescription}</p>}
        <form className="pgs-form" onSubmit={handleSubmit}>
          <Row className="row-gap">
            <Col lg={12}>
              <p className="sub-text">
                Please fill out the information below and one of our
                representatives will contact you regarding your more information
                request.
              </p>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Name*</label>
                <input
                  type="name"
                  autoComplete="off"
                  name="Username"
                  id="name"
                  value={values.Username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                />
                {errors.Username && touched.Username ? (
                  <p className="error">{errors.Username}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Email address*</label>
                <input
                  type="email"
                  name="Email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                />
                {errors.Email && touched.Email ? (
                  <p className="error">{errors.Email}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Phone*</label>
                <input
                  type="tel"
                  name="PhoneNumber"
                  value={values.PhoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                />
                {errors.PhoneNumber && touched.PhoneNumber ? (
                  <p className="error">{errors.PhoneNumber}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Message</label>
                <textarea
                  rows={5}
                  name="Message"
                  value={values.Message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                />
                {errors.Message && touched.Message ? (
                  <p className="error">{errors.Message}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="preferred-contact">
                <label>Preferred Contact*</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    label="1"
                    name="group1"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label p-0 text-uppercase"
                    for="flexRadioDefault1"
                  >
                    Email
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    label="2"
                    name="group1"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label p-0 text-uppercase"
                    for="flexRadioDefault2"
                  >
                    Phone
                  </label>
                </div>
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

export default RequestMoreInfoForm;
