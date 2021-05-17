import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
           hasError: false
        }
    }

    componentDidCatch(error, info) {
       this.setState({ hasError: true});
    }

    render() {
        if (this.hasError) {
            <h1>Oops...Unable to load the website</h1>
        } 
        return(
            this.props.children
        )
    }
}

export default ErrorBoundry;