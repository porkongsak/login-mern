import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



const  Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')

  async function registerUser (event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
          name,
          email,
          password,
      }),
    })
    //stringif what


    const data = await response.json()
    console.log(data)
  }

  return  (
    <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
          <input type="text"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
          <input type="submit" value="Register" /><br/>
          <Link to="/login"><button>Page Login</button></Link>
        </form>
    </div>
  );
}

export default Register;
 