import React from 'react';

// Libraries
import { useFormik } from 'formik';
import { TradeInAppraisalSchema } from '../schemas';
import { Col, FormCheck, Row } from 'react-bootstrap';

// Import styles
import '../form.scss';

const initialValues = {
  FirstName: '',
  LastName: '',
  WorkPhoneNumber: '',
  PhoneNumber: '',
  Email: '',
  Comments: '',
  CarOptions: 'false',
  toggle: 'false',
  checked: [],
};

const CheckBoxOptions = [
  {
    id: 1,
    type: 'checkbox',
    value: 'navigation',
    label: 'Navigation',
  },
  {
    id: 2,
    type: 'checkbox',
    value: 'sunroof',
    label: 'Sunroof',
  },
  {
    id: 3,
    type: 'checkbox',
    value: 'Leather',
    label: 'Leather',
  },
  {
    id: 4,
    type: 'checkbox',
    value: 'airconditioning',
    label: 'Air conditioning',
  },
  {
    id: 5,
    type: 'checkbox',
    value: 'powerwindows',
    label: 'Power Windows',
  },
  {
    id: 6,
    type: 'checkbox',
    value: 'powerlocks',
    label: 'Power Locks',
  },
  {
    id: 7,
    type: 'checkbox',
    value: 'powerseats',
    label: 'Power Seats',
  },
  {
    id: 8,
    type: 'checkbox',
    value: 'cruisecontrol',
    label: 'Cruise Control',
  },
  {
    id: 9,
    type: 'checkbox',
    value: 'cassette',
    label: 'Cassette',
  },
  {
    id: 10,
    type: 'checkbox',
    value: 'dvdplayer',
    label: 'DVD Player',
  },
  {
    id: 11,
    type: 'checkbox',
    value: 'alloywheels',
    label: 'Alloy Wheels',
  },
  {
    id: 12,
    type: 'checkbox',
    value: 'satelliteradio',
    label: 'Satellite Radio',
  },
  {
    id: 13,
    type: 'checkbox',
    value: 'cdplayerchanger',
    label: 'CD Player / Changer',
  },
  {
    id: 14,
    type: 'checkbox',
    value: 'amfmstereo',
    label: 'AM/FM Stereo',
  },
];
function TradeInAppraisalForm(props) {
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
    validationSchema: TradeInAppraisalSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);

  // const onHandleChange = useCallback((value, name) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // });

  // const [form, setForm] = useState({
  //   lang: ['english'],
  //   hobbies: [],
  // });

  return (
    <>
      <div className={`trade-in-appraisal-form ${props.className || ''}`}>
        {props?.formtitle && (
          <h5
            className={`trade-in-appraisal-form-title ${props.formtitleclass || ''}`}
          >
            {props.formtitle}
          </h5>
        )}
        {props?.formdescription && <p>{props.formdescription}</p>}
        <form className="pgs-form" onSubmit={handleSubmit}>
          <Row className="row-gap">
            <Col lg={6}>
              <h6 className="title">Contact Information </h6>
              <Row className="row-gap">
                <Col md={6}>
                  <div className="input-control">
                    <label>First Name*</label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="FirstName"
                      id="firstname"
                      value={values.FirstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                    {errors.FirstName && touched.FirstName ? (
                      <p className="error">{errors.FirstName}</p>
                    ) : null}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="input-control">
                    <label>Last Name*</label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="LastName"
                      id="lastname"
                      value={values.LastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                    {errors.LastName && touched.LastName ? (
                      <p className="error">{errors.LastName}</p>
                    ) : null}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="input-control">
                    <label>Work Phone*</label>
                    <input
                      type="tel"
                      name="WorkPhoneNumber"
                      value={values.WorkPhoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                    {errors.WorkPhoneNumber && touched.WorkPhoneNumber ? (
                      <p className="error">{errors.WorkPhoneNumber}</p>
                    ) : null}
                  </div>
                </Col>
                <Col md={6}>
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
                <Col md={6}>
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
                <Col md={6}>
                  <div className="preferred-contact">
                    <label>Preferred Contact*</label>
                    <div className="radio-Box">
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
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="input-control">
                    <label>Comments*</label>
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
              </Row>
            </Col>
            <Col lg={6}>
              <h6 className="title">Options</h6>
              <div className="form car-options">
                {CheckBoxOptions.map((val, index) => (
                  <FormCheck
                    key={index}
                    label={val.label}
                    value={val.value}
                    name="CarOptions"
                    type={val.type}
                    id={val.id}
                    onChange={handleChange}
                  />
                ))}
              </div>
              {errors.CarOptions && touched.CarOptions ? (
                <p className="error">{errors.CarOptions}</p>
              ) : null}
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

export default TradeInAppraisalForm;
