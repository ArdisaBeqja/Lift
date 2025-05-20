import React from 'react';

// Libraries
import { useFormik } from 'formik';
import { ContactFormSchema } from '../schemas';

// Import styles
import '../form.scss';

const initialValues = {
  Username: '',
  Email: '',
  PhoneNumber: '',
  Message: '',
};

function RequirementsForm(props) {
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
      <div className={`form-wrapper ${props.className || ''}`}>
        <form className="pgs-form pgs-form-vertical" onSubmit={handleSubmit}>
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
          <div className="input-control">
            <textarea
              rows={3}
              name="Message"
              value={values.Message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Write a Message"
            />
            {errors.Message && touched.Message ? (
              <p className="error">{errors.Message}</p>
            ) : null}
          </div>
          <div className="input-control">
            <button
              className="button red"
              disabled={isSubmitting}
              type="submit"
            >
              Send your message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RequirementsForm;
