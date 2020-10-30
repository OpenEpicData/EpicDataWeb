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
import { GameCard } from '@/components/agn/game';
const { Title } = Typography;

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

require('dayjs/locale/zh-cn');
dayjs.locale('zh-cn');
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    message.info('正在请求数据', 1);
    fetch(
      'https://bird.ioliu.cn/v1?url=http://api.epicdata.net:1234/games?limit=24',
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      })
      .catch(() => {
        message.error('获取数据失败', 10);
      });
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        {[...data].map((item: any, i) => {
          return (
            <Col xs={12} md={6} lg={4} xl={3}>
              <GameCard
                title={item.name}
                appid={item.appid}
                subtitle={dayjs(item.updated_at).fromNow()}
                link=""
                type="游戏库"
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
