import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class SessionRoute extends Component {
  render () {
    const post = this.props.data.allInternalSubmissions.edges[0].node;
    const title = this.props.data.site.siteMetadata.title;

    return (
      <Layout>
        <section className='section'>
          <Helmet title={`${post.title} | ${title}`} />
          <div className='container content'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: '6rem' }}
              >
                <h3 className='title is-size-4 is-bold-light'>{post.title}</h3>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default SessionRoute

export const sessionPageQuery = graphql`
  query SessionPage($sessionId: String) {
    site {
      siteMetadata {
        title
      }
    }
    allInternalSubmissions(filter: {id: {eq: $sessionId}}, limit: 1) {
      edges {
        node {
          id
          title
          level
          target
          category
          description
          speakers {
            profileUrl
            name
            companyOrCommunity
            activityList {
              url
              activityType
            }
            bio
          }
        }
      }
    }
  }
`;
