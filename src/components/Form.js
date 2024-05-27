// Form.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../action/action';


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [employee, setEmployee] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData({ name, email,employee,dob,phone }));
    setName('');
    setEmail('');
    setEmployee('');
    setDob('');
    setPhone('');
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Employoee Id</label>
        <input type="number" value={employee} onChange={(e) => setEmployee(e.target.value)} />
      </div>
      <div>
        <label>DOB:</label>
        <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
