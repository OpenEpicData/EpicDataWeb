import React from 'react';
import { Descriptions, Button, Rate, Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styles from './agn.less';

const { Title } = Typography
const games = [
  {
    title: '刺客信条：奥德赛',
    rate: 2.5,
    plot: 3,
    levelDesign: 2,
    imageQuality: 6,
    music: 4
  },
  {
    title: '原神',
    rate: 0,
    plot: 0,
    levelDesign: 0,
    imageQuality: 4,
    music: 0
  }
]

export default () => {
  return (
    <div>
      <Button block size="large" type="primary">
        返回主页
      </Button>

      <Title level={1}>
        唯一权威 AGN 评分 | 审美自测表
      </Title>

      {
        [...games].map((item, k) => {
          return (
            <Descriptions bordered>
              <Descriptions.Item label="游戏名" span={4}>
                <Title level={2}>
                  {item.title}
                </Title>
              </Descriptions.Item>
              <Descriptions.Item label="评分" span={4}>
                <Rate
                  defaultValue={item.rate}
                  character={<SmileOutlined />}
                  allowHalf
                  disabled
                  style={{ fontSize: 24, color: 'blue' }}

                />
                <span style={{ marginLeft: '10px', fontSize: 24 }}>
                  {item.rate * 2}/10
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="剧情">
                {item.plot}
              </Descriptions.Item>
              <Descriptions.Item label="关卡设计">
                {item.levelDesign}
              </Descriptions.Item>
              <Descriptions.Item label="画质">
                {item.imageQuality}
              </Descriptions.Item>
              <Descriptions.Item label="配乐">
                {item.music}
              </Descriptions.Item>
            </Descriptions>
          )
        })
      }
    </div>
  );
}
