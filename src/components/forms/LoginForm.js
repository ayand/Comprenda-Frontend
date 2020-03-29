import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    onSubmit(event) {
        event.preventDefault();
        //console.log(this.state);
        this.props.onSubmit(this.state);
    }

    render() {
        return (
          <div>
              <h3>Log In</h3>
              <form onSubmit={this.onSubmit.bind(this)}>
                  <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={ e => this.setState({ email: e.target.value }) }/>
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={ e => this.setState({ password: e.target.value }) }/>
                  </div>
                  <button type="submit" className="btn btn-success">Submit</button>
              </form>
          </div>
        )
    }
}

export default LoginForm;
