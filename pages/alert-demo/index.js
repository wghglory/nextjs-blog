import React from 'react';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function AlertDemo() {
  return (
    <Layout>
      Alert Demo
      <Alert type='success'>test success alert</Alert>
      <Alert type='error'>test error alert</Alert>
    </Layout>
  );
}
