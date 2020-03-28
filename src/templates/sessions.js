import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class SessionRoute extends Component {
  render () {
    const posts = this.props.data.allInternalSubmissions.edges;
    console.log(posts.node);

    return (
      <Layout>
        <section className='section'>
          <div className='container content'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: '6rem' }}
              >
                <h3 className='title is-size-4 is-bold-light'>ぐええ</h3>
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
    allInternalSubmissions(filter: {id: {eq: $sessionId}}) {
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
