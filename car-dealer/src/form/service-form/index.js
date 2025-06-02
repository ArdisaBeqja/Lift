import React, { useState } from 'react';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com'; // same as EnquiryForm
import { Col, Row, Modal, Button } from 'react-bootstrap';

import { ServiceFormSchema } from '../schemas';
import '../form.scss';

const initialValues = {
  Username: '',
  Email: '',
  PhoneNumber: '',
  Message: '',
};

function ServiceForm(props) {
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: ServiceFormSchema,
    onSubmit: (values, actions) => {
      setErrorMsg('');
      const templateParams = {
        username: values.Username,
        email: values.Email,
        phone: values.PhoneNumber,
        message: values.Message,
      };

      emailjs
        .send(
          'service_hy5p5di',
          'template_20t6bhk',
          templateParams,
          'uFfAcMpmRPfwD6I_j'
        )
        .then((response) => {
          setShowModal(true);
          actions.resetForm();
          actions.setSubmitting(false);
        })
        .catch((error) => {
          setErrorMsg('There was an error sending your message. Please try again.');
          actions.setSubmitting(false);
          console.error('EmailJS error:', error);
        });
    },
  });

  return (
    <div className={`service-form ${props.className || ''}`}>
      {props.formtitle && (
        <h5 className={`service-form-title ${props.formtitleclass || ''}`}>
          {props.formtitle}
        </h5>
      )}
      {props.formdescription && <p>{props.formdescription}</p>}

      <form className="pgs-form" onSubmit={handleSubmit} noValidate>
        <Row className="row-gap">
          <Col lg={4}>
            <div className="input-control">
              <input
                type="text"
                autoComplete="off"
                name="Username"
                id="Username"
                value={values.Username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name*"
              />
              {errors.Username && touched.Username && (
                <p className="error">{errors.Username}</p>
              )}
            </div>
          </Col>

          <Col lg={4}>
            <div className="input-control">
              <input
                type="email"
                name="Email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email*"
              />
              {errors.Email && touched.Email && (
                <p className="error">{errors.Email}</p>
              )}
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
                placeholder="Phone*"
              />
              {errors.PhoneNumber && touched.PhoneNumber && (
                <p className="error">{errors.PhoneNumber}</p>
              )}
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
              {errors.Message && touched.Message && (
                <p className="error">{errors.Message}</p>
              )}
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

      {errorMsg && <p className="error mt-3">{errorMsg}</p>}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you! Your message has been successfully sent. We’ll get back to you soon.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ServiceForm;
