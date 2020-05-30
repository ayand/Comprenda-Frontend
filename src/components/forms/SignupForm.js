import React, { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify_password, setVerifyPassword] = useState('');

    const onSignupSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email, password, verify_password });
    }

    return (
      <div>
          <h3>Sign Up</h3>
          <form onSubmit={onSignupSubmit}>
              <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={ e => setEmail(e.target.value) }/>
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={ e => setPassword(e.target.value) }/>
              </div>
              <div className="form-group">
                  <label>Verify Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={verify_password} onChange={ e => setVerifyPassword(e.target.value) }/>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
          </form>
      </div>
    )
}

export default SignupForm;
