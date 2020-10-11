import React from 'react'
import {Row, Col, Divider, Button} from 'antd';
import { Layout, Menu, Header } from 'antd';

export const HomeMenu = () => {
  const { Header } = Layout;
  return(
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Training</Menu.Item>
        <Menu.Item key="3">Hunting</Menu.Item>
      </Menu>
    </Header>
    </Layout>
  )
}