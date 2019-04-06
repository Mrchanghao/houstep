import sun from '../resources/icon-sun.png';
import rain from '../resources/icon-rain.png';
import mist from '../resources/icon-mist.png';
import cloud from '../resources/icon-cloud.png';
import snow from '../resources/icon-snow.png';

export const getMoment = (date) => {
  let  week = date.getDay(); // 날짜의 요일
  let day = date.getDate(); // 날짜 1 ~31;
  let month = date.getMonth() + 1; // 달 
  switch(week) {
    case 0:
      week = '일요일';
      break;
    case 1:
      week = '월요일';
      break;
    case 2:
      week = '화요일';
      break;
    case 3:
      week = '수요일';
      break;
    case 4:
      week = '목요일';
      break;
    case 5:
      week = '금요일';
      break;
    default:
      week = '토요일'
  }
  return {
    week,
    day,
    month
  }
};

export const getTemp = (temp) => {
  if(temp < 0) {}
  let result =  temp - (273.15) ;
  return (result).toFixed(2) + '°C'
}

export const getIcon = (weather) => {
  let icon;
  switch(weather) {
    case 'Clear':
      icon = sun;
      break;
    case 'Haze':
      icon = mist;
      break;
    case 'Snow':
      icon = snow;
      break;
    case 'Rain':
      icon = rain;
      break;
    case 'Drizzle':
      icon = rain;
      break;
    case "Clouds":
      icon = cloud;
      break;
    
    default:
      icon = null;
  }
  return icon;
}