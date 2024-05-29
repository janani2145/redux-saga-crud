import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useDispatch,useNavigate} from 'react';
import { createUser } from '../../Redux/Action/Action';



const Form = () => {
  const dispatch= useDispatch();
  const nav=useNavigate();
  const [name,setName]=useState("")
  const [department,setDepartment]=useState("")
  const [roll,setRoll]=useState("")
  const [dob,setDob]=useState("")
  const [phone,setPhone]=useState("")

 function handleSubmit(e){
 e.preventDefault();
 dispatch(createUser({name,department,roll,dob,phone}))
  }
  reset()
  nav()

  return (
    <>
    <div className="container  mt-5">
      <div className='d-flex justify-content-center'>
    <form className="form w-50 border p-5 rounded" onSubmit={handleSubmit}>
      <h3>Registration Form</h3>
      <div>
        <label  className='formlabel'>Name</label>
        <input className='form-control' type="text" value={name} onClick={(e)=>setName(e.target.value)}/>
      </div>
      <div>
        <label  className='formlabel mt-2'>Department</label>
        <input className='form-control' type="text" value={department} onClick={(e)=>setDepartment(e.target.value)} />
      </div>
      <div>
        <label className='formlabel mt-2'>Roll No</label>
        <input className='form-control' type="number" value={roll} onClick={(e)=>setRoll(e.target.value)}/>
      </div>
      <div>
        <label  className='formlabel mt-2'>DOB</label>
        <input className='form-control' type="text" value={dob} onClick={(e)=>setDob(e.target.value)} />
      </div>
      <div>
        <label  className='formlabel mt-2'>Phone Number</label>
        <input className='form-control' type="tel" value={phone} onClick={(e)=>setPhone(e.target.value)} />
      </div>
      <div className='d-flex justify-content-end'>
      <button className="btn btn-danger mt-3">Reset</button>
      <button className="btn btn-primary ms-3 mt-3" type="submit">Submit</button>
      </div>
    </form>
    </div>
    </div>
    </>
  );
};

export default Form;
