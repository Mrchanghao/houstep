import React from 'react'
import './Dust.scss';
import PropTypes from 'prop-types';
import icon from '../../resources/icon-good.png'

const Dust = ({pm10, pm25, ozone, nitrogen}) => {

  const renderWithProps = (props) => {
    return (
        <div className={`dust-section__two`}>
            <div className={`dust-section__two__div`}>
            <img src={icon} alt='quantity icon' />
            <h3>{props}</h3>
            </div>
        </div>
    )
  }

    return (
      <>
        <section className='dust-section'>
        <div className='dust-section__pm10'>
          <div className='dust-section__pm10__one'>
            <p>미세먼지</p>
          </div>
          {renderWithProps(pm10)}
        </div>

        <div className='dust-section__pm25'>
          <div className='dust-section__pm25__one'>
            <p>초미세먼지</p>
          </div>
          {renderWithProps(pm25)}
        </div>

        <div className='dust-section__ozone'>
          <div className='dust-section__ozone__one'>
            <p>오존</p>
          </div>
          {renderWithProps(ozone)}
        </div>

        <div className='dust-section__nitrogen'>
          <div className='dust-section__nitrogen__one'>
            <p>이산화질소</p>
          </div>
          {renderWithProps(nitrogen)}
        </div>
      </section>
      </>
    )
  }

Dust.propTypes = {
  pm10: PropTypes.number,
  pm25: PropTypes.number,
  ozone: PropTypes.number,
  nitrogen: PropTypes.number
}


export default Dust;
