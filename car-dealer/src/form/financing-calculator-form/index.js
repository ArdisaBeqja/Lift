import React, { useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

// Import styles
import '../form.scss';

const initialValues = {
  amount: '',
  downPayment: '',
  interestRate: '',
  loanTerm: '',
};

function FinancingCalculatorForm(props) {
  const [amount, setamount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [error, setError] = useState('');

  const calculateMonthlyPayment = () => {
    if (!amount || !interestRate || !loanTerm) {
      setError('Please fill in all fields.');
      alert('Please fill all the fields !!!');
      setMonthlyPayment('');
      return;
    }

    const loanAmount =
      parseFloat(amount) - (downPayment ? parseFloat(downPayment) : 0);

    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 1;

    const numerator = loanAmount * r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;

    const monthlyPayment = (numerator / denominator).toFixed(2);
    setMonthlyPayment(monthlyPayment);

    const totalPayable = (monthlyPayment * n).toFixed(2);
    setTotalPayable(totalPayable);

    const totalInterest = (totalPayable - loanAmount).toFixed(2);
    setTotalInterest(totalInterest);
    setError('');
  };
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
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <div className={`financing-form ${props.className || ''}`}>
      {props?.formtitle && (
        <h5 className={`financing-form-title ${props.formtitleclass || ''}`}>
          {props.formtitle}
        </h5>
      )}
      {props?.formdescription && <p>{props.formdescription}</p>}
      {props?.formlink && <Link to="">{props.formlink}</Link>}
      <form className="pgs-form" onSubmit={handleSubmit}>
        <Row className="row-gap">
          <Col lg={12}>
            <div className="input-control">
              <label>Vehicle Price ($)*</label>
              <input
                type="number"
                name="LoanAmount"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                onBlur={handleBlur}
                placeholder="Price"
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="input-control">
              <label>Down Payment *</label>
              <input
                type="number"
                name="DownPayment"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                onBlur={handleBlur}
                placeholder="Payment"
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="input-control">
              <label>Interest rate (%)*</label>
              <input
                type="number"
                name="InterestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                onBlur={handleBlur}
                placeholder="Rate"
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="input-control">
              <label>Period (Month)*</label>
              <input
                type="number"
                name="Period"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                onBlur={handleBlur}
                placeholder="Month"
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="input-control">
              <label>Payment</label>
              {monthlyPayment && (
                <div className="res">
                  ${monthlyPayment}
                  <sup>/mo</sup>
                </div>
              )}
            </div>
          </Col>
          <Col lg={12}>
            <div className="input-control">
              <button onClick={calculateMonthlyPayment} className="button red">
                Estimate Payment
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default FinancingCalculatorForm;
