import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-success'>
        <div className='50-w p-5 rounded bg-white'>
        <form>
        <h1 className="display-4 mt-5 text-danger">Hello, Bootstrap!</h1>
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter password' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
                <label htmlFor='check' className='custom-input-label ms-2'>
                    Remember me
                </label>
            </div>
            <div className='d-grid'>
                <button className='btn btn-success'>Sign In</button>
            </div>
            <p className='text-center mt-3'>
                Create new account < Link to="/Register" className='ms-2'>Sign Up</Link>               
            </p>
        </form>
        </div>
    </div>
  )
}

export default Login