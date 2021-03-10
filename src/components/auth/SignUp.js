import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import config from '../../config'


class SignUp extends Component {

  state = {
    loggedInUser: null,
  }

  responseGoogle=(response) => {
    console.log(response);
    console.log(response.profileObj);

    axios.post(`${config.API_URL}/api/login`)
      .then((response) => {
        this.setState({
          loggedInUser: response.data
        }, () => {
          this.props.history.push('/booking')
        })
      })
      .catch((err) => {
        console.log('something went wrong', err)
      })
  }

  render() {
    return (
      <div>
        <div className="main-body signup-body" style={{backgroundImage: `url(/images/cafe-bg5.jpg)`,backgroundSize: "cover",backgroundPosition:"center",backgroundRepeat:'no-repeat'}}>
          <div className="signup-inner">
            <h1>Please Sign Up</h1>
            <form onSubmit={this.props.onSignUp}>
              <div className="form-group">
                <label>Username</label>
                <input name="username" type="text"/>
              </div>
              <div className="form-group">
                <label className="signup-email">Email</label>
                <input name="email" type="email"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name="password" type="password"/>
              </div>
              <button className="signup-btn" type="submit">Sign Up</button>

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
      </div>
    )
  }
}
export default SignUp

