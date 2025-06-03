import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import { EnquiryFormSchema } from '../schemas';
import { Col, Row, Modal, Button } from 'react-bootstrap';
import '../form.scss';

const initialValues = {
  Username: '',
  Email: '',
  Message: '',
};

function EnquiryForm(props) {
  const [showModal, setShowModal] = useState(false);

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
    validationSchema: EnquiryFormSchema,
    onSubmit: (values, actions) => {
      const templateParams = {
        from_name: values.Username,
        from_email: values.Email,
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
          // console.log('SUCCESS!', response.status, response.text);
          setShowModal(true); // Show modal
          actions.resetForm();
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('There was an error sending your message. Please try again.');
        });
    },
  });

  return (
    <div className={`enquiry-form ${props.className || ''}`}>
      {props?.formtitle && (
        <h5 className={`enquiry-form-title ${props.formtitleclass || ''}`}>
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
                type="text"
                autoComplete="off"
                name="Username"
                id="name"
                value={values.Username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name"
              />
              {errors.Username && touched.Username && (
                <p className="error">{errors.Username}</p>
              )}
            </div>
          </Col>
          <Col lg={12}>
            <div className="input-control">
              <label>Your Email address*</label>
              <input
                type="email"
                name="Email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
              />
              {errors.Email && touched.Email && (
                <p className="error">{errors.Email}</p>
              )}
            </div>
          </Col>
          <Col lg={12}>
            <div className="input-control">
              <label>Message*</label>
              <textarea
                rows={5}
                name="Message"
                value={values.Message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Message"
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
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </form>

      {/* ✅ Bootstrap Modal for Success Message */}
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

export default EnquiryForm;
