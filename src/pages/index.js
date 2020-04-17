import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>CUSTOM DATA SCIENCE SOLUTIONS TO DRIVE IMPACT</h1>
    <p>
      Rho AI’s mission is to harness the power of data science to drive
      meaningful impact. We work with organizations that want to effectively
      obtain, understand, and utilize data. Our custom services implement
      state-of-the-art data science and machine learning techniques that have
      been tested in a broad range of industries spanning energy, healthcare,
      finance, materials science, professional sports, and more.
    </p>
    <Link to="/about">Learn More</Link>
  </Layout>
);
