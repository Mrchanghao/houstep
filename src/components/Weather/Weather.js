import React from 'react'
import './Weather.scss'
import { getMoment } from '../../utils'; 
import PropTypes from 'prop-types';


const Weather = (props) => {

    const {city, temp, weather, icon} = props;
    const getDate = getMoment(props.date);
    return (
      <section>
        <div className='weather-section'>
        <div className='weather-section__city'>
          <h1>{city}</h1>
        </div>
        <div className='weather-section__icon'>
          <img src={icon} alt='날씨 아이콘' />
        </div>
        <div className='weather-section__temp'>
          <h3>{temp}</h3>
        </div>
        <div className='weather-section__weather'>
          <h3>{weather}</h3>
        </div>
        </div>
        <div className='weather-section__date'>
          <p>오늘 {getDate.month}월 {getDate.day}일 {getDate.week}</p>
        </div>
      </section>
    )
  }

  Weather.propTypes = {
    icon: PropTypes.string,
    city: PropTypes.string,
    temp: PropTypes.string,
    weather: PropTypes.string,
    date: PropTypes.object
  }

export default (Weather);