import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUser } from '../../Redux/Action/Action';
import { useNavigate } from 'react-router-dom';

export const Table = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const nav= useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

const handleDelete=(id)=>{
dispatch(deleteUser(id));
  }
  const handleEdit=(id)=>{
    nav(`/${id}`)
  }

  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>SI.No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Roll No</th>
            <th>DOB</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.department}</td>
              <td>{user.roll}</td>
              <td>{user.dob}</td>
              <td>{user.phone}</td>
              <td>
              <button onClick={()=>handleEdit(user.id)}>Edit</button>
              <button onClick={()=>handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
