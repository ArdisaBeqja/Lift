import React from 'react';

// Libraries
import { useFormik } from 'formik';
import { NewsletterWidgetSchema } from '../schemas';

// Component
import '../../component/button/button.scss';

// Import styles
import './newsletter.scss';

const initialValues = {
  Email: '',
  toggle: false,
};

function NewsletterForm(props) {
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
    validationSchema: NewsletterWidgetSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  //console.log(errors);

  return (
    <>
      <div className={`newsletter-wrapper ${props.newsLetterStyle || ''}`}>
        <form className={`newsletter-form ${props.className || ''}`}  onSubmit={handleSubmit}>
          <div className="input-control">
            <input
              type="email"
              name="Email"
              value={values.Email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your Email"
            />
            
            {props.newsLetterStyle === 'newsletter-style-1' && (
              <button className="button" disabled={isSubmitting} type="submit">
                {props?.buttontext && <span>{props.buttontext}</span> || <span>Subscribe</span>}
              </button>
              ) || props.newsLetterStyle === 'newsletter-style-2' && (
                <button className="button" disabled={isSubmitting} type="submit">
                  {props?.buttonicon && <i className={props.buttonicon}></i> || <i className="fa-solid fa-paper-plane"></i>}
                </button>
              ) || <button className="button" disabled={isSubmitting} type="submit">
              {props?.buttontext && <span>{props.buttontext}</span> || <span>Subscribe</span>}
            </button>}
          </div>

          {errors.Email && touched.Email ? (
              <p className="error">{errors.Email}</p>
            ) : null}
        </form>
      </div>
    </>
  );
}

export default NewsletterForm;
