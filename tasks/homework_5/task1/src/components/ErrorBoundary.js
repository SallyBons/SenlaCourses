import React, { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        console.log('info', info);
        console.log('error', error);

        this.setState({ error });
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;

        if (children.props.fruits.length === 0) {

            this.setState({ error: true });
        }

        return (

            error
                ? <p>Something went wrong, sorry.</p>
                : children

        )
    }
}

export default ErrorBoundary