import React from 'react';
import {Text} from 'react-native';
import Router from './src/route/Router';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

class App extends React.Component {
  render() {
    return <Router />;
  }
}

export default App;
