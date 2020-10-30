import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { PaperClipOutlined, StarOutlined } from '@ant-design/icons';
import styles from './index.less';
import { Link } from 'umi';

const { Content, Footer, Sider } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    text: '游戏新闻',
    href: '/',
    icon: <PaperClipOutlined />,
  },
  {
    text: 'AGN',
    href: '/agn',
    icon: <StarOutlined />,
  },
];

export default (props: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div>
          <Title level={3} className={styles.logo} style={{ color: '#fff' }}>
            EpicData
          </Title>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
          {[...menuItems].map((element, i) => {
            return (
              <Menu.Item key={i} icon={element.icon}>
                <Link to={element.href}>{element.text}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>

      <Layout className={styles['site-layout']}>
        <Content style={{ margin: '0 16px' }}>{props.children}</Content>
        <Footer style={{ textAlign: 'center' }}>@2020 EpicData</Footer>
      </Layout>
    </Layout>
  );
};
