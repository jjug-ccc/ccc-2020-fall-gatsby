import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'

const HomePagePreview = ({ entry, getAsset }) => {
  const entryContents = entry.getIn(['data', 'sponsors', 'golds', 'silvers'])
  const contents = entryContents ? entryContents.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      sponsors={{ contents }}
      testimonials={testimonials}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
