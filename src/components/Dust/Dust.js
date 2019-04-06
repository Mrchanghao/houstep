import React from 'react'
import './Dust.scss';
import PropTypes from 'prop-types';
import icon from '../../resources/icon-good.png'

const Dust = ({pm10, pm25, ozone, nitrogen}) => {

  const renderWithProps = (props) => {
    return (
        <div className='dust-section__item__two'>
            <div className='dust-section__item__two__div'>
            <div className='dust-section__item__two__div__wrapper'>
              <img src={icon} alt='quantity icon' />
            </div>
            <h3>{props}</h3>
            </div>
        </div>
    )
  }

    return (
      <>
        <section className='dust-section'>
        <div className='dust-section__item'>
          <div className='dust-section__item__one'>
            <label>미세먼지</label>
          </div>
          {renderWithProps(pm10)}
        </div>

        <div className='dust-section__item'>
          <div className='dust-section__item__one'>
            <label>초미세먼지</label>
          </div>
          {renderWithProps(pm25)}
        </div>

        <div className='dust-section__item'>
          <div className='dust-section__item__one'>
            <label>오존</label>
          </div>
          {renderWithProps(ozone)}
        </div>

        <div className='dust-section__item'>
          <div className='dust-section__item__one'>
            <label>이산화질소</label>
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
