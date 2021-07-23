import React, { Component} from 'react';

class Requests extends Component {
    state = { request: {}};

    componentDidMount () {
        fetch('https://official-joke-api.appspot.com/random_joke')
            //.then(response => console.log('response', response));
            .then(response => response.json())
                //.then(json => console.log('json', json))
                .then(json => this.setState({request: json}));
    }

    render() {
        const {setup, punchline} = this.state.request;

        return (
            <div>
                <p>{setup} <em> {punchline}</em></p>
            </div>
        )
    }
}

export default Requests