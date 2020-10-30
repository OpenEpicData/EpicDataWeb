import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Link } from '@material-ui/core';
const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 200,
    minHeight: 360,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
}));

interface IProp {
  title: string;
  subtitle: string;
  appid: number;
  link: string;
}

export const GameCard = React.memo(function GalaxyCard(props: IProp) {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: 'Spartan', weights: [300] },
            { font: 'Montserrat', weights: [200, 400, 700] },
          ]}
        />
      </NoSsr>
      <Link href={props.link} target="_black">
        <Card className={styles.card}>
          <CardMedia
            classes={mediaStyles}
            image={`https://steamcdn-a.akamaihd.net/steam/apps/${props.appid}/header.jpg`}
          />
          <Box py={3} px={2} className={styles.content}>
            <Info useStyles={useGalaxyInfoStyles}>
              <InfoSubtitle>{props.subtitle}</InfoSubtitle>
              <InfoTitle>{props.title}</InfoTitle>
              <InfoCaption>不玩吃亏榜</InfoCaption>
            </Info>
          </Box>
        </Card>
      </Link>
    </>
  );
});
export default GameCard;
