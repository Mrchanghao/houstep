import axios from 'axios';
import { FETCH_START, GET_GEOLOCATION, GEOLOCATION_DENIED, FETCH_WEATHER_FAIL, FETCH_WEATHER_SUCCESS, FETCH_DUST_SUCCESS } from "./types";
import {weatherURL, weatherKEY, dustURL} from '../config/index';

export const fetchWeather = () => async dispatch => {
  dispatch({type: FETCH_START});
  try {
    // const {data} = await axios.get(`${weatherURL}?lat=${lat}&lon=${lng}&appid=${weatherKEY}&lang=kr`)
    const {data} = await axios.get(`${weatherURL}?q=Seoul&appid=${weatherKEY}`)
    console.log(data)
    dispatch({type: FETCH_WEATHER_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type: FETCH_WEATHER_FAIL, payload: 'data를 가져 오지 못 했습니다'})    
  }
}

export const fetchDust = () => async dispatch => {
  dispatch({type: FETCH_START});
  try {
    const {data} = await axios.get(`${dustURL}`);
    // console.log(data['ListAvgOfSeoulAirQualityService'].row[0]);
    dispatch({type: FETCH_DUST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: FETCH_WEATHER_FAIL, payload: 'data를 가져 오지 못 했습니다'})
  }
}

export const getGeolocation = () => async dispatch => { 
  const geolocation = navigator.geolocation; 
  geolocation.getCurrentPosition( position => { 
    dispatch({ type: GET_GEOLOCATION, 
      payload: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    } }); 
  }, error => { 
    if (error.code === 1) { 
      dispatch({ type: GEOLOCATION_DENIED, payload: false }); 
    } } ); 
  };