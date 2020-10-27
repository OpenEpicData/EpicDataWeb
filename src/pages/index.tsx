import React from 'react';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import {
  PaperClipOutlined,
  GiftOutlined
} from '@ant-design/icons';
import styles from './index.less';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    text: '游戏新闻',
    icon: <PaperClipOutlined />
  },
  {
    text: '免费游戏',
    icon: <GiftOutlined />
  }
]

export default () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className={styles['site-layout']}>
        <Header className={styles['site-layout-background']} style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles['site-layout-background']} style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

      <Sider collapsible>
        <div>
          <Title level={3} className={styles.logo} style={{ color: '#fff' }}>
            EpicData
          </Title>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
          {[...menuItems].map((element, i) => {
            return (
              <Menu.Item key={i} icon={element.icon}>
                {element.text}
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
    </Layout>
  );
}