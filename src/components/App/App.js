/* eslint-disable arrow-body-style */
/* eslint-disable block-spacing */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../logo.svg';
import './App.css';
import SocialCard from '../SocialCard/SocialCard';
import datas from '../../data/data.json';

const styles = {
  main: {
    padding: '30px 10px 5px',
    maxWidth: '1200px',
    margin: 'auto',
  },
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
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
