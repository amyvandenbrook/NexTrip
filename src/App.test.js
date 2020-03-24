import React from 'react';
import 'jest-enzyme';
import { render } from '@testing-library/react';
import App from './App';
import {ChooseDirection} from './Direction';
import {ChooseRoute} from './Route';
import {ShowStops} from './Stops';
import { shallow } from 'enzyme';


// Test the NexTrip title
test('renders NexTrip title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/NexTrip/i);
  expect(linkElement).toBeInTheDocument();
});

// Test the application note - found under banner image
test('renders application note', () => {
  const wrapper = shallow(<App />);
  const applicationNote= <h4>This application is sourced by real-time data from </h4>;
  expect(wrapper).toContainReact(applicationNote);
});


// Test the unrendered components
test('renders the unrendered route select', () => {
  const { getByText } = render(<ChooseRoute />);
  const linkElement = getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the unrendered stops', () => {
  const { getByText } = render(<ShowStops />);
  const linkElement = getByText(/Please choose a route above to see related stops./i);
  expect(linkElement).toBeInTheDocument();
});

test('does not render the unrendered route', () => {
  const wrapper = shallow(<ChooseRoute />);
  const route= <p>Please select a route from the options below to see the directions and stops available for you!</p>;
  expect(wrapper).not.toContainReact(route);
});

test('does not render the unrendered direction', () => {
  const wrapper = shallow(<ChooseDirection />);
  const direction= <div className="description">Choose a direction: </div>;
  expect(wrapper).not.toContainReact(direction);
});

test('does not render the unrendered stops', () => {
  const wrapper = shallow(<ShowStops />);
  const stops= <ul><li>Apple Valley Transit Station</li><li>147th St Station</li><li>140th St Station</li><li>Cedar Grove Transit Station</li><li>Mall of America Station</li></ul>;
  expect(wrapper).not.toContainReact(stops);
});

test('renders the routes from fake data', () => {
  const routeData= [{"Description": "METRO Blue Line","ProviderID": "8","Route": "901"},{"Description":"METRO Green Line","ProviderID": "8","Route": "902"}]
  const wrapper = shallow(<ChooseRoute routeLoaded={true} routeData={routeData} routeHandler={null} routeChanged={true}/>)
  const expectedReturn = <select id="Route" data-testid="Select-Route" name="Route" onChange={null}>;<option value="901">METRO Blue Line</option><option value="902">METRO Green Line</option></select>;
  expect(wrapper).toContainReact(expectedReturn)
})

test('renders the directions from fake data', () => {
  const stopData= [{"Text": "7th St & Park Station","Value": "7SPK"},{"Text": "7th St & Nicollet Station","Value": "7SNI"}]
  const directionData = [{"Text": "EASTBOUND","Value": "2"},{"Text": "WESTBOUND","Value": "3"}]
  const wrapper = shallow(<ChooseDirection directionLoaded={true} directionData0={directionData[0]} directionData1={directionData[1]} directionHandler={null} testDirection={true}/>);
  const expectedReturn = <input type="radio" name="Direction" id="2" value="2" onClick={null} defaultChecked={true} />;
  expect(wrapper).toContainReact(expectedReturn)
})

test('renders the stops from fake data', () => {
  const stopData= [{"Text": "7th St & Park Station","Value": "7SPK"},{"Text": "7th St & Nicollet Station","Value": "7SNI"}]
  const wrapper = shallow(<ShowStops stopLoaded={true} stopData={stopData}/>);
  const expectedReturn = <ul><li>7th St & Park Station</li><li>7th St & Nicollet Station</li></ul>;
  expect(wrapper).toContainReact(expectedReturn)
})