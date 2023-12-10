import React from 'react'

function register() {
  return (
    <div className="form-container">
        <h1 className="form-heading">Register Form</h1>
        <form method="POST" action="/register" className="register-form">
            <label className="form-label">Name</label>
            <input type="text" className="form-input"/>
            <label className="form-label">email</label>
            <input type="text" className="form-input"/>
            <label className="form-label">password</label>
            <input type="password" className="form-input"/>
            <label className="form-label">confirm password</label>
            <input type="password" className="form-input"/>
            <input type="submit" className="submit-btn"/>
        </form>
    </div>
  )
}

export default register