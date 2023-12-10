import Link from 'next/link'
import React from 'react'

function login() {
  return (
    <div className='form-container'>
        <h1 className="form-heading">Login Form</h1>
        <form method="POST" className="login-form">
            <label className='form-label'>Username</label>
            <input className="form-input" type="text" placeholder="enter your username"/>
            <label className='form-label'>password</label>
            <input className="form-input" type="password" placeholder="enter your username"/>
            <input type="submit" className="submit-btn"/>

        </form>
        <Link href="/register">Sign up if you haven't registered</Link>
    </div>
  )

}

export default login