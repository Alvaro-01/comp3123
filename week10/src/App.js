import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'address1') {
      setAddress1(value);
    } else if (name === 'address2') {
      setAddress2(value);
    } else if (name === 'city') {
      setCity(value);
    } else if (name === 'province') {
      setProvince(value);
    } else if (name === 'zipCode') {
      setZipCode(value);
    }
  };

  const handleOutput = () => {
    setOutput(`Name: ${name}\nEmail: ${email}\nAddress 1: ${address1}\nAddress 2: ${address2}\nCity: ${city}\nProvince: ${province}\nZip Code: ${zipCode}`);
  };

  // Sample list of Canadian provinces
  const provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island',
    'Quebec', 'Saskatchewan'
  ];
  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <div className="input-section">
        
        <div className="input-container">
          <p>Name</p>
         
          <input type="text" name="name" value={name} onChange={handleInputChange} />
          
          <p>Email</p>
          <input type="text" name="email" value={email} onChange={handleInputChange} />
        </div>
      </div>
      <div className="input-section">
        <h2>Address Information</h2>
        <div className="input-container">
          <label>Address 1:</label>
          <input type="text" name="address1" value={address1} onChange={handleInputChange} />
        </div>
        <div className="input-container">
          <label>Address 2:</label>
          <input type="text" name="address2" value={address2} onChange={handleInputChange} />
        </div>
        <div className="input-container">
          <label>City:</label>
          <input type="text" name="city" value={city} onChange={handleInputChange} />
        </div>
        <div className="input-container">
          <label>Province:</label>
          <select name="province" value={province} onChange={handleInputChange}>
            <option value="" disabled>Select Province</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label>Zip Code:</label>
          <input type="text" name="zipCode" value={zipCode} onChange={handleInputChange} />
        </div>
      </div>
      <button onClick={handleOutput}>Submit</button>
      <div>
        <h2>Output:</h2>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default App;