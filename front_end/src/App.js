import React from 'react';
import { Layout } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

import Glider from './components/Glider';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <h1>Glider abajo</h1>
        <Glider />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
