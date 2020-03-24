import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {ChooseDirection} from './Direction';
import {ChooseRoute} from './Route';
import {ShowStops} from './Stops';
import './Mobile.css';
import './Tablet.css';
import './Desktop.css';
import './Luxury.css';
import './App.css';

class Master extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routeData: [],
            route: '',
            routeChanged: false,
            routeLoaded: false,
            routeLoading: false,
            directionData: [],
            direction: '',
            directionLoaded: false,
            directionLoading: false,
            stopData: [],
            stopLoaded: false,
            stopLoading: false,
            error: null
        }
        this.getStops = this
            .getStops
            .bind(this);
        this.directionHandler = this
            .directionHandler
            .bind(this);
        this.routeHandler = this
            .routeHandler
            .bind(this);
    }

    componentDidMount = () => {
        this.setState({routeLoading: true})

        fetch('https://svc.metrotransit.org/NexTrip/Routes?format=json')
            .then(res => res.json())
            .then((result) => {
                this.setState({routeLoading: false, routeLoaded: true, routeData: result})
            }, (error) => {
                this.setState({routeLoaded: false, routeLoading: false, error});
            })
    }

    getStops = () => {
        this.setState({stopLoading: true})

        fetch('https://svc.metrotransit.org/NexTrip/Stops/' + this.state.route + '/' + this.state.direction + '?format=json')
            .then(res => res.json())
            .then((result) => {
                this.setState({stopData: result, stopLoaded: true})
            }, (error) => {
                this.setState({stopLoaded: false, stopLoading: false, error});
            })
    }

    directionHandler = (event) => {
        this.setState({
            direction: event.target.value
        }, this.getStops);
    }

    routeHandler = (event) => {
        // Update state values
        this.setState({route: event.target.value, routeChanged: true, directionLoading: true, directionLoaded: false})

        fetch('https://svc.metrotransit.org/NexTrip/Directions/' + event.target.value + '?format=json')
            .then(res => res.json())
            .then((result) => {
                this.setState({directionLoaded: true, directionLoading: false, directionData: result, direction: result[0].Value})
                if (!window.location.href.toString().includes('#Directions')) {
                    window
                        .history
                        .pushState(window.location.href, '', window.location.href + '#Directions');
                }
                this.getStops();
            }, (error) => {
                this.setState({directionLoaded: false, directionLoading: false, error});
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className='route-container'>
                    <ChooseRoute
                        routeLoaded={this.state.routeLoaded}
                        routeData={this.state.routeData}
                        routeHandler={this.routeHandler}
                        routeChanged={this.state.routeChanged}/>

                    <div className="directions-container" data-testid="Direction-Container">
                        <ChooseDirection
                            directionLoaded={this.state.directionLoaded}
                            directionData0={this.state.directionData[0]}
                            directionData1={this.state.directionData[1]}
                            directionHandler={this.directionHandler}
                            testDirection={false}/>
                    </div>
                </div>
                <div className="stops-container" data-testid="Stops-Container">
                    <h2>Stops</h2>
                    <ShowStops stopLoaded={this.state.stopLoaded} stopData={this.state.stopData}/>
                    <Route
                        path="/stops"
                        render={() => <ShowStops stopLoaded={this.state.stopLoaded} stopData={this.state.stopData}/>}/>
                </div>
            </React.Fragment>
        )
    }
}

function initializeNexTrip () {
    if (!window.location.href.toString().includes('NexTrip')) {
        window
            .history
            .pushState(window.location.href, '', window.location.href + 'NexTrip');
    }
}

function App() {
    initializeNexTrip();
    return (
        <BrowserRouter>
        <div className='content'>
            <div className='note'>
                <h4>This application is sourced by real-time data from </h4>
                <img alt='Metro Transit Logo' src='https://www.metrotransit.org/img/MetroTransitLogo.svg'></img>
            </div>
            <h1>NexTrip</h1>
                <div className='application'>
                    <Route exact path='/NexTrip' component={Master} />
                </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
