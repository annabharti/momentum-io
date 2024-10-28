# momentum-io
Coding challenge for Momentum.io

This simple app is created by executing `create-vue`
It features two tabs, `Home` and `Create Launch`

In the `Home` view, a user is able to view list of launches, each in a simple `Card` component. The `Card` is clickable and routes user to the details page of the launch; the name of the launch fetched from the URL

A user is able to search the launches' list for fields, `Mission Name`, `Launch Year` and `Rocket Name`

In the `Create Launch` view a user is able to add a new launch to the data set by filling in the fields

## Note
Approach to this project was to learn basics of Vue, and to build app from a basic implementation with then
add on functionalities.

Following were not implemented due to initial focus on becoming familiar with Vue and time constraints:
    - Sorting by launch year
    - Caching
    - Sanitizing input values

Currently the state for `loadedLaunches` in the `launchStore` is being set to have duplicate proxy values. This was the issue I was last trying to resolve.

## Preview App
https://vue-project-qgd3vxhmd-annabhartis-projects.vercel.app

## Running the app
Use `npm run dev` to start local development
App hosted on port 5173

## Running tests
Use `npm run test:unit` to run unit tests