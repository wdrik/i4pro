import React, { Fragment } from 'react';

import GlobalStyles from './styles/global';

import 'font-awesome/css/font-awesome.css';

import Header from './components/Header';

import Home from './pages/Home';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Header />
    <Home />
  </Fragment>
);

export default App;
