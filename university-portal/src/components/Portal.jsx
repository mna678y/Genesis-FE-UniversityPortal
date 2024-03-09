import React, { useState } from 'react';
import './Portal.css';
import DataBox from './DataBox';

function Portal() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItemsValue] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    console.log('input country name ='+ inputValue);
    fetch('http://localhost:9001/universities?country='+inputValue)
    .then(function(response){return response.json();})
    .then(function(data){
        setItemsValue(data);
        console.log(data);
    })
  };

  return (
    <div className="container">
      <h1 className="heading">University Portal</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="input country name"
          className="input-field"
        />
        <button onClick={handleSubmit} className="button">Fetch</button>
      </div>
      <DataBox data={items} />
    </div>
  );
}

export default Portal;