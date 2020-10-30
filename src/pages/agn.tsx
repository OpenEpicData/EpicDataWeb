import React from 'react';
import {
  Descriptions,
  Button,
  Rate,
  Typography,
  Alert,
  List,
  Row,
  Col,
} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styles from './agn.less';
import { Link } from 'umi';
import { GameCard } from '@/components/agn/game';
import { ReviewCard } from '@/components/agn/review';
const { Title } = Typography;

const data = [
  {
    title: '边缘世界',
    subtitle: 'RimWorld',
    appid: 294100,
    link: 'https://store.steampowered.com/app/294100/RimWorld/',
  },
  {
    title: '荒野大镖客 2：救赎',
    subtitle: 'Red Dead Redemption 2',
    appid: 1174180,
    link: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
  },
  {
    title: '巫师 3：狂猎',
    subtitle: 'The Witcher 3: Wild Hunt',
    appid: 292030,
    link: 'https://store.steampowered.com/app/292030/_3//',
  },
  {
    title: '侠盗猎车手：圣安地列斯',
    subtitle: 'Grand Theft Auto: San Andreas',
    appid: 12120,
    link:
      'https://store.steampowered.com/app/12120/Grand_Theft_Auto_San_Andreas/',
  },
  {
    title: '神界：原罪 2',
    subtitle: 'Divinity: Original Sin 2',
    appid: 435150,
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
      <div style={{ margin: '16px' }}>
        <Title level={1}>唯一权威 AGN 评分 | 审美自测表</Title>

        <div>
          <Row gutter={[16, 16]}>
            {[...data].map((item, i) => {
              return (
                <Col
                  className="gutter-row"
                  xs={24}
                  md={12}
                  lg={8}
                  xl={6}
                  xxl={4}
                  key={i}
                >
                  <GameCard {...item} key={i} />
                </Col>
              );
            })}

            <Col span={24}>
              <Row gutter={[16, 16]}>
                {[...games].map((item, k) => {
                  return (
                    <Col xs={24} lg={12} xxl={8} key={k}>
                      <ReviewCard {...item} key={k} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
