import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        data: [], // shared state data
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: [...this.state.data, ...data],
                });
                console.log(this.state.data);
            });
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
