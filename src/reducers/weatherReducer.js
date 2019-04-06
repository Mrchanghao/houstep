import { FETCH_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAIL } from "../actions/types";
import { getIcon } from "../utils";


const initialState =  {
  loading : false,
  city: 'Seoul',
  temp: '11.25',
  weather: '안개',
  error: null,
  icon: null
};


const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload['weather'][0].main,
        city: action.payload.name,
        temp: action.payload['main'].temp,
        icon: getIcon(action.payload['weather'][0].main)
      }
    case FETCH_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default weatherReducer;