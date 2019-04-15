import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     //state initialization
    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     };
    // }

    //alternative state initialization -- without the need of the constructor
    state = {
        lat: null,
        errorMessage: ''
    };

    //called ones
    componentDidMount() {
        //console.log('my component did render on the screen/');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    // componentDidUpdate() {
    //     console.log('my component re-rendered.');
    // }

    // //used for clean-up
    // componentWillUnmount() {

    // }

    renderContent() {
        if (!this.state.errorMessage && this.state.lat) {
            //return <div>Latitude: {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat} />
        }

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        return <Spinner message="Please Accept the Location Request."/>;
    }

    render () {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);