/* eslint-disable arrow-body-style */
/* eslint-disable block-spacing */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import logo from '../../logo.svg';
import './App.css';
import SocialCard from '../SocialCard/SocialCard';
// import HeaderBar from '../HeaderBar/HeaderBar';
import datas from '../../data/data.json';

const styles = {
  title: {
    color: green,
    margin: '100px',
  },
};

const titleStyle = {
  color: green,
};

// TODO : create 2 other column (left & right) search for example online
// TODO : create real header
// TODO : rename project Social-List
// TODO : change color title

const App = classes => {
  return (
    <div className="App">
      {/* <HeaderBar /> */}
      <header className="App-header">
        <p style={classes.title}>Social-Media</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <div className="row">
          <div className=" col" />
          <div className=" col-6">
            {datas.map(data => {
              return <SocialCard key={data.index} data={data} />;
            })}
          </div>
          <div className=" col" />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
