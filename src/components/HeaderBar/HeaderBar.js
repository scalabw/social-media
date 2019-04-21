/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Menu } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
  root: {
    width: '100%',
    marginBottom: '3em',
  },
  title: {
    marginLeft: '1em',
  },
  accountButton: {
    textAlign: 'right',
    marginLeft: 'auto',
  },
};

const HeaderBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="Logo">
            <PublicIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Social Media
          </Typography>
          <IconButton color="inherit" className={classes.accountButton}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);
