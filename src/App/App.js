import React, {Component} from 'react';
import Weather from '../components/Weather/Weather';
import Dust from '../components/Dust/Dust';
import './App.scss'
import Footer from '../components/Footer/Footer';
import {connect} from 'react-redux';
import {fetchWeather, fetchDust} from '../actions/index';
import { getTemp } from '../utils';
import Loader from '../components/Loader/Loader';
import logo from '../resources/logo.png';

class App extends Component {
  state = {
    date: new Date()
  }

  

  componentDidMount() {
    this.props.fetchWeather();
    this.props.fetchDust();
  }

  render() {
    const {city, temp, weather, icon, loading} = this.props;
    const {pm10, pm25, ozone, nitrogen} = this.props;
    if(loading) {
      return <Loader />
    }
    return (
      <main className='app-section'>
        <Weather city={city} 
        icon={icon} date={this.state.date}
        temp={getTemp(temp)} weather={weather} />
        <Dust pm10={pm10} pm25={pm25} ozone={ozone} nitrogen={nitrogen}  />
        <Footer company={logo} />
      </main>   
    );
  }
}


const mapStateToProps = (state) => {
  return {
    weather: state.weather.weather,
    city: state.weather.city,
    temp: state.weather.temp,
    icon: state.weather.icon,
    loading: state.weather.loading,
    pm10: state.dust.pm10,
    pm25: state.dust.pm25,
    ozone: state.dust.ozone,
    nitrogen: state.dust.nitrogen
  }
}

export default connect(mapStateToProps, {fetchWeather, fetchDust})(App);