import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Cafe from "./components/pages/Cafe";
import CatInfo from "./components/pages/CatInfo";
import Contact from "./components/pages/Contact";
import Reservation from "./components/pages/Reservation";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import axios from "axios";
import config from "./config";
import MakeBooking from "./components/pages/MakeBooking";
import Header from './components/Header'


class App extends Component {

  state = {
    loggedInUser: null,
    error: null
  }
  
// --------Sign UP---------- //
  handleSignUp=(event)=> {
    event.preventDefault()
    let user = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    axios.post(`${config.API_URL}/api/signup`, user)
      .then((response) => {
        console.log(response)
          this.setState({
            loggedInUser: response.data
          }, () => {
            this.props.history.push('/login')
          })
      })
      .catch((err) => {
        console.log(err)
          this.setState({
            error: err.response.data
          })
      })
  }
//---------------------LOG IN------------------------------
  handleLogIn = (event) => {
    event.preventDefault()
    let user = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    axios.post(`${config.API_URL}/api/login`, user, {withCredentials: true})
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
//-------------------LOG OUT----------------------------------

  handleLogout = () => {
    axios.post(`${config.API_URL}/api/logout`, {}, {withCredentials: true})
  .then(() => {
      this.setState({
        loggedInUser: null
      }, () => {
        this.props.history.push('/')
      })
  })
  }
//------------------------------------------------------------



// ----------Reservation form---------- //
  handleBook=(event)=> {
    event.preventDefault()
    let booking = {
      location: event.target.location.value,
      time: event.target.time.value,
      date: event.target.date.value,
      myUserId: event.myUserId.value
    }
    axios.post(`${config.API_URL}/api/booking`, booking)
      .then((response) => {
        console.log(response)
          this.setState({
            loggedInUser: response.data
          }, () => {
            this.props.history.push('/')
          })
      })
      .catch((err) => {
        console.log(err)
          this.setState({
            error: err.response.data
          })
      })
  }

  
  render () {
    const{loggedInUser, error} = this.state

    return (
      <div className="App">
      <Header onLogout={this.handleLogout} user={loggedInUser}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cafe" component={Cafe} />
          <Route path="/catinfo" component={CatInfo} />
          <Route path="/contact" component={Contact} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/signup" render={(routeProps)=> {
            return <SignUp  onSignUp={this.handleSignUp}{...routeProps}/>
          }} />
          <Route path="/booking" render={(routeProps) => {
            return <MakeBooking onBook={this.handleBook}{...routeProps} />
          }} />
          <Route path="/login" render={(routeProps) => {
            return <LogIn onLogIn={this.handleLogIn} {...routeProps}/>
          }} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

