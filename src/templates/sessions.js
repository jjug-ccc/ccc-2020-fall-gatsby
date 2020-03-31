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
          let type;
          switch (activity.activityType) {
            case 'TWITTER':
              type = 'Twitter';
              break;
            case 'FACEBOOk':
              type = 'Facebook';
              break;
            case 'SLIDE_SHARE':
              type = 'Slide Share';
              break;
            case 'GITHUB':
              type = 'GitHub';
              break;
            case 'OTHER':
              type = 'その他';
              break;
            default:
              type = 'その他';
              break;
          }
          return (<a key={`${props.postId}-${props.speakerIndex}-${index}`} className='level-item' href={activity.url} target="_blank" rel="noopener noreferrer">{type}</a>);
        })}
      </div>
    </nav>
  );
}

function LevelTag(props) {
  switch (props.level) {
    case 'BEGINNER':
      return (<span className='tag is-info'>初心者向け</span>);
    case 'INTERMEDIATE':
      return (<span className='tag is-warning'>中級者向け</span>);
    case 'ADVANCED':
      return (<span className='tag is-danger'>上級者向け</span>);
    default:
      return null;
  }
}

class SessionRoute extends Component {
  rawMarkUp(value) {
    const markDown = new Remarkable();
    const rawMarkup = markDown.render(value);
    return { __html: rawMarkup };
  }

  convertCategory(value) {
    switch (value) {
      case 'JAVA_SE':
        return 'Java SE';
      case 'SERVER_SIDE_JAVA':
        return 'Server Side Java';
      case 'JVM':
        return 'JVM';
      case 'EMBEDDED':
        return 'Embedded';
      case 'ALTERNATE_LANGUAGE':
        return 'Alternate Language';
      case 'DEV_OPS':
        return 'Dev Ops';
      case 'CLOUD':
        return 'Cloud';
      case 'MOBILE':
        return 'Mobile';
      case 'OTHERS':
        return 'その他';
      default:
        return '';
    }
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
                <h3 className='title is-size-3 is-bold-light'>{post.title} <LevelTag level={post.level} /></h3>
                <h4 className='is-size-4'>ターゲット / Target</h4>
                <p>{post.target}</p>
                <h4 className='is-size-4'>カテゴリ / Category</h4>
                <p>{this.convertCategory(post.category)}</p>
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
