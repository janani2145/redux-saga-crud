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

  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    dob: "",
    nation: "",
    gender: "",
    department: "",
    studentId: "",
    email: "",
    phone: "",
    address: "",
    zip: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      dispatch(fetchIdUser(id));
    } else {
      reset();
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (user && id) {
      setFormValues({
        fname: user.fname,
        lname: user.lname,
        dob: user.dob,
        nation: user.nation,
        gender: user.gender,
        department: user.department,
        studentId: user.studentId,
        email: user.email,
        phone: user.phone,
        address: user.address,
        zip: user.zip
      });
    }
  }, [user, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const reset = () => {
    setFormValues({
      fname: "",
      lname: "",
      dob: "",
      nation: "",
      gender: "",
      department: "",
      studentId: "",
      email: "",
      phone: "",
      address: "",
      zip: ""
    });
    setErrors({});
  };

  const validate = () => {
    const { fname, lname, dob, nation, gender, department, studentId, email, phone, address, zip } = formValues;
    const errors = {};

    const nameRegex = /^[A-Za-z]{3,}$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const nationRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const studentIdRegex = /^[A-Za-z0-9]+$/;
    const addressRegex = /^[A-Za-z0-9\s,'-]*$/;
    const zipRegex = /^\d{6}(?:[-\s]\d{4})?$/;

    if (!fname) errors.fname = "First name is required";
    else if (!nameRegex.test(fname)) errors.fname = "First name is invalid";

    if (!lname) errors.lname = "Last name is required";
    else if (!nameRegex.test(lname)) errors.lname = "Last name is invalid";

    if (!dob) errors.dob = "Date of birth is required";
    else if (!dateRegex.test(dob)) errors.dob = "Date of birth is invalid";

    if (!nation) errors.nation = "Nationality is required";
    else if (!nationRegex.test(nation)) errors.nation = "Nationality is invalid";

    if (!gender) errors.gender = "Gender is required";

    if (!department) errors.department = "Department is required";

    if (!studentId) errors.studentId = "Student ID is required";
    else if (!studentIdRegex.test(studentId)) errors.studentId = "Student ID is invalid";

    if (!email) errors.email = "Email is required";
    else if (!emailRegex.test(email)) errors.email = "Email is invalid";

    if (!phone) errors.phone = "Phone number is required";
    else if (!phoneRegex.test(phone)) errors.phone = "Phone number is invalid (10 digits required)";

    if (!address) errors.address = "Address is required";
    else if (!addressRegex.test(address)) errors.address = "Address is invalid";

    if (!zip) errors.zip = "Zip code is required";
    else if (!zipRegex.test(zip)) errors.zip = "Zip code is invalid";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      if (id) {
        dispatch(updateUser(id, formValues));
      } else {
        dispatch(createUser(formValues));
      }
      navigate('/table');
      reset();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className='d-flex justify-content-center align-items-center'>
          <form className="form w-50 p-4 border rounded" onSubmit={handleSubmit}>
            <h2>{id ? "Edit" : "Student Registration"}</h2>
            <h6>Personal Information</h6>
            <div className='row'>
              <div className='col'>
                <input
                  className={`form-control p-1 ${errors.fname ? 'is-invalid' : ''}`}
                  type="text"
                  name="fname"
                  value={formValues.fname}
                  onChange={handleChange}
                  placeholder='First Name'
                />
                {errors.fname && <div className="text-danger">{errors.fname}</div>}
              </div>
              <div className='col'>
  <input
    className={`form-control p-1 ${errors.lname ? 'is-invalid' : ''}`}
    type="text"
    name="lname"
    value={formValues.lname}
    onChange={handleChange}
    placeholder='Last Name'
  />
  {errors.lname && <div className="text-danger">{errors.lname}</div>}
</div>

            </div>
            <div className='row'>
              <div className='col mt-2'>
                <input
                  className={`form-control p-1 ${errors.dob ? 'is-invalid' : ''}`}
                  type="date"
                  name="dob"
                  value={formValues.dob}
                  onChange={handleChange}
                />
                {errors.dob && <div className="text-danger">{errors.dob}</div>}
              </div>
              <div className='col mt-2'>
                <input
                  className={`form-control p-1 ${errors.nation ? 'is-invalid' : ''}`}
                  type="text"
                  name="nation"
                  value={formValues.nation}
                  onChange={handleChange}
                  placeholder='Nationality'
                />
                {errors.nation && <div className="text-danger">{errors.nation}</div>}
              </div>
            </div>
            <label className=' mt-2'>Gender</label>
            <div className='d-flex'>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formValues.gender === 'Male'}
                  onChange={handleChange}
                />
                <label className='ms-2'>Male</label>
              </div>
              <div className='ms-5'>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formValues.gender === 'Female'}
                  onChange={handleChange}
                />
                <label className='ms-2'>Female</label>
              </div>
            </div>
            {errors.gender && <div className="text-danger">{errors.gender}</div>}

            <h6 className='mt-2'>Enrollment Details</h6>
            <div className='row'>
              <div className="col">
                <select
                  className={`form-control p-1 ${errors.department ? 'is-invalid' : ''}`}
                  name="department"
                  value={formValues.department}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Computer">Computer</option>
                  <option value="Physics">Physics</option>
                  <option value="Zoology">Zoology</option>
                </select>
                {errors.department && <div className="text-danger">{errors.department}</div>}
              </div>
              <div className="col">
                <input
                  className={`form-control p-1 ${errors.studentId ? 'is-invalid' : ''}`}
                  type="text"
                  name="studentId"
                  value={formValues.studentId}
                  onChange={handleChange}
                  placeholder='Student Id'
                />
                {errors.studentId && <div className="text-danger">{errors.studentId}</div>}
              </div>
            </div>

            <h6 className='mt-1'>Contact Information</h6>
            <div className='row'>
              <div className="col">
                <input
                  className={`form-control p-1 ${errors.email ? 'is-invalid' : ''}`}
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder='Email Address'
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="col">
                <input
                  className={`form-control p-1 ${errors.phone ? 'is-invalid' : ''}`}
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder='Phone Number'
                />
                {errors.phone && <div className="text-danger">{errors.phone}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col mt-2">
                <input
                  className={`form-control p-1 ${errors.address ? 'is-invalid' : ''}`}
                  type="text"
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  placeholder='Address'
                />
                {errors.address && <div className="text-danger">{errors.address}</div>}
              </div>
              <div className="col mt-2">
                <input
                  className={`form-control p-1 ${errors.zip ? 'is-invalid' : ''}`}
                  type="text"
                  name="zip"
                  value={formValues.zip}
                  onChange={handleChange}
                  placeholder='Zip Code'
                />
                {errors.zip && <div className="text-danger">{errors.zip}</div>}
              </div>
            </div>

            <div className='d-flex justify-content-end'>
              <button type="button" className="btn btn-danger mt-3" onClick={reset}>Reset</button>
              <button type="submit" className="btn btn-primary ms-3 mt-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;

