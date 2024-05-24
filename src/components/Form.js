// Form.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../action/action';


const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData({ title, body }));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
