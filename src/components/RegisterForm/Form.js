import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, fetchIdUser, updateUser } from '../../Redux/Action/Action';
import { useNavigate, useParams } from 'react-router-dom';

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [roll, setRoll] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(fetchIdUser(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (user && id) {
      setName(user.name);
      setDepartment(user.department);
      setRoll(user.roll);
      setDob(user.dob);
      setPhone(user.phone);
    }
  }, [user, id]);

  function reset() {
    setName("");
    setDepartment("");
    setRoll("");
    setDob("");
    setPhone("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      dispatch(updateUser(id, { name, department, roll, dob, phone }));
    } else {
      dispatch(createUser({ name, department, roll, dob, phone }));
    }
    navigate('/table');
    reset();
  }

  return (
    <>
      <div className="container mt-5">
        <div className='d-flex justify-content-center'>
          <form className="form w-50 border p-5 rounded" onSubmit={handleSubmit}>
            <h3>Register Form</h3>
            <div>
              <label className='formlabel'>Name</label>
              <input className='form-control' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className='formlabel mt-2'>Department</label>
              <input className='form-control' type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
            </div>
            <div>
              <label className='formlabel mt-2'>Roll No</label>
              <input className='form-control' type="number" value={roll} onChange={(e) => setRoll(e.target.value)} />
            </div>
            <div>
              <label className='formlabel mt-2'>DOB</label>
              <input className='form-control' type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <div>
              <label className='formlabel mt-2'>Phone Number</label>
              <input className='form-control' type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className='d-flex justify-content-end'>
              <button className="btn btn-danger mt-3" type="button" onClick={reset}>Reset</button>
              <button className="btn btn-primary ms-3 mt-3" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
