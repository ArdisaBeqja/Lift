import React, { useState } from 'react';

import '../widget.scss';

function SearchWidget(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className={`widget widget-search ${props.className || '' }`}>
      {props?.title && <h3 className="widget-title">{props.title}</h3>}
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Search"
          defaultValue={inputs.Search || ''}
          onChange={handleChange}
          placeholder="Search here"
        />
        <button type="submit">
          <i className="fa fa-search not-click"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchWidget;
