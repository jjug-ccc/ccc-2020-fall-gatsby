import React from 'react'
import PropTypes from 'prop-types'

const Sponsors = ({ gridItems }) => (
  <div className='columns is-multiline is-mobile'>
    {gridItems.map(item => (
      <div key={item.image} className='column is-half-mobile is-one-quarter-desktop' style={{ borderRadius: '5px' }}>
        <div>
          <a href={item.url} target="_blank" rel="noopener noreferrer"><img alt={item.text} src={item.image} /></a>
        </div>
      </div>
    ))}
  </div>
)

Sponsors.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Sponsors
