import React, { Component } from 'react';

class MainPage extends Component {
    state = {
        count: 0
    }
    handleButtonClickUp = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    }
    handleButtonClickDown = () => {
        this.setState(({ count }) => ({ count: count - 1 }));
    }
    render() {
        const { count } = this.state;

        return (
            <div className="MainPage-wrapper">
                <button onClick={this.handleButtonClickUp}>+1</button>
                <h1>{count}</h1>
                <button onClick={this.handleButtonClickDown}>-1</button>
            </div>
        );
    }
}


export default MainPage;