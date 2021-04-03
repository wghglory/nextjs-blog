import React from 'react';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function AlertDemo() {
  return (
    <Layout>
      <p className='ml-2 text-cyan-600 hover:text-cyan-700'>Test tailwind</p>
      <Alert type='success'>test success alert</Alert>
      <Alert type='error'>test error alert</Alert>
    </Layout>
  );
}
