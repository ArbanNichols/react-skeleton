import React, { Component } from 'react';
import { Consumer } from '../../context';
import Data from './Data';

export default class Stage extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { data } = value;
          return (
            <React.Fragment>
              <h1>Enter The Stage!</h1>
              {data.map(item => (
                <Data key={item.id} data={item} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
