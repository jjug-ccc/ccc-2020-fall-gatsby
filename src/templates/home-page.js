import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        aboutCcc={frontmatter.aboutCcc}
        sponsors={frontmatter.sponsors}
      />
    </Layout>
  )
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        aboutCcc {
          description
          descriptionEn
          organizer
          date
          participationFee
          register
          schedule
          hashtag
          method
        }
        sponsors {
          golds {
            image
            text
            url
          }
          silvers {
            image
            text
            url
          }
        }
      }
    }
  }
`;
