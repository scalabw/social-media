/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
  Avatar,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  card: {
    padding: '30px 10px 5px',
    maxWidth: '1200px',
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const getColor = () => Math.floor(Math.random() * 16777215).toString(16);

const SocialCard = ({ classes, data }) => {
  const { firstname, title, image, content, likes, comments } = data;
  return (
    <div className={classes.card}>
      {/* TODO : make it clickable */}
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label="card-image"
              className={classes.avatar}
              style={{ background: `#${getColor()}` }}
            >
              {firstname[0]}
            </Avatar>
          }
          // TODO : add the name of the person
          title={title}
        />
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography component="p">{content}</Typography>
        </CardContent>
        <CardActions>
          <IconButton arial-label="Like it">
            {/* TODO: add possiblity to like/unlike */}
            {likes.length}
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            {/* TODO: add possiblity to comment */}
            {comments.length}
            <CommentIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

SocialCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialCard);
