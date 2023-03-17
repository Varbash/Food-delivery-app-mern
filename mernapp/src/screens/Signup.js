import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'



export default function Signup() {
    const [credentials,setcredentials]=useState({name:"",email:"",password:""})

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:8000/api/createuser", {
        // credentials: 'include',
        // Origin:"http://localhost:3000/login",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
  
      });
      const json = await response.json()
      console.log(json);
      if (json.success) {
        //save the auth toke to local storage and redirect
        localStorage.setItem('token', json.authToken)
        //navigate("/login")
  
      }
      else {
        alert("Enter Valid Credentials")
      }
    }
  
    const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
    
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">already a user</Link>
</form>
</div>
    
    </>
  )
}
