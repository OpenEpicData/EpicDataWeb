import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  Typography,
  Timeline,
  message,
  Row,
  Col,
  Button,
} from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import styles from './index.less';
import { blue, grey } from '@material-ui/core/colors';

const { Title } = Typography;

export default () => {
  const [data, setData] = useState([]);
  const [newsHyperLink, setNewsHyperLink] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    message.info('正在请求数据', 1);
    fetch(
      'https://bird.ioliu.cn/v1?url=http://api.epicdata.net:1234/news/?tagTitle=',
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.news.data);
        setNewsHyperLink(json.news.data[0].hyperlink);
      })
      .catch(() => {
        message.error('获取数据失败', 10);
      });
  };

  const switchNews = (hyperlink: React.SetStateAction<never[]>) => {
    message.info('正在拉取新闻', 1);
    setNewsHyperLink(hyperlink);
  };

  return (
    <div
      className={styles['site-layout-background']}
      style={{ padding: 24, minHeight: 360 }}
    >
      <Row gutter={20} style={{ height: '90vh', overflowY: 'auto' }}>
        <Col
          span={12}
          style={{
            position: 'sticky',
            top: '0',
            height: '90vh',
            width: '100%',
          }}
        >
          <iframe
            src={newsHyperLink.toString()}
            frameBorder="0"
            height="100%"
            width="100%"
          ></iframe>
        </Col>

        <Col className="gutter-row" span={12}>
          <Breadcrumb
            style={{
              margin: '16px 0',
              position: 'sticky',
              top: 0,
              backgroundColor: grey[100],
              zIndex: 10,
            }}
          >
            <Breadcrumb.Item>EpicData</Breadcrumb.Item>
            <Breadcrumb.Item>新闻</Breadcrumb.Item>

            <Button
              onClick={() => {
                asyncFetch();
              }}
            >
              刷新
              <RedoOutlined />
            </Button>
          </Breadcrumb>

          <Timeline mode="left">
            {[...data].map((item: any, i) => {
              return (
                <Timeline.Item key={i}>
                  <Title level={3}>
                    <span
                      onClick={() => {
                        switchNews(item.hyperlink);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.title}
                    </span>
                  </Title>
                  <Title level={5}>{item.description}</Title>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Col>
      </Row>
    </div>
  );
};
