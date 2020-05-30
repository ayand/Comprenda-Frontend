import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email, password });
    }

    return (
      <div>
          <h3>Log In</h3>
          <form onSubmit={onLoginSubmit}>
              <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={ e => setEmail(e.target.value) }/>
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={ e => setPassword(e.target.value) }/>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
          </form>
      </div>
    )
}

export default LoginForm;
