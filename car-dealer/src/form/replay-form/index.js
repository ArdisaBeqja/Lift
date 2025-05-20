import React from 'react';
import { useState } from 'react';

// Import styles
import '../form.scss';

function ReplayForm(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(inputs);
    console.log(inputs);
  };

  return (
    <>
      <div className={`replay-form ${props.className || ''}`}>
        <h4 className="replay-form-title">{props.title}</h4>
        <form className="pgs-form form-control" onSubmit={handleSubmit}>
          <div className="row row-gap">
            <div className="col-sm-6">
              <div className="input-control">
                <label>Username : </label>
                <input
                  type="text"
                  name="Ussername"
                  defaultValue={inputs.Username || ''}
                  onChange={handleChange}
                  placeholder="John Smith"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-control">
                <label>Email :</label>
                <input
                  type="emal"
                  name="Email"
                  defaultValue={inputs.Email || ''}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-control">
                <label>Phone Number :</label>
                <input
                  type="tel"
                  name="PhoneNumber"
                  defaultValue={inputs.PhoneNumber || ''}
                  onChange={handleChange}
                  placeholder="+123456789"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-control">
                <label>Subject :</label>
                <input
                  type="text"
                  name="Subject"
                  defaultValue={inputs.Message || ''}
                  onChange={handleChange}
                  placeholder="Add Subject"
                />
              </div>
            </div>
            <div className="input-control">
              <label>Message :</label>
              <textarea
                rows={5}
                name="Message"
                defaultValue={inputs.Message || ''}
                onChange={handleChange}
                placeholder="Type Message here!"
              />
            </div>
            <div className="input-control">
              <button className="btn-primary" type="submit">
                Submit Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReplayForm;
