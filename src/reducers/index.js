import {combineReducers} from 'redux';
import geoReducer from './geoReducer';
import weatherReducer from './weatherReducer';
import dustReducer from './dustReducer';


const rootReducer = combineReducers({
  location: geoReducer,
  weather: weatherReducer,
  dust: dustReducer
});

export default rootReducer;