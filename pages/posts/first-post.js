import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';

// http://localhost:3000/posts/first-post

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
