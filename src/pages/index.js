import React from 'react'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import Porque from './Porque/Porque'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Porque />
  </Layout>
)

export default IndexPage
