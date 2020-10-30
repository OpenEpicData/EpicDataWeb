import React from 'react';
import { Descriptions, Button, Rate, Typography, Alert, List } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styles from './agn.less';
import { Link } from 'umi';

const { Title } = Typography;

const data = [
  {
    title: '边缘世界',
    link: 'https://store.steampowered.com/app/294100/RimWorld/',
  },
  {
    title: '荒野大镖客 2：救赎',
    link: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
  },
  {
    title: '巫师 3：狂猎',
    link: 'https://store.steampowered.com/app/292030/_3//',
  },
  {
    title: '侠盗猎车手：圣安地列斯',
    link:
      'https://store.steampowered.com/app/12120/Grand_Theft_Auto_San_Andreas/',
  },
  {
    title: '极限竞速：地平线 4',
    link: 'https://www.xbox.com/zh-CN/games/forza-horizon-4',
  },
  {
    title: '神界：原罪 2',
    link:
      'https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/',
  },
];

const games = [
  {
    title: '刺客信条：奥德赛',
    rate: 2.5,
    plot: 3,
    levelDesign: 2,
    imageQuality: 6,
    music: 4,
  },
  {
    title: '原神',
    rate: 0,
    plot: 0,
    levelDesign: 0,
    imageQuality: 4,
    music: 0,
  },
];

export default () => {
  return (
    <div style={styles.body}>
      <Button block size="large" type="primary">
        <Link to="/">返回主页</Link>
      </Button>

      <div style={{ margin: '16px' }}>
        <Title level={1}>唯一权威 AGN 评分 | 审美自测表</Title>

        <List
          size={'large'}
          header={<div>不玩吃亏榜</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text>
                <Link to={item.link}>{item.title}</Link>
              </Typography.Text>
            </List.Item>
          )}
        />

        {[...games].map((item, k) => {
          return (
            <Descriptions bordered style={{ marginTop: '16px' }}>
              <Descriptions.Item label="游戏名" span={4}>
                <Title level={2}>{item.title}</Title>
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
              <Descriptions.Item label="剧情">{item.plot}</Descriptions.Item>
              <Descriptions.Item label="关卡设计">
                {item.levelDesign}
              </Descriptions.Item>
              <Descriptions.Item label="画质">
                {item.imageQuality}
              </Descriptions.Item>
              <Descriptions.Item label="配乐">{item.music}</Descriptions.Item>
            </Descriptions>
          );
        })}
      </div>
    </div>
  );
};
