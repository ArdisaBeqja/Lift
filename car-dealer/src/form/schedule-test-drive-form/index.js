import React from 'react';

// Libraries
import { useFormik } from 'formik';
import { ScheduleTestDriveFormSchema } from '../schemas';
import { Col, Row } from 'react-bootstrap';

// Import styles
import '../form.scss';

const initialValues = {
  Username: '',
  Email: '',
  PhoneNumber: '',
  PreferredDay: '',
  PreferredTime: '',
  toggle: false,
  checked: [],
};
function ScheduleTestDriveForm(props) {
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
    validationSchema: ScheduleTestDriveFormSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <>
      <div className={`test-drive-form ${props.className || ''}`}>
        {props?.formtitle && (
          <h5 className={`test-drive-form-title ${props.formtitleclass || ''}`}>
            {props.formtitle}
          </h5>
        )}
        {props?.formdescription && <p>{props.formdescription}</p>}
        <form className="pgs-form" onSubmit={handleSubmit}>
          <Row className="row-gap">
            <Col lg={12}>
              <p className="sub-text">
                Complete this form to request a test drive of your favorite car.
                Our Sales Advisor will contact you promptly to confirm your
                appointment.
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
                <label>Preferred Day*</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="PreferredDay"
                  id="preferredDay"
                  value={values.PreferredDay}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                />
                {errors.PreferredDay && touched.PreferredDay ? (
                  <p className="error">{errors.PreferredDay}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Preferred Time*</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="PreferredTime"
                  id="preferredday"
                  value={values.PreferredTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=""
                />
                {errors.PreferredTime && touched.PreferredTime ? (
                  <p className="error">{errors.PreferredTime}</p>
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
                  Schedule Now
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
}

export default ScheduleTestDriveForm;
