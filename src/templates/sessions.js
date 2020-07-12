import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Remarkable } from 'remarkable';

function ActivityList(props) {
  if (props.activityList.length <= 0) {
    return null;
  }
  return (
    <nav className='level is-mobile'>
      <div className='level-left'>
        {props.activityList.map((activity, index) => {
          return (<a key={`${props.postId}-${props.speakerIndex}-${index}`} className='level-item' href={activity.url}>Twitter</a>);
        })}
      </div>
    </nav>
  );
}

class SessionRoute extends Component {
  rawMarkUp(value) {
    const markDown = new Remarkable();
    const rawMarkup = markDown.render(value);
    return { __html: rawMarkup };
  }
  render () {
    const post = this.props.data.allInternalSubmissions.edges[0].node;
    const title = this.props.data.site.siteMetadata.title;

    return (
      <Layout>
        <Helmet title={`${post.title} | ${title}`} />
        <section className='section'>
          <div className='container content'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: '6rem' }}
              >
                <h3 className='title is-size-3 is-bold-light'>{post.title}</h3>
                <h4 className='is-size-4'>レベル / Level</h4>
                <p>{post.level}</p>
                <h4 className='is-size-4'>ターゲット / Target</h4>
                <p>{post.target}</p>
                <h4 className='is-size-4'>カテゴリ / Category</h4>
                <p>{post.category}</p>
                <h4 className='is-size-4'>概要 / Description</h4>
                <p dangerouslySetInnerHTML={this.rawMarkUp(post.description)} />
                <h4 className='is-size-4'>スピーカー / Speaker</h4>
                {post.speakers.map((speaker, speakerIndex) => {
                  return (
                    <article key={speakerIndex} className='media'>
                      <figure className='media-left'>
                        <p className='image is-64x64'><img src={speaker.profileUrl} alt={speaker.name} /></p>
                      </figure>
                      <div className='media-content'>
                        <div className='content'>
                          <strong>{speaker.name}</strong> <small>{speaker.companyOrCommunity}</small>
                          <br />
                          <p dangerouslySetInnerHTML={this.rawMarkUp(speaker.bio)} />
                        </div>
                        <ActivityList activityList={speaker.activityList} postId={post.id} speakerIndex={speakerIndex} />
                      </div>
                    </article>
                  );
                })}
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
