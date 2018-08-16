import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import Drawer from './src/navigation/Drawer';


const FontInconsolata = require('./fonts/Inconsolata.otf');

export default class App extends Component {

  state = {
    isReady: false,
  };

  async componentDidMount() {
    const fonts = Font.loadAsync({
      FontInconsolata,
    });
    await Promise.all([fonts]);
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    return (
      <Drawer />
    );
  }
}
