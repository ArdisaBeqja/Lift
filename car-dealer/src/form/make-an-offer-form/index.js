import React from 'react';

// Libraries
import { useFormik } from 'formik';
import { MakeAnOfferFormSchema } from '../schemas';
import { Col, Row } from 'react-bootstrap';
import Select from 'react-select';

// Site Data
import { FinancingRequired } from '../../data/car-info';

// Import styles
import '../form.scss';

const initialValues = {
  Username: '',
  Email: '',
  PhoneNumber: '',
  Comments: '',
  OfferedPrice: '',
  Required: '',
  toggle: false,
  checked: [],
};
function MakeAnOfferForm(props) {
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
    validationSchema: MakeAnOfferFormSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <>
      <div className={`makeanoffer-form ${props.className || ''}`}>
        {props?.formtitle && (
          <h5
            className={`makeanoffer-form-title ${props.formtitleclass || ''}`}
          >
            {props.formtitle}
          </h5>
        )}
        {props?.formdescription && <p>{props.formdescription}</p>}
        <form className="pgs-form" onSubmit={handleSubmit}>
          <Row className="row-gap">
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
                <label>Offered Price*</label>
                <input
                  type="text"
                  name="OfferedPrice"
                  value={values.OfferedPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                />
                {errors.OfferedPrice && touched.OfferedPrice ? (
                  <p className="error">{errors.OfferedPrice}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Financing Required*</label>
                <Select
                  options={FinancingRequired}
                  name="Required"
                  placeholder="yes"
                />
                {errors.Required && touched.Required ? (
                  <p className="error">{errors.Required}</p>
                ) : null}
              </div>
            </Col>

            <Col lg={12}>
              <div className="input-control">
                <label>additional Comments/Conditions*</label>
                <textarea
                  rows={5}
                  name="Comments"
                  value={values.Comments}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                />
                {errors.Comments && touched.Comments ? (
                  <p className="error">{errors.Comments}</p>
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

export default MakeAnOfferForm;
