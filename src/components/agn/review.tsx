import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ModeComment from '@material-ui/icons/ModeComment';
import Favorite from '@material-ui/icons/Favorite';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';
import { Progress } from 'antd';
import { Row, Col } from 'antd';

const useStyles = makeStyles(({ spacing, palette }) => ({
  card: {
    display: 'flex',
    padding: spacing(2),
    borderRadius: 16,
  },
  Cprogress: {
    display: 'flex',
    alignSelf: 'center',
  },
  media: {
    minWidth: '25%',
    maxWidth: '25%',
    flexShrink: 0,
    backgroundColor: palette.grey[200],
    borderRadius: 12,
    boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
  },
  rating: {
    verticalAlign: 'text-top',
  },
  content: {
    padding: spacing(0, 2, 0, 0),
    width: '100%',
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginBottom: 0,
    marginRight: spacing(1.5),
    display: 'inline-block',
  },
  body: {
    fontSize: 14,
    color: palette.grey[500],
  },
  divider: {
    margin: spacing(1, 0),
  },
  textFooter: {
    fontSize: 14,
  },
  icon: {
    fontSize: '1.2rem',
    verticalAlign: 'bottom',
  },
}));

interface IProp {
  title: string;
  rate: number;
  plot: number;
  levelDesign: number;
  imageQuality: number;
  music: number;
}

export const ReviewCard = React.memo(function (props: IProp) {
  const styles = useStyles();
  const gutterStyles = usePushingGutterStyles({ space: 1.5 });
  const labelStyles = useLabelIconStyles({ linked: true });
  const flexStyles = useRowFlexStyles();
  return (
    <Card className={styles.card} elevation={0}>
      <CardContent className={styles.content}>
        <Box mb={1}>
          <h3 className={styles.heading}>{props.title} </h3>
          <Rating
            name={'rating'}
            value={props.rate}
            className={styles.rating}
            size={'small'}
            disabled
          />
        </Box>
        <Divider className={styles.divider} light />
        <Row>
          <Col xs={24}>
            <Row align="middle">
              <Col span={21}>
                <Progress percent={props.plot * 10} showInfo={false} />
              </Col>
              <Col>剧情</Col>
            </Row>
            <Row align="middle">
              <Col span={21}>
                <Progress percent={props.levelDesign * 10} showInfo={false} />
              </Col>
              <Col>关卡设计</Col>
            </Row>
            <Row align="middle">
              <Col span={21}>
                <Progress percent={props.imageQuality * 10} showInfo={false} />
              </Col>
              <Col>画质</Col>
            </Row>
            <Row align="middle">
              <Col span={21}>
                <Progress percent={props.music * 10} showInfo={false} />
              </Col>
              <Col>配乐</Col>
            </Row>
          </Col>
        </Row>
      </CardContent>
    </Card>
  );
});
