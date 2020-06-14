import React from 'react';

import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import Porque from './Porque/Porque';
import Home from './Home/Home';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Porque />
  </Layout>
);

export default IndexPage;
