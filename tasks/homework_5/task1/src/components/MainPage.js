import React, { PureComponent } from 'react';
import Fruits from './Fruits';
import ErrorBoundary from './ErrorBoundary';

class MainPage extends PureComponent {
    state = {
        count: 0,
         fruits: ['Apple', 'Banana', 'Pineapple', 'Watermellon']
        //  fruits: [],
    }

    handleButtonClickUp = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    }
    handleButtonClickDown = () => {
        this.setState(({ count }) => ({ count: count - 1 }));
    }
    render() {
        const { count } = this.state;
        const { fruits } = this.state;
        return (
            <div className="MainPage-wrapper">
                <button onClick={this.handleButtonClickUp}>+1</button>
                <h1>{count}</h1>
                <button onClick={this.handleButtonClickDown}>-1</button>
                <ErrorBoundary>
                    <Fruits fruits={fruits} >
                    </Fruits>
                </ErrorBoundary>
            </div>
        );
    }
}


export default MainPage;