import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Cafe from "./components/pages/Cafe";
import CatInfo from "./components/pages/CatInfo";
import Contact from "./components/pages/Contact";
import Profile from "./components/pages/Profile"
import Reservation from "./components/pages/Reservation";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import axios from "axios";
import config from "./config";
import MakeBooking from "./components/pages/MakeBooking";
import MyMap from "./components/MyMap"
import BookingList from "./components/pages/BookingList"
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleLogin from 'react-google-login'
import './App.css';
//-------------------------------------------------------------------//


class App extends Component {

  state = {
    loggedInUser: null,
    error: null,
    reservations: []
  }

//-----------Sign up-------------------------------------------------//

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
            this.props.history.push('/booking')
          })
      })
      .catch((err) => {
        console.log(err)
          this.setState({
            error: err.response.data
          })
      })
  }

//-----------Login-------------------------------------------------//

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

//-----------Logout-------------------------------------------------//

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

//-----------Reservation form-------------------------------------------------//

componentDidMount(){
  
  // let reservationId = this.props.match.params.reservationId
  axios.get(`${config.API_URL}/api/reservations`)
      .then((response) => {
        console.log(response, "just chekcing")
          this.setState({ reservations: response.data})
      })
      .catch(() => {
          console.log('Detail fetch failed')
      })
      //everytime we refresh the page the user will stay logged in
      if(!this.state.loggedInUser) {
        axios.get(`${config.API_URL}/api/user`, {withCredentials: true})
          .then((response) => {
            this.setState({
              loggedInUser: response.data
            })
          })
          .catch(() => {

          })
      }
}

//-------------------------------------------------------------------//
  handleSubmit = (event) => {
    event.preventDefault()
    let locationName = event.target.locationName.value
    let date = event.target.date.value
    let time = event.target.time.value
    let reservationName = event.target.reservationName.value
    let description = event.target.description.value

    axios.post(`${config.API_URL}/api/booking`, {
      locationName: locationName,
      date: date,
      time: time,
      reservationName: reservationName,
      description: description,
    })
      .then((response) => {
        console.log(response)

        this.setState({
      reservations: [response.data, ...this.state.reservations]
          }, () => {
            this.props.history.push(`/bookinglist/${response.data._id}`)
          })
      })
      .catch((err) => {
        console.log('created failed', err)
      })


  }
//-------------------------------------------------------------------//
  handleDelete = (reservationId) => {
  
    axios.delete(`${config.API_URL}/api/bookinglist/${reservationId}`)
      .then(() => {
        let filteredReservations = this.state.reservations.filter((reservation) => {
          return reservation._id !== reservationId
           })
            this.setState({
              reservations: filteredReservations
            }, () => {
              this.props.history.push('/profile')
            })
      })
      .catch((err) => {
        console.log('delete failed'. err)
      })
  }
//-------------------------------------------------------------------//

  render () {
    const{loggedInUser, error, reservations} = this.state

    return (
      <div className="App">

      <Header onLogout={this.handleLogout} user={loggedInUser}/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cafe" component={Cafe} />
          <Route path="/catinfo" component={CatInfo} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/bookinglist/:id" render={(routeProps) => {
            return <BookingList user={loggedInUser} onDelete={this.handleDelete} {...routeProps}/>
          }} />

          <Route path="/signup" render={(routeProps)=> {
            return <SignUp  onSignUp={this.handleSignUp}{...routeProps}/>
          }} />
          <Route path="/booking" render={(routeProps) => {
            return <MakeBooking onAdd={this.handleSubmit}{...routeProps} />
          }} />
          <Route path="/login" render={(routeProps) => {
            return <LogIn onLogIn={this.handleLogIn} {...routeProps}/>
          }} />
          <MyMap />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

