import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const joinedName = ( speakers ) => speakers.map((speaker) => (speaker.name)).join('／');

const SessionsPage = ({
  data: { allInternalSubmissions },
}) => (
  <Layout>
    <Helmet title={`Sessions | JJUG CCC 2020 Spring`} />
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>Sessions</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <div className='table-container'>
          <table className='table is-bordered'>
            <thead>
            <tr>
              <th>タイトル</th>
              <th>スピーカー</th>
            </tr>
            </thead>
            {allInternalSubmissions.nodes.map(( data ) => (
              <tr key={data.id}>
                <td><Link to={`/sessions/${data.id}/`}>{data.title}</Link></td>
                <td>{ joinedName(data.speakers) }</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default SessionsPage

export const sessionsPageQuery = graphql`
  query allInternalSessionsQuery {
    allInternalSubmissions(filter: {id: {ne: "dummy"}}) {
      nodes {
        id
        level
        title
        speakers {
          name
        }
      }
    }
 }
`;
