# NexTrip

The NexTrip application was developed using ReactJS and tested using Jest. It is a one page application that dynamically loads and displays the routes, directions, and stops.
<br/>This application requires npm to be installed, to install it please visit this site: https://npmjs.com/get-npm

## Build

To build this project, please run the command: `npm run build`

## Running NexTrip application

Using your terminal, please navigate to this folder upon download or clone. Once inside this folder run the command: `npm run start` and the terminal should open up a browser navigating to your localhost and port. If not, open a browser and navigate to where the terminal says this application is running.

## Testing

There are 7 test suites - one for each component and service written to test the functionality of this code. To run these tests run the command `npm run test` or run `npm run coverage` to see a breakdown of the coverage report for this application.

The tests can be found in the folder NexTrip/src/tests.

## Assumptions

This application was built with the assumption that the user would want an experience that renders in one page. Because of this each component is dynamic and updates upon the user based interactions (select a route, choose a direction).

This application uses API calls identified and found on this site: https://svc.metrotransit.org/nextrip.
