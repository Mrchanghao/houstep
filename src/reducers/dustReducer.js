import { FETCH_START, FETCH_DUST_SUCCESS } from "../actions/types";


const initialState =  {
  loading : false,
  nitrogen: 0.02,
  ozone: 0.038,
  pm10: 27,
  pm25: 18
};


const dustReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_DUST_SUCCESS:
      return {
        ...state,
        loading: false,
        pm10: action.payload['ListAvgOfSeoulAirQualityService'].row[0].PM10,
        pm25: action.payload['ListAvgOfSeoulAirQualityService'].row[0].PM25,
        nitrogen: action.payload['ListAvgOfSeoulAirQualityService'].row[0].NITROGEN,
        ozone: action.payload['ListAvgOfSeoulAirQualityService'].row[0].OZONE
      }
    default:
      return state;
  }
};

export default dustReducer;