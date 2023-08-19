import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register template d-flex justify-content-center align-items-center 100-w vh-100 bg-success'>
        <div className='50-w p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>Sign Up</h3>
            <div className='mb-1'>
                <label htmlFor='fName'>Name</label>
                <input type='fName' placeholder='Enter full name' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter email' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter password' className='form-control'/>
            </div>
            <div className='d-grid'>
                <button className='btn btn-success'>Sign Up</button>
            </div>
            <p className='text-center mt-3'>
                Already Registered < Link to="/" className='ms-2'>Sign In</Link>               
            </p>
        </form>
        </div>
    </div>
  )
}

export default Register