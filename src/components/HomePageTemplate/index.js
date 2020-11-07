import React from 'react'
import Helmet from 'react-helmet'
import Sponsors from '../Sponsors'
import PropTypes from 'prop-types'
import AboutCcc from "../AboutCcc";
import AboutJjug from "../AboutJjug";
import Coc from "../Coc";

const HomePageTemplate = ({
  title,
  aboutCcc,
  sponsors,
  meta_title,
  meta_description,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <h3 className='has-text-weight-semibold is-size-3 is-size-4-mobile'>開催概要 / Description</h3>
                <AboutCcc gridItem={aboutCcc} />
                <h3 className='has-text-weight-semibold is-size-3 is-size-4-mobile'>JJUGについて / About JJUG</h3>
                <AboutJjug/>
                <h3 className='has-text-weight-semibold is-size-3 is-size-4-mobile'>JJUG CCCでの行動規範 / JJUG CCC Code of Conduct</h3>
                <Coc />
                <h3 className='has-text-weight-semibold is-size-3 is-size-4-mobile'>スポンサー / Sponsors</h3>
                <h4 className='is-size-4 is-size-5-mobile'>Gold</h4>
                <Sponsors gridItems={sponsors.golds} />
                <h4 className='is-size-4 is-size-5-mobile'>Silver</h4>
                <Sponsors gridItems={sponsors.silvers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  aboutCcc: PropTypes.shape({
    description: PropTypes.string,
    descriptionEn: PropTypes.string,
    organizer: PropTypes.string,
    date: PropTypes.string,
    participationFee: PropTypes.string,
    register: PropTypes.string,
    schedule: PropTypes.string,
    hashtag: PropTypes.string,
    method: PropTypes.string,
  }),
  sponsors: PropTypes.shape({
    golds: PropTypes.array,
    silvers: PropTypes.array,
  }),
};

export default HomePageTemplate
