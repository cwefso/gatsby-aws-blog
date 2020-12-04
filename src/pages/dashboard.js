import React from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import Layout from '../components/Layout'

const Dashboard = props => (
  <Layout {...props} title="Gatsby Starter Blog" isDashboard>
    <h1>Liked Posts</h1>
  </Layout>
)

export default withAuthenticator(Dashboard, true)