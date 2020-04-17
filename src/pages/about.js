import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';

export default () =>(
        <Layout>
            <h1>About Me</h1>
            <p>This is a sample page</p>
            <Link to="/">&larr; Back To Home</Link>
        </Layout>
    );