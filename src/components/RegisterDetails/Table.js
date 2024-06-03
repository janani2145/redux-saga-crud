import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUser } from '../../Redux/Action/Action';
import { useNavigate } from 'react-router-dom';

export const Table = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  }

  const handleEdit = (id) => {
    nav(`/edit/${id}`);
  }

  return (
    <div className="container mt-5"> 
      <div className="row justify-content-center"> 
        <div className="col-md-12">
          <table className='table  table-striped table-responsive text-center'>
            <thead >
              <tr>
                <th className='bg-dark text-white'>SI.No</th>
                <th className='bg-dark text-white' >First Name</th>
                <th className='bg-dark text-white'>Last Name</th>
                <th className='bg-dark text-white'>DOB</th>
                <th className='bg-dark text-white'>Nationality</th>
                <th className='bg-dark text-white'>Gender</th>
                <th className='bg-dark text-white'>Department</th>
                <th className='bg-dark text-white'>Student Id No</th>
                <th className='bg-dark text-white'>Email</th>
                <th className='bg-dark text-white'>Phone Number</th>
                <th className='bg-dark text-white'>Address</th>
                <th className='bg-dark text-white'>Zip Code</th>
              
                <th className='bg-dark text-white'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.dob}</td>
                  <td>{user.nation}</td>
                  <td>{user.gender}</td>
                  <td>{user.department}</td>
                  <td>{user.studentId}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.zip}</td>
                
                  
                  <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(user.id)}>Edit</button>
                    <button className=" ms-2 btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
