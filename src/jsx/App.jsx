import React, { Component } from 'react';
import Stage from './components/common/Stage';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Stage />
      </Provider>
    );
  }
}

export default App;
