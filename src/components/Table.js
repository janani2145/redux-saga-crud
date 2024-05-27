// Table.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../action/action';


const Table = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Employee Id</th>
          <th>DOB</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.employee}</td>
            <td>{item.dob}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
