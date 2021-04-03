import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

// http://localhost:3000/posts/first-post

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
