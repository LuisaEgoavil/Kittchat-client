import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Cafe from "./components/pages/Cafe";
import CatInfo from "./components/pages/CatInfo";
import Contact from "./components/pages/Contact";
import Profile from "./components/pages/Profile"
import Reservation from "./components/pages/Reservation";
import EditForm from './components/pages/EditForm'
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import axios from "axios";
import config from "./config";
import MakeBooking from "./components/pages/MakeBooking";
import BookingList from "./components/pages/BookingList"
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './components/Error'
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
    axios.post(`${config.API_URL}/api/signup`, user, {withCredentials: true})
      .then((response) => {
        console.log(response)
          this.setState({
            loggedInUser: response.data
          }, () => {
            this.props.history.push('/profile')
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
          this.props.history.push('/profile')
        })
      })
      .catch((err) => {
        console.log('something went wrong', err)
      })
  }

//-----------Login admin--------------------------------------------//
handleLogInAdmin = (event) => {
  event.preventDefault()
  let admin = {
    email: event.target.email.value,
    password: event.target.password.value
  }
  axios.post(`${config.API_URL}/api/login`, admin, {withCredentials: true})
    .then((response) => {
      this.setState({
        loggedInUser: response.data
      }, () => {
        this.props.history.push('/admin')
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
  let reservationId = this.props.match.params.reservationId
  axios.get(`${config.API_URL}/api/reservations`, {withCredentials: true})
      .then((response) => {
        console.log(response, "just checking")
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
    console.log(event)
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
    }, {withCredentials: true})
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
//----------EDIT---------------------------------------------------------//

handleEditReservation = (event) => {
  event.preventDefault();
  let reservationName = event.target.reservationName.value
  let description = event.target.description.value
  let id = event.target.id.value
  let date = event.target.date.value
  let time = event.target.time.value


  axios.patch(`${config.API_URL}/api/reservation/${id}/edit`, {
    reservationName,
    description,
    id,
    date,
    time
  })

    .then(() => {
      let newReservations = this.state.reservations.map((singleReservation) => {
          if(reservation._id === singleReservation._id) {
            singleReservation.locationName = reservation.locationName
            singleReservation.time = reservation.time
            singleReservation.date = reservation.date
            singleReservation.reservationName = reservation.reservationName
            singleReservation.description = reservation.description
          }
          return singleReservation
      })
      this.setState({
        reservations: newReservations
      }, () => {
        this.props.history.push('/profile')
      })
    })
    .catch((err) => {
      console.log('edit failed', err)
    })
}



//------------DELETE-------------------------------------------------------//
  handleDelete = (reservationId) => {
    axios.delete(`${config.API_URL}/api/bookinglist/${reservationId}`, {}, {withCredentials: true})
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

//-------------------------------------------------------------------

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
          <Route exact path="/profile" render={ (routeProps) => {
            return <Profile user={loggedInUser} onDelete={this.handleDelete}{...routeProps}/>
          }}/>
          <Route path="/reservation" component={Reservation} />
          <Route path="/bookinglist/:id" render={(routeProps) => {
            return <BookingList user={loggedInUser} onDelete={this.handleDelete} {...routeProps}/>
          }} />
          <Route path="/profile/edit/:id" render={(routeProps) => {
            return <EditForm user={loggedInUser} onEdit={this.handleEditReservation} {...routeProps} />
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
          <Route path="/" component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);