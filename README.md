# NexTrip
The NexTrip application was developed using ReactJS and tested using Jest.  It is a one page application that dynamically loads and displays the routes, directions, and stops.

## Build
To build this project, please run the commands: ```npm build```
Note: This is not necessary to do as this project has already been built.

## Running NexTrip application
Using your terminal, please navigate to this folder upon download or clone.  Once inside this folder run the command: ```npm start``` and the terminal should open up a browser navigating to your localhost and port.  If not, open a browser and navigate to where the terminal says this application is running.

## Testing
There are 10 unit tests written to test the functionality of this code.  To run these tests run the command ```npm test``` and the terminal will start running the test suite with the 10 tests inside.

The test suite containing these tests can be found in the file NexTrip/src/App.test.js.

## Assumptions
This application was built with the assumption that the user would want an experience that renders in one page.  Because of this each component is dynamic and updates upon the user based interactions (select a route, choose a direction).

When creating this application, the API calls identified in the project details were not returning anything / the servers were down or changed.  This project instead uses API calls identified and found on this site: https://svc.metrotransit.org/nextrip.
