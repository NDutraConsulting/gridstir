# Gridstir - *Smart Charging & eGrid Support*

**[Live DEMO - Not Available](#)**

**Application Template** is a business to consumer application.

# Required User Stories

### The following **required** functionality is completed:
## Scalable Business functionality
* [ ] As a white-label business,
    * [ ] I want to be able to easily localize the application to any region
    * [ ] I want to be able to quickly rebrand the application names, colors, and messaging to meet business customer requirements.
        * So that I can easliy fork the project for our business customers.
    * [ ] I want to be able to automatically distribute updates to all white label customers.
        * So that the AppStore and the GooglePlay platform requirements\
        can be kept up to date without rebuilding every business customer application.
            * Solution: **Possible Trade Secret** Private Gridstir Framework package that has brand styling sitting on top of it for each business customer.

## Navigation 
* [x] User can navigate to work flows as follows:
    * Dashboard flow for charging the consumers car at home.
    * Travel flow for charging the electric vehicle away from home.
    * Rewards flow for supporting the consumers community.
    * Profile flow for managing user data.

## Travel flow
* As a user I want to,
    * [x] find charging stations near me.
        * so that I can charge my vehicle

## Dashboard flow
* As a user I want to,  
    * [ ] select a vehicle from my garage
        * so that I can manage multiple vehicles from one phone.
    * [ ] see the current charge level of my vehicle
    * [ ] charge my vehicle.
        * So that my car is ready ASAP.
    * [ ] schedule a charge for my vehicle.
        * So that my vehicle is ready by a specific time

## Profile flow:
* [ ] garage (For users with 2 electric vehicles)
* [ ] stats & downloads
        
---

## Optional features:

### Travel flow
* As a user I want to,
    * [ ] know if I will make it to the charging station I have chosen.\
        So that I do not run out of battery on the way there.
    * [ ] know if I need/have a membership for the charging station.\
        So that I can signup if needed.  
              
### Profile flow
* [ ] Wallet Screen
    * [ ] Membership management. 
        * Value:
            1. **Solves a Painpoint.** 
            1. **Micro-Transaction fee revenue**
            1. **Affiliate signup fee revenue**
    * [ ] Payment Management
    * [ ] Registration (low value)
    * [ ] Insurance (low value)
* [ ] Application settings
* [ ] Charging statistics 
    * [ ] Download statistics
    
### Rewards flow
* [ ] Grid Support
* [ ] Tax rebates 
* [ ] Promotions
* TBD
  
  ---
  

## Developer functionality
* [x] Developer can start a local Mock Server so that the developer\
 can verify correctness of the solution.
    * npm run mock-server

* [x] Developer can develop feature and unit tests with\ 
the Mock Server so that team based refactoring & CI/CD\
does not break existing functionality.
    * npm run test

---
# Running the App

## To start the project on iOS run the following in the terminal
Note: this only works on Mac if xcode is installed.
#### `npm install`
#### `cd ios && pod install`

#### `cd ../`
#### `npm start`
### Open a new Terminal window
#### `npm run isim`
#### `npm run ios`
---

## To start the project on android run the following in the terminal
Note: this only works if you have installed Android studio.\
[Learn more about launching AVD from terminal.](https://developer.android.com/studio/run/emulator-commandline)
#### `npm install`
#### `npm start`
### Open a new Terminal window
#### `npm run avd-31`
#### `npm run android`
---

# Other Available Scripts
#### (See package.json)
In the project directory, you can run:

### `npm run ios`

Builds the app for ios. Developer must run npm start in a\
seperate terminal first & have a iOS simulator running.

### `npm run android`

Builds the app for ios. Developer must run npm start in a\ 
seperate terminal first & have an Android emulator running.

### `npm run mock-server`

Launches the node.js mock server for streamlined local development.\
Add routes as needed to mock backend services, so that \
the frontend development team can work \
in parallel with the backend team.

### `npm start`

Runs the Metro builder so that the app can be launched.\
Open a new terminal and then use (npm run ios) or (npm run android) to\
deploy to aa available device or emulator.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
This is used for TDD, refactoring and CI/CD.

### `npm run pretty`

Autofix eslint issues.
