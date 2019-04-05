import { GET_GEOLOCATION } from "../actions/types";

const initialState = {
  location: {
    lat: 35,
    lng: 126
  }
}

const geoReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_GEOLOCATION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default geoReducer;