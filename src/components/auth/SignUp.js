import React, { Component } from 'react'
import Footer from '../Footer'
import GoogleLogin from 'react-google-login'


class SignUp extends Component {

  responseGoogle=(response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (
      <div>
        <div className="main-body sign-body">
          <form onSubmit={this.props.onSignUp}>
            <div className="form-group">
              <label>Username</label>
              <input name="username" type="text"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password"/>
            </div>
            <button type="submit">Sign Up</button>
            
            <GoogleLogin 
              clientId="485417191125-mla07ur1253tkh1lhepvdqb17hrlofs2.apps.googleusercontent.com"
              buttonText="Signup with Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              isSignedIn={true}
              cookiePolicy={'single_host_origin'}
            />
          </form>
        </div>
      </div>
    )
  }
}
export default SignUp

